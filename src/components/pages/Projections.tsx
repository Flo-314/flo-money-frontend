import {Box, Flex, Grid, GridItem, Link, Spinner, Text} from "@chakra-ui/react";
import {useContext} from "react";
import {AiOutlineDollarCircle} from "react-icons/ai";
import {Link as RouteLink} from "react-router-dom";

import sumOfCategory from "../../helper functions/Logic/sumOfCategory";
import {UserContext} from "../../helper functions/React Logic/UserContext";
import HeaderPage from "../Reusable Components/layout/HeaderPage";
import {user} from "../../helper functions/types/interfaces";
import ListOfTransactions from "../Reusable Components/Parts of Components/ListOfTransactions";
import sumOfPayments from "../../helper functions/Logic/sumOfPayments";
import SalaryButton from "../Reusable Components/Parts of Components/SalaryButton";

function Projections() {
  const user: user = useContext(UserContext);
  let actualSalary, projectedSalary;

  if (user?.data) {
    actualSalary = sumOfCategory(user.data.incomes) - sumOfCategory(user.data.outcomes);
    projectedSalary =
      actualSalary -
      sumOfPayments(user.data.projections[0]) -
      sumOfPayments(user.data.projections[1]);
  }

  return (
    <main>
      <Box bg="bgPrimary" height="100%" minHeight={"100vh"} paddingTop="3rem" width="100%">
        <Box marginLeft={"10%"} maxWidth="1000px" width="80%">
          <section id="overview">
            <HeaderPage title="Proyecciones" />

            {user.data && (
              <Grid
                gap="10"
                gridTemplateRows={{
                  lg: "1fr minmax(1px, 350px) 1fr",
                  base: "minmax(1px, 180px) minmax(1px, 350px) 1fr minmax(1px, 250px)",
                }}
                templateColumns={{base: "minmax(1px,325px)", sm: "1fr"}}
              >
                <GridItem>
                  <SalaryButton color={"primary"} salary={actualSalary} title={"Saldo Actual"} />
                </GridItem>

                <GridItem borderRadius={20}>
                  <Box
                    display={{lg: "flex", base: "block"}}
                    gap="5"
                    height={"100%"}
                    justifyContent="space-evenly"
                    width="100%"
                  >
                    <ListOfTransactions
                      category={user.data.projections[0]}
                      isAddible={true}
                      isIncome={true}
                      noColor={true}
                      title="Ingresos estimados"
                    />
                    <Box display={{lg: "inherit", base: "none"}}>
                      <ListOfTransactions
                        category={user.data.projections[1]}
                        isAddible={true}
                        isIncome={false}
                        noColor={true}
                        title="Egresos estimados"
                      />
                    </Box>
                  </Box>
                </GridItem>

                <GridItem display={{lg: "none", base: "inherit"}}>
                  <ListOfTransactions
                    category={user.data.projections[1]}
                    isAddible={true}
                    isIncome={false}
                    noColor={true}
                    title="Egresos estimados"
                  />
                </GridItem>

                <GridItem borderRadius={20}>
                  <SalaryButton color={"red"} salary={projectedSalary} title={"Saldo Proyectado"} />
                </GridItem>
              </Grid>
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
          </section>
        </Box>
      </Box>
    </main>
  );
}

export default Projections;
