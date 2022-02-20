import {EditIcon, SmallAddIcon} from "@chakra-ui/icons";
import {Button, Text, FormControl, FormLabel, Input, useDisclosure, Box} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import {Formik, Field, Form} from "formik";
import {FC, useContext, useState} from "react";
import {useToast} from "@chakra-ui/react";
import * as Yup from "yup";

import fetchApi from "../../../helper functions/Logic/fetchApi";
import {category} from "../../../helper functions/types/interfaces";
import {UserContext, UserDispatchContext} from "../../../helper functions/React Logic/UserContext";
import {user} from "../../../helper functions/types/interfaces";

interface Props {
  isEdit?: boolean;
  isIncome?: boolean;
  category?: category;
}
interface Values {
  name?: string;
  color?: string;
}

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(1, "Mas texto").max(25, "Mucho texto!").required("Required"),
  color: Yup.string().min(1, "Mas texto").max(16, "Mucho texto!").required("Required"),
});

const CategoryModal: FC<Props> = ({isEdit, isIncome, category}) => {
  const [isSumbitting, setIsSumbitting] = useState(false);
  const [deleteSumbitting, setDeleteSumbitting] = useState(false);
  const {isOpen, onOpen, onClose} = useDisclosure();
  const dispatch = useContext(UserDispatchContext);
  const user = useContext(UserContext);
  const toast = useToast({
    position: "bottom-left",
    status: "success",
    duration: 3500,
    isClosable: true,
    containerStyle: {
      marginLeft: "2em",
      marginBottom: "2em",
    },
  });

  let initialValues;

  if (category) {
    initialValues = {
      name: category.name,
      color: category.color,
    };
  } else {
    initialValues = {
      name: "",
      color: "#ffffff",
    };
  }

  return (
    <Box>
      <Button position={{base: "initial", lg: "relative"}} onClick={onOpen}>
        {isEdit ? (
          <EditIcon color={isIncome ? "green" : "red"} />
        ) : (
          <SmallAddIcon boxSize={10} color={isIncome ? "green" : "red"} />
        )}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {isEdit ? <Text>Editar Categoria</Text> : <Text>Crear Categoria</Text>}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Formik
              initialValues={initialValues}
              validationSchema={SignupSchema}
              onSubmit={async (values: Values) => {
                setIsSumbitting(true);

                let target;

                if (isIncome) {
                  target = "income";
                } else {
                  target = "outcome";
                }

                if (!isEdit && user.token) {
                  let body = {
                    name: values.name,
                    color: values.color,
                    _id: user.userId,
                    target,
                    isIncome,
                  };

                  try {
                    await fetchApi(user.token, "category", "POST", body);
                    toast({title: "Categoria creada correctamente"});
                  } catch (err) {
                    return err;
                  }
                } else if (isEdit && user.token && category) {
                  let body = {name: values.name, color: values.color, _id: category._id, target};

                  try {
                    await fetchApi(user.token, "category", "PUT", body);
                    toast({title: "Categoria editada correctamente"});
                  } catch (err) {
                    return err;
                  }
                }
                if (user.token) {
                  const body = {_id: user.userId};
                  let data = await fetchApi(user.token, "user", "POST", body);

                  data = data.data;
                  const User: user = {...user, data};

                  dispatch({type: "pushUser", user: User});
                }
                setIsSumbitting(false);
                onClose();
              }}
            >
              {({errors, touched}) => (
                <Form>
                  <FormControl>
                    <FormLabel>Nombre de la Categoria</FormLabel>
                    <Input as={Field} name="name" placeholder="Nombre de la Categoria" />
                    {errors.name && touched.name ? (
                      <Text color="red" fontSize={20} fontWeight={600} marginY="5">
                        {errors.name}
                      </Text>
                    ) : null}
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Color de la categoria</FormLabel>
                    <Input as={Field} name="color" type="color" />
                    {errors.color && touched.color ? (
                      <Text color="red" fontSize={20} fontWeight={600} marginY="5">
                        {errors.color}
                      </Text>
                    ) : null}
                  </FormControl>
                  <Button
                    bg="primary"
                    color="white"
                    disabled={deleteSumbitting === true ? true : false}
                    fontSize="20"
                    fontWeight={700}
                    isLoading={isSumbitting === true ? true : false}
                    mr={3}
                    position={{base: "initial", lg: "relative"}}
                    type="submit"
                  >
                    {isEdit ? "Guardar" : "Crear"}
                  </Button>
                  {isEdit && user.token ? (
                    <Button
                      bg="red"
                      color="white"
                      disabled={isSumbitting === true ? true : false}
                      fontSize="20"
                      fontWeight={700}
                      isLoading={deleteSumbitting === true ? true : false}
                      mr={3}
                      position={{base: "initial", lg: "relative"}}
                      onClick={async () => {
                        setDeleteSumbitting(true);
                        try {
                          await fetchApi(user.token, "category", "DELETE", {_id: category?._id});
                          toast({title: "Categoria eliminada correctamente"});
                        } catch (err) {
                          return err;
                        }

                        if (user.token) {
                          const body = {_id: user.userId};
                          let data = await fetchApi(user.token, "user", "POST", body);

                          data = data.data;
                          const User: user = {...user, data};

                          dispatch({type: "pushUser", user: User});
                        }
                        setDeleteSumbitting(false);
                        onClose();
                      }}
                    >
                      Delete
                    </Button>
                  ) : null}
                  <Button
                    disabled={isSumbitting || deleteSumbitting === true ? true : false}
                    position={{base: "initial", lg: "relative"}}
                    onClick={onClose}
                  >
                    Cancelar
                  </Button>
                </Form>
              )}
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CategoryModal;
