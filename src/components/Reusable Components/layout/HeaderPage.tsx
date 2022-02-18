import {Flex, Heading} from "@chakra-ui/react";
import {FC} from "react";

import UserNav from "./UserNav";
interface Props {
  title: string;
  noUserNav?: boolean;
}

const HeaderPage: FC<Props> = ({title, noUserNav}) => {
  return (
    <Flex
      align={"center"}
      direction={{lg: "row", base: "column"}}
      gap={{lg: "0", base: "5"}}
      justify="space-between"
      marginBottom={10}
    >
      <Heading>{title}</Heading>
      {noUserNav ? null : <UserNav />}
    </Flex>
  );
};

export default HeaderPage;
