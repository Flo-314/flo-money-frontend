import {Box, Heading, Flex, Center} from "@chakra-ui/react";
import {Wrap, WrapItem, Link} from "@chakra-ui/react";
import {Link as RouteLink} from "react-router-dom";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineCalculator,
  AiOutlineBank,
} from "react-icons/ai";
import {useState} from "react";
import {useColorMode} from "@chakra-ui/react";
import {MoonIcon, SunIcon} from "@chakra-ui/icons";
function Header() {
  const {colorMode, toggleColorMode} = useColorMode();

  const [selectedPage, setSelectedPage] = useState("vista general");

  return (
    <aside>
      <header>
        <Flex align={"center"} direction={"column"} paddingTop="7rem" width="300px">
          <Box>
            <Heading>FLO MONEY</Heading>
            <nav>
              <Wrap marginTop={10}>
                <Flex direction={"column"} fontSize="xl" fontWeight="600" gap={6} width={"100%"}>
                  <WrapItem
                    bg={selectedPage === "vista general" ? "primary" : "inherit"}
                    borderRadius="15"
                    color={selectedPage === "vista general" ? "white" : "inherit"}
                    gap={2}
                    paddingLeft={3}
                    paddingRight="10"
                    paddingY="2"
                    width={"100%"}
                  >
                    <Center alignSelf={"center"}>
                      <AiOutlineBank
                        color={selectedPage === "vista general" ? "white" : "green"}
                        size="22"
                      />
                    </Center>
                    <Link
                      as={RouteLink}
                      to={"/"}
                      onClick={() => {
                        setSelectedPage("vista general");
                      }}
                    >
                      Vista General
                    </Link>
                  </WrapItem>
                  <WrapItem
                    bg={selectedPage === "entradas" ? "gray" : "inherit"}
                    borderRadius="15"
                    color={selectedPage === "entradas" ? "black" : "inherit"}
                    gap={2}
                    paddingLeft={3}
                    paddingRight="10"
                    paddingY="2"
                    width={"100%"}
                  >
                    <Center alignSelf={"center"}>
                      <AiOutlineArrowLeft color="green" />
                    </Center>
                    <Link
                      as={RouteLink}
                      to={"/entries"}
                      onClick={() => {
                        setSelectedPage("entradas");
                      }}
                    >
                      Entradas
                    </Link>
                  </WrapItem>
                  <WrapItem
                    bg={selectedPage === "salidas" ? "gray" : "inherit"}
                    borderRadius="15"
                    color={selectedPage === "salidas" ? "black" : "inherit"}
                    gap={2}
                    paddingLeft={3}
                    paddingRight="10"
                    paddingY="2"
                    width={"100%"}
                  >
                    <Center alignSelf={"center"}>
                      <AiOutlineArrowRight color="green" />
                    </Center>
                    <Link
                      as={RouteLink}
                      to={"/output"}
                      onClick={() => {
                        setSelectedPage("salidas");
                      }}
                    >
                      Salidas
                    </Link>
                  </WrapItem>
                  <WrapItem
                    bg={selectedPage === "calcular" ? "gray" : "inherit"}
                    borderRadius="15"
                    color={selectedPage === "calcular" ? "black" : "inherit"}
                    gap={2}
                    paddingLeft={3}
                    paddingRight="10"
                    paddingY="2"
                    width={"100%"}
                  >
                    <Center alignSelf={"center"}>
                      <AiOutlineCalculator color="green" />{" "}
                    </Center>
                    <Link
                      as={RouteLink}
                      to={"/calculate"}
                      onClick={() => {
                        setSelectedPage("calcular");
                      }}
                    >
                      Calcular
                    </Link>
                  </WrapItem>
                  <WrapItem>
                    {colorMode === "light" && <MoonIcon boxSize={10} onClick={toggleColorMode} />}
                    {colorMode === "dark" && <SunIcon boxSize={10} onClick={toggleColorMode} />}
                  </WrapItem>
                </Flex>
              </Wrap>
            </nav>
          </Box>
        </Flex>
      </header>
    </aside>
  );
}

export default Header;
