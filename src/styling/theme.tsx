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
      primary: "#00D6A9",
      red: "#dd374a",
      bgPrimary: {
        default: "#f4f7fd",
        _dark: "#1B1F20",
      },
      bgSecondary: {
        default: "white",
        _dark: "#212627",
      },
      gray: {
        default: "#f2f1f4",
        _dark: "#1B1F20",
      },
      text: "#0b1014",
    },
    fontSizes: {},
  },
});

export default theme;
