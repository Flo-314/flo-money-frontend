import {Box, Heading, Flex, Center} from "@chakra-ui/react";
import {Wrap, WrapItem, Link} from "@chakra-ui/react";
import {Link as RouteLink} from "react-router-dom";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineCalculator,
  AiOutlineBank,
} from "react-icons/ai";
import {FiLogIn, FiLogOut} from "react-icons/fi";
import {useContext, useState} from "react";

import {UserContext, UserDispatchContext} from "../../../helper functions/UserContext";
function Header() {
  const [selectedPage, setSelectedPage] = useState("vista general");

  const user = useContext(UserContext);

  return (
    <aside>
      <header>
        <Flex
          align={"center"}
          bg="bgSecondary"
          direction={"column"}
          minH="100vh"
          paddingTop="3.4rem"
          width="300px"
        >
          <Box>
            <Heading>FLO MONEY</Heading>
            <nav>
              <Wrap marginTop={10}>
                {user?.token ? (
                  <Flex direction={"column"} fontSize="xl" fontWeight="600" gap={6} width={"100%"}>
                    {" "}
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
                      {}
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
                      bg={selectedPage === "Ingresos" ? "gray" : "inherit"}
                      borderRadius="15"
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
                        to={"/ingresos"}
                        onClick={() => {
                          setSelectedPage("Ingresos");
                        }}
                      >
                        Ingresos
                      </Link>
                    </WrapItem>
                    <WrapItem
                      bg={selectedPage === "Egresos" ? "gray" : "inherit"}
                      borderRadius="15"
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
                        to={"/egresos"}
                        onClick={() => {
                          setSelectedPage("Egresos");
                        }}
                      >
                        Egresos
                      </Link>
                    </WrapItem>
                    <WrapItem
                      bg={selectedPage === "Proyecciones" ? "gray" : "inherit"}
                      borderRadius="15"
                      gap={2}
                      paddingLeft={3}
                      paddingRight="10"
                      paddingY="2"
                      width={"100%"}
                    >
                      <Center alignSelf={"center"}>
                        <AiOutlineCalculator color="green" />
                      </Center>
                      <Link
                        as={RouteLink}
                        to={"/proyecciones"}
                        onClick={() => {
                          setSelectedPage("Proyecciones");
                        }}
                      >
                        Proyecciones
                      </Link>
                    </WrapItem>{" "}
                  </Flex>
                ) : (
                  <Flex direction={"column"} fontSize="xl" fontWeight="600" gap={6} width={"100%"}>
                    <WrapItem
                      bg={selectedPage === "login" ? "gray" : "inherit"}
                      borderRadius="15"
                      gap={2}
                      paddingLeft={3}
                      paddingRight="10"
                      paddingY="2"
                      width={"100%"}
                    >
                      <Center alignSelf={"center"}>
                        <FiLogIn color="green" />
                      </Center>
                      <Link
                        as={RouteLink}
                        to={"/login"}
                        onClick={() => {
                          setSelectedPage("login");
                        }}
                      >
                        Login
                      </Link>
                    </WrapItem>
                    <WrapItem
                      bg={selectedPage === "singup" ? "gray" : "inherit"}
                      borderRadius="15"
                      gap={2}
                      paddingLeft={3}
                      paddingRight="10"
                      paddingY="2"
                      width={"100%"}
                    >
                      <Center alignSelf={"center"}>
                        <FiLogOut color="green" />
                      </Center>
                      <Link
                        as={RouteLink}
                        to={"/singup"}
                        onClick={() => {
                          setSelectedPage("singup");
                        }}
                      >
                        Singup
                      </Link>
                    </WrapItem>{" "}
                  </Flex>
                )}
              </Wrap>
            </nav>
          </Box>
        </Flex>
      </header>
    </aside>
  );
}

export default Header;
