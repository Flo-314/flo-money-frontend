import {MoonIcon, SunIcon} from "@chakra-ui/icons";
import {Button, Center, Flex, Text, useColorMode, Link} from "@chakra-ui/react";
import {AiOutlineUser} from "react-icons/ai";
import {Link as RouteLink} from "react-router-dom";
import {Menu, MenuButton, MenuList, MenuItem} from "@chakra-ui/react";
import {useContext} from "react";

import {UserDispatchContext} from "../../../helper functions/UserContext";

function UserNav() {
  const {colorMode, toggleColorMode} = useColorMode();
  const dispatch = useContext(UserDispatchContext);

  return (
    <nav>
      <Flex gap="5">
        <Flex align={"center"} gap="1" justify={"center"}>
          <Menu>
            <MenuButton
              as={Button}
              borderRadius="10"
              fontSize="25"
              fontWeight={600}
              paddingY="7"
              rightIcon={<AiOutlineUser color="green" size="25" />}
            >
              Mi cuenta
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link as={RouteLink} to="/account">
                  <Text fontSize={20} fontWeight={600}>
                    My Account
                  </Text>
                </Link>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  dispatch({type: "logout"});
                }}
              >
                <Text fontSize={20} fontWeight={600}>
                  Logout
                </Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Button bg="inherit" onClick={toggleColorMode}>
          <Center>
            {colorMode === "light" && <MoonIcon boxSize={25} color="green" />}
            {colorMode === "dark" && <SunIcon boxSize={25} color="green" />}
          </Center>
        </Button>
      </Flex>
    </nav>
  );
}

export default UserNav;
