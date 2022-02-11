import {Box, Flex, Grid, GridItem, Text} from "@chakra-ui/react";
import {AiOutlineDollarCircle} from "react-icons/ai";
import {useContext, useEffect} from "react";

import Graph from "../Reusable Components/Parts of Components/Graph";
import Transaction from "../Reusable Components/Parts of Components/Transaction";
import ListOfTransactions from "../Reusable Components/Parts of Components/ListOfTransactions";
import HeaderPage from "../Reusable Components/layout/HeaderPage";
import {UserContext, UserDispatchContext} from "../../helper functions/UserContext";
function Home() {
  const dispatch = useContext(UserDispatchContext);
  const user = useContext(UserContext);

  console.log(user);

  useEffect(() => {
    dispatch({type: "loadUser"});
  }, [dispatch]);

  return (
    <main>
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
                <Flex
                  bg="primary"
                  borderRadius={15}
                  color="white"
                  justify="space-around"
                  paddingY={2}
                >
                  <Flex align={"center"} gap="2">
                    <AiOutlineDollarCircle color="white" size={50} />
                    <Text fontSize={30} fontWeight={500}>
                      Mi saldo
                    </Text>
                  </Flex>
                  <Text fontSize={40} fontWeight={600}>
                    {" "}
                    $1.520.000
                  </Text>
                </Flex>

                {/*   last  two transsactions   */}
                <Flex
                  bg="bgSecondary"
                  borderRadius={20}
                  direction="column"
                  gap="5"
                  marginTop={5}
                  padding="6"
                >
                  <Text borderBottom={"1px"} borderColor="gray" fontSize="20">
                    Ultimas transacciones:
                  </Text>
                  <Transaction ammount={575} isDown={true} name="Servicios" />
                  <Transaction ammount={5.25} isDown={false} name="Trabajo" />
                </Flex>
              </GridItem>
              {/*  incomes   */}

              <GridItem borderRadius={20}>
                <ListOfTransactions title="Ingresos mensuales" />
              </GridItem>

              {/*  graph   */}
              <GridItem borderRadius={20}>
                <Graph />
              </GridItem>
              {/*  outcomes   */}

              <GridItem borderRadius={20}>
                <ListOfTransactions title="Egresos mensuales" />
              </GridItem>
            </Grid>
          </section>
        </Box>
      </Box>
    </main>
  );
}

export default Home;
