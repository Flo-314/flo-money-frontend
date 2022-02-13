import {Box, Flex, Text} from "@chakra-ui/react";
import {FC, useEffect, useState} from "react";
import {Pie} from "react-chartjs-2";

import {category} from "../../../helper functions/interfaces";
import sumOfCategory from "../../../helper functions/sumOfCategory";
interface Props {
  incomes: Array<category>;
  outcomes: Array<category>;
}
const Graph: FC<Props> = ({incomes, outcomes}) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const createData = () => {
      if (outcomes && incomes) {
        let sumOfOutcomes = sumOfCategory(outcomes);
        let sumOfIncomes = sumOfCategory(incomes);

        const data = {
          labels: ["Entradas", "Salidas"],
          datasets: [
            {
              data: [sumOfIncomes, sumOfOutcomes],
              backgroundColor: ["red", "green"],
              borderColor: ["red", "green"],
              borderWidth: 2,
            },
          ],
        };

        setData(data);
      }
    };

    createData();
  }, [incomes, outcomes]);

  return (
    <Flex bg="bgSecondary" borderRadius="20" direction={"column"} height="100%" padding="5">
      <Flex direction={"column"} gap="4" width="100%">
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
