# React Admin Web Shell

This project was bootstraped with the [react-material-admin](https://github.com/m6v3l9/react-material-admin) project. The goal is to use it as a web shell starting point.

## Getting Started

1. Install dependencies

```
npm install
```

2. Run the app

```
npm run start
```

This will automatically start the app and open it in the default browser. [http://localhost:3000](http://localhost:3000).

_More scripts can be found in the `package.json` file._

## Current Features

- Admin
  - Home
  - Dashboard with Charts
  - FAQ
  - Help Center
  - Profile Activity
  - Profile Information
  - Profile Password
- Auth
  - Forgot Password
  - Forgot Password Submit
  - Login (local storage & mock server)
  - Register
- Calendar App
- Forbidden Page & Route
- Not Found Page & Route
- In Progress Page & Route
- Landing Page
- User Management - translation, dark/light mode, collapsable menu drawer

## Current Pages

- Admin
  - Admin
  - Dashboard
  - FAQ
  - HelpCenter
  - Home (empty)
  - Home2 (includes widgets for examples)
  - Profile
  - ProfileActivity
  - ProfileInformation
  - ProfilePassword
- Auth
  - ForgotPassword
  - ForgotPasswordSubmit
  - Login
  - Register
- Calendar
- Core
  - Forbidden
  - InProgress
  - NotFound
- Landing
- UserManagement

## Current Components

- Admin
  - AdminAppBar
  - AdminDrawer
  - AdminToolbar
  - RecentNotifications
- Calendar
  - Calendar
  - EventDialog
- Core
  - BoxedLayout
  - ConfirmDialog
  - Empty
  - Footer
  - Loader
  - Logo
  - PrivateRoute
  - QueryWrapper
  - Result
  - SelectToolbar
  - SettingsDrawer
  - SvgContainer
- Landing
  - LandingLayout
- Users
  - UserDialog
  - UserTable

## Current Widgets

- Admin
  - AchievementWidget
  - ActivityWidget
  - BudgetWidget
  - CircleProgressWidget
  - FollowersWidget
  - MeetingWidget
  - OverviewWidget
  - PersonalTargetsWidget
  - ProgressWidget
  - SalesByAgeWidget
  - SalesByCategoryWidget
  - SalesHistoryWidget
  - TeamProgressWidget
  - UsersWidget
  - ViewsWidget
  - WelcomeWidget

## Tech Used

| Package               | Description                                                                  | Docs                                                                            |
| --------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Bundle Size Analyzer  | Source map explorer _(analyzes JS bundles to determine bloat and tech debt)_ | [Docs](https://create-react-app.dev/docs/analyzing-the-bundle-size)             |
| Charts                | Recharts                                                                     | [Docs](https://recharts.org/)                                                   |
| Code Splitting        | Route-based code splitting _(included in React)_                             | [Docs](https://reactjs.org/docs/code-splitting.html#route-based-code-splitting) |
| Components            | Material-UI                                                                  | [Docs](https://material-ui.com/)                                                |
| Data Fetching         | React Query Toolkit _(asynchronous state management)_                        | [Docs](https://react-query.tanstack.com/)                                       |
| Deployment            | Github Pages                                                                 | [Docs](https://create-react-app.dev/docs/deployment#github-pages)               |
| Environment Variables | Dotenv _(included in Create React App)_                                      | [Docs](https://create-react-app.dev/docs/adding-custom-environment-variables)   |
| Error Monitoring      | Sentry _(error tracking)_                                                    | [Docs](https://docs.sentry.io/platforms/javascript/guides/react/)               |
| Form                  | Formik _(building forms within React)_                                       | [Docs](https://formik.org/)                                                     |
| I18N                  | react-i18next _(internationalization framework for React)_                   | [Docs](https://react.i18next.com/)                                              |
| Routing               | React Router                                                                 | [Docs](https://reactrouter.com/)                                                |
| Theming (+ dark mode) | Material-UI                                                                  | [Docs](https://material-ui.com/customization/theming/)                          |
| Toolchain             | Create React App                                                             | [Docs](https://create-react-app.dev/)                                           |
| TypeScript            | TypeScript                                                                   | [Docs](https://create-react-app.dev/docs/adding-typescript/)                    |
| Validation            | Yup _(value parsing and validation at runtime)_                              | [Docs](https://github.com/jquense/yup)                                          |

## Customized Work Done to Get to Current State

- Migrated from `yarn` to `npm`
- Updated all material-ui imports
- Replaced favicon
- Replaced logo
- Replaced font family
- Replaced colors within color palette to be in line with Synergex's styling guide
- Added a new menu item, including new route
- Updated translations where appropriate
- Replaced images on Login, Forbidden, In Progress, and Not Found pages

## Notes

Overall, it seems like a pretty good starting point for what we are looking for. It's simple enough that there is not an overload of prebuilt components and/or pages, which makes it easier to build from and refactor to our personal preferences. Plus, material basics are already set up which is kind of nice. However, we'd need to add **testing** for all components, pages, and widgets and a little **refactoring** within the code and file tree might need to be done to make it more scalable for our purposes. We also might want to look at how the **routing** is set up as well as **hot reload** (currently it's glitchy). We also need to set up better rules within the **`tsconfig.json`** file and add **prettier**.

### Think Abouts to Add/Update

- [ ] Dependency packages audit
- [ ] Redo file organization
- [ ] Add unit tests (coverage %?)
- [ ] E2E testing?
- [ ] Add comments within code
- [ ] Routing might need a bit of refactoring/Better comments
- [ ] Debug hot reload functionality
- [ ] Update `tsconfig.json` file
- [ ] Add Prettier (formatter)
- [ ] Set up repo with SSL Cert locally
