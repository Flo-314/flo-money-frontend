import {Box, Flex, Text} from "@chakra-ui/react";
import {FC} from "react";
import {AiFillCaretDown, AiFillCaretUp} from "react-icons/ai";

import CategoryModal from "./CategoryModal";
import PaymentModal from "./PaymentModal";

interface Props {
  name: string;
  ammount: number;
  isIncome?: boolean;
  color: string;
  isEditable?: boolean;
  isCategory?: boolean;
  isPayment?: boolean;
}
const Transaction: FC<Props> = ({
  name,
  ammount,
  isIncome,
  color,
  isEditable,
  isPayment,
  isCategory,
}) => {
  return (
    <Flex borderBottom={"1px"} borderColor="gray" justify={"space-between"} paddingBottom="5">
      <Flex align={"center"} gap="5">
        <Box bg={color} borderRadius={"full"} height="38px" width="38px" />
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
        {isEditable && isPayment && <PaymentModal isEdit={true} />}
        {isEditable && isCategory && <CategoryModal isEdit={true} />}
      </Flex>
    </Flex>
  );
};

export default Transaction;

/*
edit payment
  -api(id, ammount,name,ismonthly)
    agarras la id, fetcheas un PUT con el nuevo payment.
  -state(isIncome, id)
    -is income?
      -if true
        -buscar en incomes
          -buscar en cada categoria
            -remplazar por nuevo state

      -if false
        -buscar en outcomes
          -buscar en cada categoria
            -remplazar por nuevo state



edit category
  -api(id, name,color)
    agarras la id, fetcheas un PUT con el nuevo payment.
  -state(isIncome, id)
    -is income?
      -if true
        -buscar en incomes
          -buscar en cada categoria
            -remplazar por nuevo state

      -if false
        -buscar en outcomes
          -buscar en cada categoria
            -remplazar por nuevo state





*/
