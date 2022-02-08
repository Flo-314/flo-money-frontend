import {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Box, useColorMode, Button} from "@chakra-ui/react";
import {MoonIcon, SunIcon} from "@chakra-ui/icons";

import theme from "./styling/theme";
function App() {
  const [count, setCount] = useState(0);

  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <BrowserRouter>
      {colorMode === "light" && <MoonIcon onClick={toggleColorMode} />}
      {colorMode === "dark" && <SunIcon onClick={toggleColorMode} />}

      <Box bg="bgPrimary" height="50px" width={"50px"} />
      <Box bg="bgSecondary" height="50px" width={"50px"} />
      <Routes>
        <Route element={""} path="/" />
        <Route element={""} path="/history" />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
