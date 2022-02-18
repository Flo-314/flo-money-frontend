import {Box, Center, Flex, Link} from "@chakra-ui/react";
import {Menu, MenuButton, MenuList, MenuItem, Button} from "@chakra-ui/react";
import {Link as RouteLink} from "react-router-dom";

function MobileHeader() {
  return (
    <Center display={{lg: "none", base: "inherit"}}>
      <Menu>
        <MenuButton as={Button} bg={"bgPrimary"} fontSize={23} fontWeight={"bold"}>
          Menu
        </MenuButton>

        <MenuList>
          <MenuItem>
            <Link
              as={RouteLink}
              className="primaryStrong"
              color={"primary.strong"}
              fontSize={23}
              fontWeight={"bold"}
              to={"/"}
            >
              Vista General
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              as={RouteLink}
              className="primaryStrong"
              color={"primary.strong"}
              fontSize={23}
              fontWeight={"bold"}
              to={"/ingresos"}
            >
              Ingresos{" "}
            </Link>
          </MenuItem>

          <MenuItem>
            <Link
              as={RouteLink}
              className="primaryStrong"
              color={"primary.strong"}
              fontSize={23}
              fontWeight={"bold"}
              to={"/egresos"}
            >
              Egresos
            </Link>
          </MenuItem>

          <MenuItem>
            <Link
              as={RouteLink}
              className="primaryStrong"
              color={"primary.strong"}
              fontSize={23}
              fontWeight={"bold"}
              to={"/proyecciones"}
            >
              Proyecciones
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Center>
  );
}

export default MobileHeader;
