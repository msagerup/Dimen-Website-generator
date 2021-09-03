import React from "react";
import { createBrowserHistory } from "history";
import GlobalStyles from "./components/GlobalStyles";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { Router } from "react-router-dom";

import routes, { renderRoutes } from "../src/routes/pageRoutes";

const theme = createTheme({
  palette: {
    action: {
      active: "rgba(255, 255, 255, 0.54)",
      hover: "rgba(255, 255, 255, 0.04)",
      selected: "rgba(255, 255, 255, 0.08)",
      disabled: "rgba(255, 255, 255, 0.26)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      focus: "rgba(255, 255, 255, 0.10)",
    },
    background: {
      default: "#282C34",
      paper: "#282C34",
    },
    primary: {
      main: "#D36938",
      dark: "#bd5f34",
      light: "#f39e76",
      contrastText: "#fff",
    },
    secondary: {
      main: "#C4AB70",
    },
    text: {
      primary: "#e6e5e8",
      secondary: "#adb0bb",
    },
  },
});

const history = createBrowserHistory();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router history={history}>{renderRoutes(routes)}</Router>
    </ThemeProvider>
  );
}

export default App;
