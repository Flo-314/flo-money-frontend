import {Box, Flex, Grid, GridItem, Text} from "@chakra-ui/react";
import {useContext} from "react";
import {AiOutlineDollarCircle} from "react-icons/ai";

import sumOfCategory from "../../helper functions/sumOfCategory";
import {UserContext} from "../../helper functions/UserContext";
import HeaderPage from "../Reusable Components/layout/HeaderPage";
import {user} from "../../helper functions/interfaces";
import ListOfTransactions from "../Reusable Components/Parts of Components/ListOfTransactions";
import sumOfPayments from "../../helper functions/sumOfPayments";

function Projections() {
  const user: user = useContext(UserContext);

  return (
    <main>
      <Box bg="bgPrimary" height="100%" minHeight={"100vh"} paddingTop="3rem" width="100%">
        <Box marginLeft={"10%"} maxWidth="1000px" width="80%">
          <section id="overview">
            <HeaderPage title="Proyecciones" />

            {user.data && (
              <Grid
                gap="10"
                gridTemplateColumns="1fr"
                gridTemplateRows={"1fr minmax(1px, 350px) 1fr"}
              >
                <GridItem>
                  <Flex borderRadius={20} direction="column" gap="5" height="100%">
                    <Flex
                      align={"center"}
                      bg="primary"
                      borderRadius={20}
                      justify="space-around"
                      maxHeight="100%"
                      paddingY={5}
                    >
                      <Flex align="center" color="white" gap="3">
                        <AiOutlineDollarCircle size={50} />
                        <Text fontSize={30} fontWeight={500}>
                          Mi saldo
                        </Text>
                      </Flex>
                      <Text color="white" fontSize={40} fontWeight="700">
                        ${sumOfCategory(user.data.incomes) - sumOfCategory(user.data.outcomes)}
                      </Text>
                    </Flex>
                  </Flex>
                </GridItem>
                <GridItem borderRadius={20}>
                  <Flex gap="5" height={"100%"} justifyContent="space-evenly">
                    <ListOfTransactions
                      category={user.data.projections[0]}
                      isAddible={true}
                      isIncome={true}
                      title="Ingresos estimados"
                    />
                    <ListOfTransactions
                      category={user.data.projections[1]}
                      isAddible={true}
                      isIncome={false}
                      title="Egresos estimados"
                    />
                  </Flex>
                </GridItem>
                <GridItem borderRadius={20}>
                  <Flex borderRadius={20} direction="column" gap="5" height="100%">
                    <Flex
                      align={"center"}
                      bg="red"
                      borderRadius={20}
                      justify="space-around"
                      paddingX=""
                      paddingY={5}
                    >
                      <Flex align="center" color="white" gap="3">
                        <AiOutlineDollarCircle size={50} />
                        <Text fontSize={30} fontWeight={500}>
                          Salario Esperado
                        </Text>
                      </Flex>
                      <Text color="white" fontSize={40} fontWeight="700">
                        $
                        {sumOfCategory(user.data.incomes) -
                          sumOfCategory(user.data.outcomes) +
                          sumOfPayments(user.data.projections[0]) -
                          sumOfPayments(user.data.projections[1])}
                      </Text>
                    </Flex>
                  </Flex>
                </GridItem>
              </Grid>
            )}
          </section>
        </Box>
      </Box>
    </main>
  );
}

export default Projections;
