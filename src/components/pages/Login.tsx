import {FormControl, FormLabel, Button, Input, Flex, Box, Text} from "@chakra-ui/react";
import {Formik, Field, Form, FormikHelpers} from "formik";
import {useContext, useReducer, useState} from "react";
import {useNavigate} from "react-router-dom";

import fetchApi from "../../helper functions/fetchApi";
import {UserContext, UserDispatchContext} from "../../helper functions/UserContext";
import HeaderPage from "../Reusable Components/layout/HeaderPage";

interface Values {
  username: string;
  password: string;
}

function Login() {
  const [isSumbitting, setIsSumbitting] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useContext(UserDispatchContext);
  const user = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <Box bg="bgPrimary" height="100%" minHeight={"100vh"} paddingTop="7rem" width="100%">
      <Flex direction={"column"} justify="center" marginLeft={"10%"} maxWidth="1100px" width="80%">
        <Box>
          <HeaderPage title="Iniciar Sesion" />
        </Box>
        <Box
          bg="bgSecondary"
          borderRadius={20}
          justifySelf={"center"}
          maxWidth={"600px"}
          padding="10"
        >
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            onSubmit={async (values: Values, {setSubmitting}: FormikHelpers<Values>) => {
              setIsSumbitting(true);
              setError("");
              let body = JSON.stringify({username: values.username, password: values.password});
              let user = await fetchApi("a", "login", "POST", body);

              if (user.message === "Auth Failed") {
                setError("User or Password invalid");
                setIsSumbitting(false);
              } else {
                setIsSumbitting(false);

                dispatch({user, type: "login"});
                navigate("/");
              }
            }}
          >
            <Form>
              <FormControl>
                <Flex direction="column" gap="5">
                  <Flex borderBottom={"2px"} borderColor="gray" paddingBottom="5">
                    <FormLabel fontSize={20} htmlFor="username" minW={"30%"}>
                      Username:
                    </FormLabel>
                    <Input
                      as={Field}
                      bg="gray"
                      fontWeight={700}
                      id="username"
                      isRequired={true}
                      name="username"
                      placeholder="username"
                    />
                  </Flex>
                  <Flex align="center">
                    <FormLabel fontSize={20} htmlFor="password" minW={"30%"}>
                      Password:
                    </FormLabel>
                    <Input
                      as={Field}
                      bg="gray"
                      fontWeight={700}
                      id="password"
                      isRequired={true}
                      name="password"
                      placeholder="Password"
                      type="password"
                    />
                  </Flex>
                  {error && (
                    <Text color="red" fontSize={20} fontWeight={600}>
                      {error}
                    </Text>
                  )}
                  <Button
                    bg="primary"
                    color="white"
                    fontSize="20"
                    fontWeight={700}
                    isLoading={isSumbitting === true ? true : false}
                    type="submit"
                  >
                    Ingresar
                  </Button>
                </Flex>
              </FormControl>
            </Form>
          </Formik>
        </Box>
      </Flex>
    </Box>
  );
}

export default Login;
