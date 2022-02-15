import {Box, Flex, Text, Select, Button} from "@chakra-ui/react";
import {FC} from "react";
import {EditIcon, SmallAddIcon} from "@chakra-ui/icons";

import sumOfPayments from "../../../helper functions/sumOfPayments";
import {category} from "../../../helper functions/interfaces";

import Transaction from "./Transaction";
interface Props {
  title: string;
  arrayOfCategories?: category[];
  category?: number;
  categories?: category[];
  setSelectedCategory?: any;
  payments?: category;
  color?: string;
}
const ListOfTransactions: FC<Props> = ({
  title,
  arrayOfCategories,
  category,
  categories,
  setSelectedCategory,
  payments,
}) => {
  const [selectedCategory, SetSelectedCategory] = useState<number>(0);

  return (
    <Flex
      bg="bgSecondary"
      borderRadius={10}
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
      height="100%"
      maxH="100%"
      overflow={"scroll"}
      overflowX="hidden"
      padding="6"
    >
      <Box borderBottom={"1px"} borderColor="gray" marginBottom={5}>
        <Text fontSize="30" fontWeight={600}>
          {title}
        </Text>

        {setSelectedCategory && (
          <Select
            onChange={(e) => {
              setSelectedCategory(e.target.value);
            }}
          >
            {categories &&
              categories.map((category: category, index: number) => {
                return (
                  <option key={index} value={index}>
                    {category.name}
                  </option>
                );
              })}
          </Select>
        )}
      </Box>
      <Flex direction={"column"} gap="5">
        {arrayOfCategories &&
          arrayOfCategories.map((category: category, index: number) => {
            return (
              <Transaction
                key={index}
                ammount={sumOfPayments(category)}
                color={category.color}
                isDown={!category.isIncome}
                name={category.name}
              />
            );
          })}

        {category &&
          categories &&
          categories[category].payments.map((payment, index) => {
            return (
              <Transaction
                key={index}
                ammount={payment.ammount}
                color={categories[category].color}
                isDown={false}
                name={payment.name}
              />
            );
          })}
        {payments &&
          payments.payments.map((payment, index) => {
            return (
              <Transaction
                key={index}
                ammount={payment.ammount}
                color={payment.color}
                isDown={!payment.isIncome}
                name={payment.name}
              />
            );
          })}
      </Flex>
    </Flex>
  );
};

export default ListOfTransactions;
