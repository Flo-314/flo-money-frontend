import {Flex, Text, Select} from "@chakra-ui/react";
import {FC, useState} from "react";

import sumOfPayments from "../../../helper functions/Logic/sumOfPayments";
import {category, payment} from "../../../helper functions/types/interfaces";

import Transaction from "./Transaction";
import PaymentModal from "./PaymentModal";
import CategoryModal from "./CategoryModal";
interface Props {
  title?: string;
  category?: category;
  arrayOfCategories?: category[];
  isSelected?: boolean;
  isAddible?: boolean;
  isIncome?: boolean;
  noColor?: boolean;
}
const ListOfTransactions: FC<Props> = ({
  title,
  category,
  arrayOfCategories,
  isSelected,
  isAddible,
  isIncome,
  noColor,
}) => {
  const [selectedCategory, SetSelectedCategory] = useState<number>(0);

  return (
    <Flex
      bg="bgSecondary"
      borderRadius={10}
      css={{
        "&::-webkit-scrollbar": {
          marginBottom: "1.2rem",
          width: "4px",
        },
        "&::-webkit-scrollbar-track": {
          marginBottom: "1.2rem",
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: isIncome ? "green" : "red",
          borderRadius: "24px",
        },
        "::-webkit-scrollbar-corner": {
          background: "rgba(0,0,0,0)",
        },
      }}
      direction={"column"}
      height="100%"
      maxH="100%"
      overflowY={"scroll"}
      padding="6"
    >
      <Flex
        borderBottom={"1px"}
        borderColor="gray"
        gap="2"
        justifyContent={"space-between"}
        marginBottom={5}
        paddingBottom="2"
      >
        <Text fontSize="25" fontWeight={600}>
          {title}
        </Text>

        {isSelected && (
          <Select
            borderColor={isIncome ? "green" : "red"}
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
        {isAddible && arrayOfCategories && !isSelected ? (
          <CategoryModal isEdit={false} isIncome={isIncome} />
        ) : null}
        {isAddible && arrayOfCategories && arrayOfCategories.length > 0 && isSelected ? (
          <PaymentModal
            category={arrayOfCategories[selectedCategory]}
            isEdit={false}
            isIncome={isIncome}
          />
        ) : null}

        {isAddible && !arrayOfCategories && category && !isSelected ? (
          <PaymentModal category={category} isEdit={false} isIncome={isIncome} />
        ) : null}
      </Flex>

      {/*  CUANDO ES POR CATEGORIA. */}

      <Flex direction={"column"} gap="5">
        {category &&
          category.payments.map((payment: payment, index) => {
            return (
              <Transaction
                key={index}
                ammount={payment.ammount}
                category={category}
                color={payment.color}
                isEditable={isAddible}
                isIncome={category.isIncome}
                name={payment.name}
                noColor={noColor}
                payment={payment}
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
                category={category}
                color={category.color}
                isEditable={isAddible}
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
                category={arrayOfCategories[selectedCategory]}
                color={arrayOfCategories[selectedCategory].color}
                isEditable={isAddible}
                isIncome={arrayOfCategories[selectedCategory].isIncome}
                name={payments.name}
                payment={payments}
              />
            );
          })}
      </Flex>
    </Flex>
  );
};

export default ListOfTransactions;
