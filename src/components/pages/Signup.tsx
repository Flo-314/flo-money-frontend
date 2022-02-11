import {FormControl, FormLabel, Button, Input, Text} from "@chakra-ui/react";
import {Formik, Field, Form, FormikHelpers} from "formik";
import * as Yup from "yup";
import {Box, Flex} from "@chakra-ui/react";
import {useState} from "react";

import HeaderPage from "../Reusable Components/layout/HeaderPage";
import localStoreUser from "../../helper functions/LocalStoreUser";
import fetchApi from "../../helper functions/fetchApi";

interface Values {
  fullname: string;
  username: string;
  email: string;
  password: string;
  confpassword: string;
}

const SignupSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, "Introduce un nombre valido")
    .max(50, "Mucho texto!")
    .required("Required"),
  username: Yup.string()
    .min(2, "Introduce un username valido!")
    .max(18, "Mucho texto!")
    .required("Required"),
  email: Yup.string().email("Email invalido").max(50, "Mucho texto").required("Required"),
  password: Yup.string().min(8, "8 caracteres requeridos.").required("Contraseña Requerida"),
  confpassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Las contraseñas tienen que coincidir",
  ),
});

function Singup() {
  const [isSumbitting, setIsSumbitting] = useState(false);

  return (
    <Box bg="bgPrimary" height="100%" minHeight={"100vh"} paddingTop="7rem" width="100%">
      <Flex direction={"column"} justify="center" marginLeft={"10%"} maxWidth="1100px" width="80%">
        <Box>
          <HeaderPage title="Crear una cuenta" />
        </Box>
        <Box
          bg="bgSecondary"
          borderRadius={20}
          justifySelf={"center"}
          maxWidth={"700px"}
          padding="10"
        >
          <Formik
            initialValues={{
              fullname: "",
              username: "",
              email: "",
              password: "",
              confpassword: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={async (values: Values, {setSubmitting}: FormikHelpers<Values>) => {
              setIsSumbitting(true);
              console.log(values);
              let body = JSON.stringify({
                fullname: values.fullname,
                username: values.username,
                email: values.email,
                password: values.password,
                confpassword: values.confpassword,
              });
              let user = await fetchApi("a", "signup", "POST", body);

              console.log(user);
              if (user.errors) {
                prompt("????????????????????");
                setIsSumbitting(false);
              } else {
                localStoreUser(user);
                //setuser(user)
                window.location.href = "/login";
              }
              setIsSumbitting(false);
            }}
          >
            {({errors, touched}) => (
              <Form>
                <FormControl>
                  <Flex direction="column" gap="5">
                    <Flex borderBottom={"2px"} borderColor="gray" paddingBottom="5">
                      <FormLabel fontSize={20} htmlFor="fullname" minW={"35%"}>
                        First Name:
                      </FormLabel>
                      <Input
                        as={Field}
                        bg="gray"
                        fontWeight={700}
                        id="fullname"
                        isRequired={true}
                        name="fullname"
                        placeholder="full name"
                      />
                    </Flex>
                    {errors.fullname && touched.fullname ? (
                      <Text color="red" fontSize={20} fontWeight={600}>
                        {errors.fullname}
                      </Text>
                    ) : null}
                    <Flex borderBottom={"2px"} borderColor="gray" paddingBottom="5">
                      <FormLabel fontSize={20} htmlFor="username" minW={"35%"}>
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
                    {errors.username && touched.username ? (
                      <Text color="red" fontSize={20} fontWeight={600}>
                        {errors.username}
                      </Text>
                    ) : null}
                    <Flex borderBottom={"2px"} borderColor="gray" paddingBottom="5">
                      <FormLabel fontSize={20} htmlFor="email" minW={"35%"}>
                        Email:
                      </FormLabel>

                      <Input
                        as={Field}
                        bg="gray"
                        fontWeight={700}
                        id="email"
                        isRequired={true}
                        name="email"
                        placeholder="email@email.com"
                        type="email"
                      />
                    </Flex>
                    {errors.email && touched.email ? (
                      <Text color="red" fontSize={20} fontWeight={600}>
                        {errors.email}
                      </Text>
                    ) : null}
                    <Flex borderBottom={"2px"} borderColor="gray" paddingBottom="5">
                      <FormLabel fontSize={20} htmlFor="password" minW={"35%"}>
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
                      />{" "}
                    </Flex>
                    {errors.password && touched.password ? (
                      <Text color="red" fontSize={20} fontWeight={600}>
                        {errors.password}
                      </Text>
                    ) : null}
                    <Flex borderBottom={"2px"} borderColor="gray" paddingBottom="5">
                      <FormLabel fontSize={20} htmlFor="confpassword" minW={"35%"}>
                        Confirm Password:
                      </FormLabel>
                      <Input
                        as={Field}
                        bg="gray"
                        fontWeight={700}
                        id="confpassword"
                        isRequired={true}
                        name="confpassword"
                        placeholder="Confirm Password"
                        type="password"
                      />
                    </Flex>
                    {errors.confpassword && touched.confpassword ? (
                      <Text color="red" fontSize={20} fontWeight={600}>
                        {errors.confpassword}
                      </Text>
                    ) : null}
                    <Button
                      bg="primary"
                      color="white"
                      fontSize={20}
                      fontWeight="700"
                      isLoading={isSumbitting === true ? true : false}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Flex>
                </FormControl>
              </Form>
            )}
          </Formik>
        </Box>
      </Flex>
    </Box>
  );
}

export default Singup;

{
  /* <Box bg="bgPrimary" height="100%" minHeight={"100vh"} paddingTop="7rem" width="100%">
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
            onSubmit={(values: Values, {setSubmitting}: FormikHelpers<Values>) => {
              console.log("a");
            }}
          >
            {({errors, touched}) => (
              <Form>
                <FormControl>
                  <Flex direction="column" gap="5">
                    <Flex borderBottom={"2px"} borderColor="gray" paddingBottom="5">
                      <FormLabel fontSize={20} htmlFor="username" minW={"35%"}>
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
                      <FormLabel fontSize={20} minW={"35%"}  htmlFor="password" >
                        Password:
                      </FormLabel>
                      <Input
                        as={Field}
                      
                        id="password"
                        isRequired={true}
                        name="password"
                        placeholder="Password"
                        type="password"

                          bg="gray"
                          fontWeight={700}

                      />
                    </Flex>
                    <Button bg="primary" color="white" fontSize="20" fontWeight={700} type="submit">
                      Ingresar
                    </Button>
                  </Flex>
                </FormControl>
              </Form>
            )}
          </Formik>
        </Box>
      </Flex>
    </Box> */
}
