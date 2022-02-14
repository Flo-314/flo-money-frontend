import {Box, Flex, Grid, GridItem, Text, Spinner} from "@chakra-ui/react";
import {useContext, useEffect, useState} from "react";

import {category, user, payment} from "../../helper functions/interfaces";
import {UserContext} from "../../helper functions/UserContext";
import HeaderPage from "../Reusable Components/layout/HeaderPage";
import Graph from "../Reusable Components/Parts of Components/Graph";
import ListOfTransactions from "../Reusable Components/Parts of Components/ListOfTransactions";

function Incomes() {
  const user: user = useContext(UserContext);
  const [selectedCategory, SetSelectedCategory] = useState<number>(0);
  const [payments, setpayments] = useState<category>();
  const [incomes, setIncomes] = useState<Array<category>>([]);

  useEffect(() => {
    if (user.data) {
      setIncomes(user.data.incomes);
      let payments: category = {name: "", _id: "", payments: []};

      user.data.incomes.forEach((category: category) => {
        category.payments.forEach((payment: payment, index) => {
          let newPayment = payment;

          newPayment.isIncome = category.isIncome;
          newPayment.color = category.color;
          payments.payments.push(newPayment);
        });
      });
      setpayments(payments);
    }
  }, [user]);

  return (
    <main>
      {user.data ? (
        <Box bg="bgPrimary" height="100%" minHeight={"100vh"} paddingTop="7rem" width="100%">
          <Box marginLeft={"10%"} maxWidth="1000px" width="80%">
            <section id="overview">
              <HeaderPage title="Ingresos" />

              <Grid
                gap="20"
                templateColumns={{"2xl": "1fr 1fr", sm: "1fr"}}
                templateRows={"minmax(1px, 350px) minmax(1px, 350px)"}
              >
                <GridItem borderRadius={20} height="100%">
                  <ListOfTransactions arrayOfCategories={incomes} title="Categorías" />
                </GridItem>

                <GridItem borderRadius={20}>
                  <ListOfTransactions
                    categories={incomes}
                    category={selectedCategory}
                    setSelectedCategory={SetSelectedCategory}
                    title={"Entradas de "}
                  />
                </GridItem>
                <GridItem>
                  <Graph arrayOfCategories1={incomes} />
                </GridItem>
                <GridItem borderRadius={20}>
                  <ListOfTransactions payments={payments} title={"Todas las entradas"} />
                </GridItem>
              </Grid>
            </section>
          </Box>
        </Box>
      ) : (
        <Flex align="center" direction={"column"} justify={"center"} marginTop={"15%"}>
          <Text fontSize="50" fontWeight={700}>
            Loading...
          </Text>
          <Spinner boxSize={20} color="green" thickness={"15"} />
        </Flex>
      )}
    </main>
  );
}

export default Incomes;
