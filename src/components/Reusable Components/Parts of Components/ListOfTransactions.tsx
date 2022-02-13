import {Box, Flex, Text} from "@chakra-ui/react";
import {FC} from "react";

import sumOfPayments from "../../../helper functions/sumOfPayments";
import {category} from "../../../helper functions/interfaces";

import Transaction from "./Transaction";
interface Props {
  title: string;
  transactions?: any;
}

const ListOfTransactions: FC<Props> = ({title, transactions}) => {
  return (
    <Flex
      bg="bgSecondary"
      css={{
        "&::-webkit-scrollbar": {
          width: "4px",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "green",
          borderRadius: "24px",
        },
      }}
      direction={"column"}
      maxH="100%"
      overflow={"scroll"}
      overflowX="hidden"
      padding="5"
    >
      <Box borderBottom={"1px"} borderColor="gray" marginBottom={5}>
        <Text fontSize="30" fontWeight={600}>
          {title}
        </Text>
      </Box>
      <Flex direction={"column"} gap="5">
        {transactions &&
          transactions.map((category: category, index: number) => {
            return (
              <Transaction
                key={index}
                ammount={sumOfPayments(category)}
                isDown={false}
                name={category.name}
              />
            );
          })}
      </Flex>
    </Flex>
  );
};

export default ListOfTransactions;
