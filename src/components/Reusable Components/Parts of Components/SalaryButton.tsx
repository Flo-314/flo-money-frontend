import {Flex, Text} from "@chakra-ui/react";
import {AiOutlineDollarCircle} from "react-icons/ai";

const SalaryButton = () => {
  return (
    <Flex bg="primary" borderRadius={15} color="white" justify="space-around" paddingY={2}>
      <Flex align={"center"} gap="2">
        <AiOutlineDollarCircle color="white" size={50} />
        <Text fontSize={30} fontWeight={500}>
          Mi saldo
        </Text>
      </Flex>
      <Text fontSize={40} fontWeight={600}>
        {" "}
        $1.520.000
      </Text>
    </Flex>
  );
};

export default SalaryButton;
