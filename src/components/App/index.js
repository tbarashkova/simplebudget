import React, { useContext } from "react";

import { ThemeProvider } from "styled-components";

import App from "./app";
import { AppContext } from "../../providers/context";
import { getTheme } from "../../providers/themes/getTheme";

const AppWrapper = () => {
  const { state } = useContext(AppContext);

  return (
    <ThemeProvider theme={getTheme(state.themeName)}>
      <App />
    </ThemeProvider>
  )
}

export default AppWrapper;