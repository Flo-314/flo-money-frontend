import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Flex} from "@chakra-ui/react";
import "./styling/app.css";
import {useEffect, useReducer} from "react";

import Home from "./components/pages/Home";
import Header from "./components/Reusable Components/layout/Header";
import Footer from "./components/Reusable Components/layout/Footer";
import Outcomes from "./components/pages/Outcomes";
import Incomes from "./components/pages/Incomes";
import Projections from "./components/pages/Projections";
import Account from "./components/pages/Account";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import {UserContext, UserDispatchContext} from "./helper functions/UserContext";
import userReducer from "./helper functions/userReducer";
import fetchApi from "./helper functions/fetchApi";
import {user} from "./helper functions/interfaces";
function App() {
  const initialUser: user = {token: undefined, userId: undefined, data: undefined};
  const [user, dispatch] = useReducer(userReducer, initialUser);

  useEffect(() => {
    //si hay usuario en local storage pero no en state
    if (localStorage.loggedUser && !user.token) {
      dispatch({type: "loadUser"});
    }
    // si hay usuario en state pero no fetcheo la data
    if (user.token && !user.data) {
      const getUserData = (async () => {
        const body = {_id: user.userId};
        let data = await fetchApi(user.token, "user", "POST", body);

        data = data.data;
        const User: user = {...user, data};

        dispatch({type: "pushUser", user: User});
      })();
    }
  }, [user]);

  return (
    <BrowserRouter>
      <UserContext.Provider value={user}>
        <UserDispatchContext.Provider value={dispatch}>
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
        </UserDispatchContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
export default App;
