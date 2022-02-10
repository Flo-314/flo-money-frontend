import {Box, Flex, Text} from "@chakra-ui/react";
import {FC} from "react";

import Transaction from "./Transaction";
interface Props {
  title: string;
}
const ListOfTransactions: FC<Props> = ({title}) => {
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
        <Text fontSize="30" fontWeight={600}>
          {title}
        </Text>
      </Box>
      <Flex direction={"column"} gap="5">
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
      </Flex>
    </Flex>
  );
};

export default ListOfTransactions;
