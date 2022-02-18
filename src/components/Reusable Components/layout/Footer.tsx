import {Center, Flex, Link, Text} from "@chakra-ui/react";
import {AiFillGithub} from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <Flex align="center" direction={"column"} gap="5" justify={"center"} paddingY="15">
        <Text fontSize={20}>No me hago responsable de la seguridad o perdida de los datos.</Text>
        <Flex gap="2">
          <Link href="https://github.com/Flo-314">
            <Text fontSize="25" fontWeight={600}>
              Github
            </Text>
          </Link>
          <Center>
            <Link href="https://github.com/Flo-314">
              <AiFillGithub size={28} />
            </Link>
          </Center>
        </Flex>
      </Flex>
    </footer>
  );
}

export default Footer;
