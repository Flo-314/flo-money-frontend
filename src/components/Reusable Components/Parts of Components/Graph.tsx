import {Box, Flex, Text} from "@chakra-ui/react";
import {Pie} from "react-chartjs-2";
const data = {
  labels: ["Entradas", "Salidas"],
  datasets: [
    {
      label: "# of Votes",
      data: [120, 95],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 2,
    },
  ],
};

const Graph = ({}) => {
  return (
    <Flex bg="bgSecondary" borderRadius="20" direction={"column"} padding="5">
      <Flex direction={"column"} width="100%">
        <Text fontSize={30} fontWeight={600} paddingBottom="3">
          Estadistica
        </Text>
        <Box maxH={"400px"} maxW={"400px"}>
          <Pie data={data} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Graph;
