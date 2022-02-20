import {Box, Flex, Text} from "@chakra-ui/react";
import {FC, useEffect, useState} from "react";
import {Pie} from "react-chartjs-2";

import {category} from "../../../helper functions/types/interfaces";
import sumOfCategory from "../../../helper functions/Logic/sumOfCategory";
import sumOfPayments from "../../../helper functions/Logic/sumOfPayments";
interface Props {
  arrayOfCategories1: Array<category>;
  arrayOfCategories2?: Array<category>;
  isOverview?: boolean;
}
const Graph: FC<Props> = ({arrayOfCategories1, arrayOfCategories2, isOverview}) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const createData = () => {
      if (arrayOfCategories1 && arrayOfCategories2 && isOverview) {
        let sumOfOutcomes = sumOfCategory(arrayOfCategories1);
        let sumOfIncomes = sumOfCategory(arrayOfCategories2);

        const data = {
          labels: ["Entradas", "Salidas"],
          datasets: [
            {
              data: [sumOfOutcomes, sumOfIncomes],
              backgroundColor: ["green", "red"],
              borderColor: ["green", "red"],
              borderWidth: 2,
            },
          ],
        };

        setData(data);
      } else if (arrayOfCategories1 && !isOverview) {
        const data = {
          labels: [],
          datasets: [
            {
              data: [],
              backgroundColor: [],
              borderColor: [],
              borderWidth: 2,
            },
          ],
        };

        arrayOfCategories1.forEach((category) => {
          data.labels.push(category.name);
          data.datasets[0].backgroundColor.push(category.color);
          data.datasets[0].borderColor.push(category.color);
          data.datasets[0].data.push(sumOfPayments(category));
        });
        setData(data);
      }
    };

    createData();
  }, [arrayOfCategories1, arrayOfCategories2, isOverview]);

  return (
    <Flex bg="bgSecondary" borderRadius="20" direction={"column"} height="100%" padding="5">
      <Flex direction={"column"} flex={1} gap="4">
        <Text fontSize={30} fontWeight={600} paddingBottom="3">
          Estadistica
        </Text>
        <Box alignSelf="center" height="100%" justifySelf="center">
          <Pie data={data} options={{maintainAspectRatio: false}} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Graph;
