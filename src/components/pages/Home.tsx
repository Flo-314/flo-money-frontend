import {Box, Flex, Heading, SimpleGrid, Text} from "@chakra-ui/react";
import {AiOutlineDollarCircle, AiFillCaretUp} from "react-icons/ai";

function Home() {
  return (
    <main>
      <Box
        bg="bgPrimary"
        borderRadius={50}
        height="100%"
        minHeight={"100vh"}
        paddingTop="7rem"
        width="100%"
      >
        <Box margin="0 auto" maxWidth="1150px" width="80%">
          <section id="overview">
            <Heading>Vista general</Heading>
            <SimpleGrid columns={2} spacing={10}>
              <Flex bg="bgSecondary" direction={"column"}>
                {/*  green button with your salary   */}
                <Flex align="center" bg="primary" borderRadius={15} justify="space-around">
                  <Flex align={"center"} gap="2">
                    <AiOutlineDollarCircle color="white" size={50} />
                    <Text fontSize={20}>Mi saldo</Text>
                  </Flex>
                  <Text fontSize={30} fontWeight={600}>
                    {" "}
                    $1520000
                  </Text>
                </Flex>

                <Box>
                  <Flex justify={"space-between"}>
                    <Flex>
                      <Box bg="red" height="20px" width="20px" />
                      <Text>Puebla</Text>
                    </Flex>
                    <Flex>
                      <AiFillCaretUp color="green" />
                      <Text>134.0000</Text>
                    </Flex>
                  </Flex>
                  <Flex />
                </Box>
              </Flex>
              <Box bg="bgSecondary">2</Box>
              <Box bg="bgSecondary">3</Box>
              <Box bg="bgSecondary">4</Box>
            </SimpleGrid>
          </section>
        </Box>
      </Box>
    </main>
  );
}

export default Home;
