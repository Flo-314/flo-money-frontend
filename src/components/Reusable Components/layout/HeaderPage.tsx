import {Flex, Heading} from "@chakra-ui/react";
import {FC} from "react";

import UserNav from "./UserNav";
interface Props {
  title: string;
}

const HeaderPage: FC<Props> = ({title}) => {
  return (
    <Flex align={"center"} justify="space-between" marginBottom={10}>
      <Heading>{title}</Heading>
      <UserNav />
    </Flex>
  );
};

export default HeaderPage;
