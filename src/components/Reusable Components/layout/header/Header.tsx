import {Box, Heading, Flex} from "@chakra-ui/react";

import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
function Header() {
  return (
    <aside>
      <header>
        <Box position="sticky" top={{lg: "0px", base: "-1px"}} width="100%">
          <Flex
            align={"center"}
            bg="bgSecondary"
            direction={"column"}
            height="100%"
            paddingTop={{lg: "3.4rem", base: "0"}}
            width={{lg: "300px", base: "100%"}}
          >
            <Flex
              align="center"
              direction={"column"}
              gap={{lg: 0, base: "3"}}
              justify="center"
              paddingY={{lg: "0", base: "5"}}
            >
              <Heading>FLO MONEY</Heading>
              <DesktopHeader />
              <MobileHeader />
            </Flex>
          </Flex>
        </Box>
      </header>
    </aside>
  );
}

export default Header;
