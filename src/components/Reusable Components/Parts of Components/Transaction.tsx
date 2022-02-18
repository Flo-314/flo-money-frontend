import {Box, Flex, Text} from "@chakra-ui/react";
import {FC} from "react";
import {AiFillCaretDown, AiFillCaretUp} from "react-icons/ai";

import {category, payment} from "../../../helper functions/interfaces";

import CategoryModal from "./CategoryModal";
import PaymentModal from "./PaymentModal";

interface Props {
  name: string;
  ammount: number;
  isIncome?: boolean;
  color: string;
  payment?: payment;
  category?: category;
  isEditable?: boolean;
  noColor?: boolean;
}
const Transaction: FC<Props> = ({
  name,
  ammount,
  isIncome,
  color,
  payment,
  category,
  isEditable,
  noColor,
}) => {
  console.log(isIncome);

  return (
    <Flex borderBottom={"1px"} borderColor="gray" justify={"space-between"} paddingBottom="5">
      <Flex align={"center"} gap="5">
        {noColor ? null : <Box bg={color} borderRadius={"full"} height="38px" width="38px" />}
        <Text fontSize="25" fontWeight={500}>
          {name}
        </Text>
      </Flex>
      <Flex align={"center"} gap="2">
        {!isIncome ? (
          <AiFillCaretDown color="red" size={20} />
        ) : (
          <AiFillCaretUp color="green" size={20} />
        )}
        <Text fontSize={30} fontWeight={600}>
          ${ammount}
        </Text>
        {payment && category && isEditable && (
          <PaymentModal category={category} isEdit={true} isIncome={isIncome} payment={payment} />
        )}
        {category && !payment && isEditable && (
          <CategoryModal category={category} isEdit={true} isIncome={isIncome} />
        )}
      </Flex>
    </Flex>
  );
};

export default Transaction;
