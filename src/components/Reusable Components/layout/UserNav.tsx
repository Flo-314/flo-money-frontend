import {MoonIcon, SunIcon} from "@chakra-ui/icons";
import {Button, Center, Flex, Text, useColorMode, Link} from "@chakra-ui/react";
import {AiOutlineUser} from "react-icons/ai";
import {Link as RouteLink} from "react-router-dom";

function UserNav() {
  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <nav>
      <Flex gap="5">
        <Flex align={"center"} gap="1">
          <AiOutlineUser color="green" size="25" />
          <Link as={RouteLink} to="/account">
            <Text fontSize="25" fontWeight={600}>
              Mi cuenta
            </Text>
          </Link>
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
