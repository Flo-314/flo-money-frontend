import {Flex, Text, Select, Button} from "@chakra-ui/react";
import {FC, useState} from "react";
import {SmallAddIcon} from "@chakra-ui/icons";

import sumOfPayments from "../../../helper functions/sumOfPayments";
import {category, payment} from "../../../helper functions/interfaces";

import Transaction from "./Transaction";
import PaymentModal from "./PaymentModal";
import CategoryModal from "./CategoryModal";
interface Props {
  title?: string;
  category?: category;
  arrayOfCategories?: category[];
  isSelected?: boolean;
  isEditable?: boolean;
  isAddible?: boolean;
}
const ListOfTransactions: FC<Props> = ({
  title,
  category,
  arrayOfCategories,
  isSelected,
  isEditable,
  isAddible,
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
      <Flex borderBottom={"1px"} borderColor="gray" gap="2" marginBottom={5} paddingBottom="2">
        <Text fontSize="30" fontWeight={600}>
          {title}
        </Text>

        {isSelected && (
          <Select
            borderColor="green"
            fontSize={20}
            fontWeight={600}
            onChange={(e) => {
              SetSelectedCategory(+e.target.value);
            }}
          >
            {arrayOfCategories &&
              arrayOfCategories.map((category: category, index: number) => {
                return (
                  <option key={index} value={index}>
                    {category.name}
                  </option>
                );
              })}
          </Select>
        )}
        {isAddible && arrayOfCategories && !isSelected ? <CategoryModal isEdit={false} /> : null}
        {isAddible && arrayOfCategories && isSelected ? <PaymentModal isEdit={false} /> : null}
      </Flex>

      {/*  CUANDO ES POR CATEGORIA. */}

      <Flex direction={"column"} gap="5">
        {category &&
          category.payments.map((payment: payment, index) => {
            return (
              <Transaction
                key={index}
                ammount={payment.ammount}
                color={payment.color}
                isEditable={isEditable}
                isIncome={category.isIncome}
                isPayment={true}
                name={payment.name}
              />
            );
          })}

        {/*  CUANDO ES ARRAY DE TODAS LAS CATEGORIAS. */}

        {arrayOfCategories &&
          !isSelected &&
          arrayOfCategories.map((category: category, index) => {
            return (
              <Transaction
                key={index}
                ammount={sumOfPayments(category)}
                color={category.color}
                isCategory={true}
                isEditable={isEditable}
                isIncome={category.isIncome}
                name={category.name}
              />
            );
          })}

        {/*  CUANDO HAY SELECT DE CATEGORIAS */}

        {arrayOfCategories &&
          isSelected &&
          arrayOfCategories[selectedCategory]?.payments.map((payments: payment, index) => {
            return (
              <Transaction
                key={index}
                ammount={payments.ammount}
                color={arrayOfCategories[selectedCategory].color}
                isEditable={isEditable}
                isIncome={arrayOfCategories[selectedCategory].isIncome}
                isPayment={true}
                name={payments.name}
              />
            );
          })}
      </Flex>
    </Flex>
  );
};

export default ListOfTransactions;
