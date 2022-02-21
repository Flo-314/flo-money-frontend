import {Flex, Text} from "@chakra-ui/react";
import {FC} from "react";
import {AiOutlineDollarCircle} from "react-icons/ai";

interface Props {
  title: string;
  color: string;
  salary: number | string;
}
const SalaryButton: FC<Props> = ({title, color, salary}) => {
  return (
    <Flex borderRadius={20} direction="column" gap="5" height="100%">
      <Flex
        align={"center"}
        bg={color}
        borderRadius={20}
        direction={{sm: "row", base: "column"}}
        justify="space-around"
        paddingY={5}
      >
        <Flex align="center" color="white" gap="3">
          <AiOutlineDollarCircle size={50} />
          <Text fontSize={{lg: "30", base: "25"}} fontWeight={500}>
            {title}
          </Text>
        </Flex>
        <Text color="white" fontSize={{lg: "40", base: "30"}} fontWeight="700">
          ${salary}
        </Text>
      </Flex>
    </Flex>
  );
};

export default SalaryButton;
