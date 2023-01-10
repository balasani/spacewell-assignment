import { Grid } from "@mui/material";
import React, {useEffect} from "react";
import AdminAppBar from "../components/AdminAppBar";
import AdminToolbar from "../components/AdminToolbar";
import RecentNotifications from "../components/RecentNotifications";
import * as THREE from "three";
//import Stats from '../components/demo/stats.module';
import { OrbitControls } from '../components/demo/OrbitControls';
import { RoomEnvironment } from '../components/demo/RoomEnvironment';
import { GLTFLoader } from '../components/demo/GLTFLoader';
import { DRACOLoader } from '../components/demo/DRACOLoader';

const Demo = () => { 
  // useEffect(()=>{
  //   var scene = new THREE.Scene();
  //     var camera = new THREE.PerspectiveCamera( 50, window.innerWidth/window.innerHeight, 0.1, 1000 );
  //     var renderer = new THREE.WebGLRenderer();
  //     console.log('window.innerWidth', window.innerWidth)
  //     renderer.setSize( window.innerWidth/1.5, window.innerHeight/1.5);
  //     var AScreen = document.getElementById("demo");
  //     //document.body.appendChild( renderer.domElement );
  //     if(AScreen)  AScreen.appendChild( renderer.domElement )
  //     var geometry = new THREE.BoxGeometry( 1, 1, 1 );
  //     var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  //     var cube = new THREE.Mesh( geometry, material );
  //     scene.add( cube );
  //     camera.position.z = 5;
  //     var animate = function () {
  //       requestAnimationFrame( animate );
  //       cube.rotation.x += 0.01;
  //       cube.rotation.y += 0.01;
  //       renderer.render( scene, camera );
  //     };
  //     animate();
  // },[])
  useEffect(()=>{
    let mixer: any;

    const clock = new THREE.Clock();
    const container = document.getElementById( 'demo' );

    //const stats = new Stats();
    //if(container) container.appendChild( stats.dom )

    const renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.outputEncoding = THREE.sRGBEncoding;
    if(container) container.appendChild( renderer.domElement )

    const pmremGenerator = new THREE.PMREMGenerator( renderer );

    const scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xbfe3dd );
    
    scene.environment = pmremGenerator.fromScene( new RoomEnvironment(), 0.04 ).texture;

    const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 100 );
    camera.position.set( 5, 2, 8 );
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
    const controls = new OrbitControls( camera, renderer.domElement );
    controls.target.set( 0, 0.5, 0 );
    controls.update();
    controls.enablePan = false;
    controls.enableDamping = true;

    const dracoLoader = new DRACOLoader();
			dracoLoader.setDecoderPath( './bin/' );
      console.log('dracoLoader', dracoLoader)
			const loader = new GLTFLoader();
      console.log('loader1111', loader);
			loader.setDRACOLoader( dracoLoader );
      console.log('loader222', loader);
			loader.load( './LittlestTokyo.glb', function ( gltf: any ) {
        console.log('gltf', gltf);
				const model = gltf.scene;
				model.position.set( 1, 1, 0 );
				model.scale.set( 0.01, 0.01, 0.01 );
				scene.add( model );

				mixer = new THREE.AnimationMixer( model );
				mixer.clipAction( gltf.animations[ 0 ] ).play();
        var animate = function () {

          requestAnimationFrame( animate );
  
          const delta = clock.getDelta();
  
          mixer.update( delta );
  
          controls.update();
  
          //stats.update();
  
          renderer.render( scene, camera );
  
        }
				animate();

			}, undefined, function ( e:any ) {

				console.error('*************', e );

			} );
  },[])
  return (
    <React.Fragment>
      <AdminAppBar>
        <AdminToolbar>
          <RecentNotifications />
        </AdminToolbar>
      </AdminAppBar>
      <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={6} lg={3}>
           <div id="demo"/>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Demo;
