import {Box, Flex, Text} from "@chakra-ui/react";

import Transaction from "./Transaction";

function ListOfTransactions() {
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
      maxH="280px"
      overflow={"scroll"}
      overflowX="hidden"
      padding="5"
    >
      <Box borderBottom={"1px"} borderColor="gray" marginBottom={5}>
        <Text fontSize="21" fontWeight={600}>
          Entradas Mensuales
        </Text>
      </Box>
      <Box>
        <Transaction ammount={575} isDown={false} name="nk8 studio" />
        <Transaction ammount={575} isDown={false} name="nk8 studio" />
        <Transaction ammount={575} isDown={false} name="nk8 studio" />
        <Transaction ammount={575} isDown={false} name="nk8 studio" />
        <Transaction ammount={575} isDown={false} name="nk8 studio" />
        <Transaction ammount={575} isDown={false} name="nk8 studio" />
        <Transaction ammount={575} isDown={false} name="nk8 studio" />
        <Transaction ammount={575} isDown={false} name="nk8 studio" />
        <Transaction ammount={575} isDown={false} name="nk8 studio" />
        <Transaction ammount={575} isDown={false} name="nk8 studio" />
        <Transaction ammount={575} isDown={false} name="nk8 studio" />
        <Transaction ammount={575} isDown={false} name="nk8 studio" />
        <Transaction ammount={575} isDown={false} name="nk8 studio" />
      </Box>
    </Flex>
  );
}

export default ListOfTransactions;
