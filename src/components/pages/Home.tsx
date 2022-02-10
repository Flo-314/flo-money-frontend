import {Box, Flex, Grid, GridItem, Text} from "@chakra-ui/react";
import {AiOutlineDollarCircle} from "react-icons/ai";

import Graph from "../Reusable Components/Parts of Components/Graph";
import Transaction from "../Reusable Components/Parts of Components/Transaction";
import ListOfTransactions from "../Reusable Components/Parts of Components/ListOfTransactions";
import HeaderPage from "../Reusable Components/layout/HeaderPage";
function Home() {
  return (
    <main>
      <Box bg="bgPrimary" height="100%" minHeight={"100vh"} paddingTop="7rem" width="100%">
        <Box marginLeft={"10%"} maxWidth="1000px" width="80%">
          <section id="overview">
            <HeaderPage title="Vista General " />

            <Grid
              gap="10"
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
                  <Transaction ammount={134256} isDown={true} name="PUEBLA" />
                  <Transaction ammount={575} isDown={false} name="nk8 studio" />
                </Flex>
              </GridItem>
              {/*  incomes   */}

              <GridItem borderRadius={20}>
                <ListOfTransactions />
              </GridItem>

              {/*  graph   */}
              <GridItem borderRadius={20}>
                <Graph />
              </GridItem>
              {/*  outcomes   */}

              <GridItem borderRadius={20}>
                <ListOfTransactions />
              </GridItem>
            </Grid>
          </section>
        </Box>
      </Box>
    </main>
  );
}

export default Home;
