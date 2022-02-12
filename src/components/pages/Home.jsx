import {Box, Flex, Grid, GridItem, Spinner, Text} from "@chakra-ui/react";
import {AiOutlineDollarCircle} from "react-icons/ai";
import {useContext} from "react";

import Graph from "../Reusable Components/Parts of Components/Graph";
import Transaction from "../Reusable Components/Parts of Components/Transaction";
import ListOfTransactions from "../Reusable Components/Parts of Components/ListOfTransactions";
import HeaderPage from "../Reusable Components/layout/HeaderPage";
import {UserContext} from "../../helper functions/UserContext";
function Home() {
  const user = useContext(UserContext);

  let lastIncome = {};
  let lastOutcome = {};
  let incomeCategory, outcomeCategory;

  if (user?.data?.data) {
    lastIncome = user.data.incomes[0].payments[0];
    lastOutcome = user.data.outcomes[0].payments[0];
    incomeCategory = user.data.incomes[0].name;
    outcomeCategory = user.data.outcomes[0].name;
  }

  return (
    <main>
      {user.data ? (
        <Box bg="bgPrimary" height="100%" minHeight={"100vh"} paddingTop="7rem" width="100%">
          <Box marginLeft={"10%"} maxWidth="1100px" width="80%">
            <section id="overview">
              <HeaderPage title="Vista General " />

              <Grid
                gap="20"
                templateColumns="1fr 1fr"
                templateRows={"minmax(1px, 300px) minmax(1px, 300px)"}
              >
                <GridItem>
                  {/*  green button with your salary   */}

                  {/*   last  two transsactions   */}
                  <Flex
                    bg="bgSecondary"
                    borderRadius={20}
                    direction="column"
                    gap="5"
                    marginTop={5}
                    padding="6"
                  >
                    <Text borderBottom={"1px"} borderColor="gray" fontSize="25" fontWeight={600}>
                      Ultimas transacciones:
                    </Text>
                    <Transaction
                      ammount={lastOutcome.ammount}
                      isDown={true}
                      name={outcomeCategory}
                    />
                    <Transaction
                      ammount={lastIncome.ammount}
                      isDown={false}
                      name={incomeCategory}
                    />
                  </Flex>
                </GridItem>
                {/*  incomes   */}

                <GridItem borderRadius={20}>
                  <ListOfTransactions
                    title="Ingresos mensuales"
                    transactions={user.data?.incomes}
                  />
                </GridItem>

                {/*  graph   */}
                <GridItem borderRadius={20}>
                  <Graph />
                </GridItem>
                {/*  outcomes   */}

                <GridItem borderRadius={20}>
                  <ListOfTransactions
                    title="Egresos mensuales"
                    transactions={user.data?.outcomes}
                  />
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
          <Spinner boxSize={20} color="green" thickness={15} />
        </Flex>
      )}
    </main>
  );
}

export default Home;
