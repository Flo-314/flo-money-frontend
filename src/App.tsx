import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Flex} from "@chakra-ui/react";

import "./styling/app.css";
import Home from "./components/pages/Home";
import Header from "./components/Reusable Components/layout/Header";
import Footer from "./components/Reusable Components/layout/Footer";
function App() {
  return (
    <BrowserRouter>
      <Flex paddingTop={""} width="100vw">
        <Header />
        <Flex direction={"column"} width="100%">
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={""} path="/history" />
          </Routes>

          <Footer />
        </Flex>
      </Flex>
    </BrowserRouter>
  );
}
export default App;
1558;
