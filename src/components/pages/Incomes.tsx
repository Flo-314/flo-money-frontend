import {Box, Grid, GridItem} from "@chakra-ui/react";

import HeaderPage from "../Reusable Components/layout/HeaderPage";

function Incomes() {
  return (
    <main>
      <Box bg="bgPrimary" height="100%" minHeight={"100vh"} paddingTop="7rem" width="100%">
        <Box marginLeft={"10%"} maxWidth="1000px" width="80%">
          <section id="overview">
            <HeaderPage title="Ingresos" />

            <Grid
              gap="10"
              templateColumns="1fr 1fr"
              templateRows={"minmax(1px, 300px) minmax(1px, 300px)"}
            >
              <GridItem borderRadius={20} />
              <GridItem borderRadius={20} />
              <GridItem borderRadius={20} />
              <GridItem borderRadius={20} />
            </Grid>
          </section>
        </Box>
      </Box>
    </main>
  );
}

export default Incomes;
