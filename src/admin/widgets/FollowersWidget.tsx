import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import {
  ArrowDropDown,
  ArrowDropUp,
  ArrowRight,
  EmojiEmotions,
  Favorite,
  ThumbUp,
} from "@mui/icons-material";
import React from "react";
import { useTranslation } from "react-i18next";

const socials = [
  {
    bgcolor: "primary.main",
    icon: <ThumbUp sx={{ color: "#fff" }} />,
    name: "Likes",
    trend: <ArrowDropUp sx={{ color: "success.main" }} />,
    unitKey: "admin.home.followers.units.likes",
    value: "26,789",
  },
  {
    bgcolor: "error.main",
    icon: <Favorite style={{ color: "#fff" }} />,
    name: "Love",
    trend: <ArrowRight sx={{ color: "action.disabled" }} />,
    unitKey: "admin.home.followers.units.love",
    value: "6,754",
  },
  {
    bgcolor: "warning.main",
    icon: <EmojiEmotions style={{ color: "#fff" }} />,
    name: "Smiles",
    trend: <ArrowDropDown sx={{ color: "error.main" }} />,
    unitKey: "admin.home.followers.units.smiles",
    value: "52,789",
  },
];

const FollowersWidget = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      {socials.map((social) => (
        <Card key={social.name} sx={{ mb: 2 }}>
          <CardContent sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              aria-label={`${social.name} avatar`}
              sx={{ bgcolor: social.bgcolor, mr: 2 }}
            >
              {social.icon}
            </Avatar>
            <Box sx={{ flexGrow: 1 }}>
              <Typography component="div" variant="h6">
                {social.value}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="div">
                {t(social.name)}
              </Typography>
            </Box>
            {social.trend}
          </CardContent>
        </Card>
      ))}
    </React.Fragment>
  );
};

export default FollowersWidget;
