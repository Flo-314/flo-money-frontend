import {Box, Center, Flex, Link} from "@chakra-ui/react";
import {Menu, MenuButton, MenuList, MenuItem, Button} from "@chakra-ui/react";
import {useContext} from "react";
import {FiLogIn, FiLogOut} from "react-icons/fi";
import {Link as RouteLink} from "react-router-dom";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineCalculator,
  AiOutlineBank,
} from "react-icons/ai";

import {user} from "../../../../helper functions/interfaces";
import {UserContext} from "../../../../helper functions/UserContext";

function MobileHeader() {
  const user: user = useContext(UserContext);

  return (
    <Center display={{lg: "none", base: "inherit"}}>
      <Menu>
        <MenuButton
          as={Button}
          bg={"bgPrimary"}
          fontSize={23}
          fontWeight={"bold"}
          position={{base: "initial", lg: "relative"}}
        >
          Menu
        </MenuButton>

        {user.token ? (
          <MenuList marginX={10}>
            <MenuItem>
              <Link
                as={RouteLink}
                className="primaryStrong"
                color={"primary.strong"}
                display="flex"
                fontSize={23}
                fontWeight={"bold"}
                gap="3"
                to={"/"}
              >
                <Center alignSelf={"center"}>
                  <AiOutlineBank color="green" size="22" />
                </Center>
                Vista General
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                as={RouteLink}
                className="primaryStrong"
                color={"primary.strong"}
                display="flex"
                fontSize={23}
                fontWeight={"bold"}
                gap="3"
                to={"/ingresos"}
              >
                <Center alignSelf={"center"}>
                  <AiOutlineArrowLeft color="green" />
                </Center>
                Ingresos
              </Link>
            </MenuItem>

            <MenuItem>
              <Link
                as={RouteLink}
                className="primaryStrong"
                color={"primary.strong"}
                display="flex"
                fontSize={23}
                fontWeight={"bold"}
                gap="3"
                to={"/egresos"}
              >
                <Center alignSelf={"center"}>
                  <AiOutlineArrowRight color="green" />
                </Center>
                Egresos
              </Link>
            </MenuItem>

            <MenuItem>
              <Link
                as={RouteLink}
                className="primaryStrong"
                color={"primary.strong"}
                display="flex"
                fontSize={23}
                fontWeight={"bold"}
                gap="3"
                to={"/proyecciones"}
              >
                <Center alignSelf={"center"}>
                  <AiOutlineCalculator color="green" />
                </Center>
                Proyecciones
              </Link>
            </MenuItem>
          </MenuList>
        ) : (
          <MenuList>
            <MenuItem>
              <Link
                as={RouteLink}
                className="primaryStrong"
                color={"primary.strong"}
                display="flex"
                fontSize={23}
                fontWeight={"bold"}
                gap="2"
                to={"/login"}
              >
                <Center alignSelf={"center"}>
                  <FiLogIn color="green" />
                </Center>
                Ingresar
              </Link>
            </MenuItem>

            <MenuItem>
              <Link
                as={RouteLink}
                className="primaryStrong"
                color={"primary.strong"}
                display="flex"
                fontSize={23}
                fontWeight={"bold"}
                gap="2"
                to={"/singup"}
              >
                <Center alignSelf={"center"}>
                  <FiLogOut color="green" />
                </Center>
                Crear Cuenta
              </Link>
            </MenuItem>
          </MenuList>
        )}
      </Menu>
    </Center>
  );
}

export default MobileHeader;
