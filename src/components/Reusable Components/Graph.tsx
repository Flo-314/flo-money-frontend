import {FC, useState} from "react";
import {Box, Center, Flex, Heading, Text} from "@chakra-ui/react";
import {Pie} from "react-chartjs-2";
const data = {
  labels: ["NK8", "NK7", "CACA", "PUEBLA", "FALOPA", "FAFAFA"],
  datasets: [
    {
      label: "# of Votes",
      data: [120, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const Graph = ({dataa}) => {
  return (
    <Flex bg="bgSecondary" borderRadius="20" direction={"column"} padding="5">
      <Flex direction={"column"} width="100%">
        <Text fontSize={30} fontWeight={600} paddingBottom="3">
          Estadistica
        </Text>
        <Box maxH={"400px"} maxW={"400px"}>
          <Pie data={data} />;
        </Box>
      </Flex>
    </Flex>
  );
};

export default Graph;
