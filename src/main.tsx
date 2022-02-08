import React from "react";
import ReactDOM from "react-dom";
import {ColorModeScript, ChakraProvider} from "@chakra-ui/react";

import theme from "./styling/theme";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
