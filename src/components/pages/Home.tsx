import {Box, Flex, Grid, GridItem, Link, Spinner, Text} from "@chakra-ui/react";
import {useContext} from "react";
import {AiOutlineDollarCircle} from "react-icons/ai";
import {Link as RouteLink} from "react-router-dom";

import Graph from "../Reusable Components/Parts of Components/Graph";
import ListOfTransactions from "../Reusable Components/Parts of Components/ListOfTransactions";
import HeaderPage from "../Reusable Components/layout/HeaderPage";
import {UserContext} from "../../helper functions/React Logic/UserContext";
import {user} from "../../helper functions/types/interfaces";
import sumOfCategory from "../../helper functions/Logic/sumOfCategory";
import SalaryButton from "../Reusable Components/Parts of Components/SalaryButton";
function Home() {
  const user: user = useContext(UserContext);

  return (
    <main>
      {user.data && (
        <Box bg="bgPrimary" height="100%" minHeight={"100vh"} paddingTop="3rem" width="100%">
          <Box marginLeft={"10%"} maxWidth="1100px" width="80%">
            <section id="overview">
              <HeaderPage title="Vista General " />

              <Grid
                gap="20"
                paddingBottom={10}
                templateColumns={{xl: "1fr 1fr", sm: "1fr", base: "minmax(1px, 1fr)"}}
                templateRows={{
                  xl: "minmax(1px, 350px) minmax(1px, 350px)",
                  base: "minmax(1px, 150px) minmax(1px, 350px) 1fr minmax(1px, 350px)",
                }}
              >
                <GridItem>
                  <SalaryButton
                    color="primary"
                    salary={sumOfCategory(user.data.incomes) - sumOfCategory(user.data.outcomes)}
                    title="Mi Saldo"
                  />
                </GridItem>

                <GridItem>
                  <ListOfTransactions
                    arrayOfCategories={user.data?.incomes}
                    isIncome={true}
                    title="Ingresos mensuales"
                  />
                </GridItem>

                {/*  graph   */}
                <GridItem borderRadius={20} height="100%">
                  <Graph
                    arrayOfCategories1={user.data?.incomes}
                    arrayOfCategories2={user.data?.outcomes}
                    isOverview={true}
                  />
                </GridItem>
                {/*  outcomes   */}

                <GridItem borderRadius={20}>
                  <ListOfTransactions
                    arrayOfCategories={user.data?.outcomes}
                    title="Egresos mensuales"
                  />
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
            Please{" "}
            <Link as={RouteLink} color="green.500" to={"/login"}>
              Log-In
            </Link>{" "}
            or{" "}
            <Link as={RouteLink} color="green.500" to={"/singup"}>
              Sign Up
            </Link>
          </Text>
        </Flex>
      )}
    </main>
  );
}

export default Home;
