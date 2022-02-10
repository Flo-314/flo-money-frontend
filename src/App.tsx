import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Flex} from "@chakra-ui/react";

import "./styling/app.css";
import Home from "./components/pages/Home";
import Header from "./components/Reusable Components/layout/Header";
import Footer from "./components/Reusable Components/layout/Footer";
import Outcomes from "./components/pages/Outcomes";
import Incomes from "./components/pages/Incomes";
import Projections from "./components/pages/Projections";
import Account from "./components/pages/Account";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
function App() {
  return (
    <BrowserRouter>
      <Flex paddingTop={""} width="100vw">
        <Header />
        <Flex direction={"column"} width="100%">
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Outcomes />} path="/egresos" />
            <Route element={<Incomes />} path="/ingresos" />
            <Route element={<Projections />} path="/proyecciones" />
            <Route element={<Account />} path="/account" />
            <Route element={<Login />} path="/login" />
            <Route element={<Signup />} path="/singup" />
          </Routes>

          <Footer />
        </Flex>
      </Flex>
    </BrowserRouter>
  );
}
export default App;
1558;
