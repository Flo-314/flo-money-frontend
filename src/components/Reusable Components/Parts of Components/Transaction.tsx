import {Box, Flex, Text} from "@chakra-ui/react";
import {FC} from "react";
import {AiFillCaretDown, AiFillCaretUp} from "react-icons/ai";
interface Props {
  name: string;
  ammount: number;
  isDown: boolean;
  color: string;
}
const Transaction: FC<Props> = ({name, ammount, isDown, color}) => {
  return (
    <Flex borderBottom={"1px"} borderColor="gray" justify={"space-between"} paddingBottom="5">
      <Flex align={"center"} gap="5">
        <Box bg={color} borderRadius={"full"} height="38px" width="38px" />
        <Text fontSize="25" fontWeight={500}>
          {name}
        </Text>
      </Flex>
      <Flex align={"center"} gap="2">
        {isDown ? (
          <AiFillCaretDown color="red" size={20} />
        ) : (
          <AiFillCaretUp color="green" size={20} />
        )}
        <Text fontSize={30} fontWeight={600}>
          ${ammount}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Transaction;
