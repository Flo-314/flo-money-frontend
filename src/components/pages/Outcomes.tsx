import {Box, Flex, Grid, GridItem, Text, Spinner, Link} from "@chakra-ui/react";
import {useContext, useEffect, useState} from "react";
import {Link as RouteLink} from "react-router-dom";

import {category, user} from "../../helper functions/types/interfaces";
import {UserContext} from "../../helper functions/React Logic/UserContext";
import HeaderPage from "../Reusable Components/layout/HeaderPage";
import Graph from "../Reusable Components/Parts of Components/Graph";
import ListOfTransactions from "../Reusable Components/Parts of Components/ListOfTransactions";

function Incomes() {
  const user: user = useContext(UserContext);
  const [payments, setpayments] = useState<category>();
  const [outcomes, setIncomes] = useState<Array<category>>([]);

  useEffect(() => {
    if (user.data) {
      setIncomes(user.data.outcomes);
      let payments: category = {name: "", _id: "", color: "", payments: []};

      user.data.outcomes.forEach((category: category) => {
        category.payments.forEach((payment: any) => {
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
      {user.data && (
        <Box bg="bgPrimary" height="100%" minHeight={"100vh"} paddingY="3rem" width="100%">
          <Box marginLeft={"10%"} maxWidth="1000px" width="80%">
            <section id="overview">
              <HeaderPage title="Egresos" />

              <Grid
                gap="20"
                templateColumns={{xl: "1fr 1fr", sm: "1fr", base: "minmax(1px, 1fr)"}}
                templateRows={{
                  xl: "minmax(1px, 350px) minmax(1px, 350px)",
                  base: "minmax(1px, 350px) minmax(1px, 350px)  minmax(1px, 350px) minmax(1px, 350px)",
                }}
              >
                <GridItem borderRadius={20} height="100%">
                  <ListOfTransactions
                    arrayOfCategories={outcomes}
                    isAddible={true}
                    title="Categor??as"
                  />
                </GridItem>

                <GridItem borderRadius={20}>
                  <ListOfTransactions
                    arrayOfCategories={outcomes}
                    isAddible={true}
                    isSelected={true}
                  />
                </GridItem>
                <GridItem>
                  <Graph arrayOfCategories1={outcomes} />
                </GridItem>
                <GridItem borderRadius={20}>
                  <ListOfTransactions category={payments} title={"Todas las salidas"} />
                </GridItem>
              </Grid>
            </section>
          </Box>
        </Box>
      )}
      {!user.data && user.token && (
        <Flex align="center" direction={"column"} justify={"center"} marginTop={"15%"}>
          <Text fontSize="50" fontWeight={700}>
            Loading...
          </Text>
          <Spinner boxSize={200} color="green" thickness={"3em"} />
        </Flex>
      )}
      {!user.data && !user.token && (
        <Flex align="center" direction={"column"} justify={"center"} marginTop={"15%"}>
          <Text fontSize="50" fontWeight={700}>
            Por favor{" "}
            <Link as={RouteLink} color="green.500" to={"/login"}>
              inicia sesion
            </Link>{" "}
            o{" "}
            <Link as={RouteLink} color="green.500" to={"/singup"}>
              crea tu cuenta
            </Link>
          </Text>
        </Flex>
      )}
    </main>
  );
}

export default Incomes;
