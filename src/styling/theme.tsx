import {extendTheme} from "@chakra-ui/react";
import {createBreakpoints} from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  mobile: "375px",
  tablet: "1050px",
  desktop: "1920px",
});
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
const theme = extendTheme({
  breakpoints,
  config,
  semanticTokens: {
    colors: {
      primary: "#72d4a9",
      red: "#dd374a",
      bgPrimary: {
        default: "#f4f7fd",
        _dark: "#272a2b",
      },
      bgSecondary: {
        default: "#fffff",
        _dark: "#272a2b",
      },
      gray: "#f1f0f3",
      text: "#0b1014",
    },
    fontSizes: {},
  },
});

export default theme;
