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

import fetchApi from "../../../helper functions/fetchApi";
import {category, payment} from "../../../helper functions/interfaces";
import {UserContext, UserDispatchContext} from "../../../helper functions/UserContext";
import {user} from "../../../helper functions/interfaces";

interface Props {
  isEdit?: boolean;
  isIncome?: boolean;
  payment?: payment;
  category?: category;
}
interface Values {
  name?: string;
  ammount?: number;
  isMonthly?: boolean;
}
const SignupSchema = Yup.object().shape({
  name: Yup.string().min(1, "Mas texto").max(18, "Mucho texto!").required("Required"),
  ammount: Yup.number().min(0).max(1000000000, "Monto muy grande").required(),
});

const PaymentModal: FC<Props> = ({isEdit, isIncome, category, payment}) => {
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

  if (payment) {
    initialValues = {
      name: payment.name,
      ammount: payment.ammount,
      isMonthly: payment.isMonthly,
    };
  } else {
    initialValues = {
      name: "",
      ammount: 0,
      isMonthly: false,
    };
  }

  return (
    <Box>
      <Button onClick={onOpen}>
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
            {isEdit ? <Text>Editar Transacción</Text> : <Text>Crear Transacción</Text>}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Formik
              initialValues={initialValues}
              validationSchema={SignupSchema}
              onSubmit={async (values: Values) => {
                setIsSumbitting(true);

                if (!isEdit && user.token && category) {
                  let body = {
                    name: values.name,
                    ammount: values.ammount,
                    _id: category._id,
                    isMonthly: values.isMonthly,
                    isIncome,
                  };

                  try {
                    await fetchApi(user.token, "payment", "POST", body);
                    toast({title: "Pago creado correctamente"});
                  } catch (err) {
                    return err;
                  }
                } else if (isEdit && user.token && payment) {
                  let body = {
                    name: values.name,
                    ammount: values.ammount,
                    _id: payment._id,
                    isMonthly: values.isMonthly,
                    isIncome,
                  };

                  try {
                    await fetchApi(user.token, "payment", "PUT", body);
                    toast({title: "Pago editado correctamente"});
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
                    <FormLabel>Nombre de la transacción</FormLabel>
                    <Input as={Field} name="name" placeholder="Nombre de la transacción" />
                    {errors.name && touched.name ? (
                      <Text color="red" fontSize={20} fontWeight={600} marginY="5">
                        {errors.name}
                      </Text>
                    ) : null}
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Monto de la Transacción</FormLabel>
                    <Input as={Field} name="ammount" placeholder="1230" type="number" />
                    {errors.ammount && touched.ammount ? (
                      <Text color="red" fontSize={20} fontWeight={600} marginY="5">
                        {errors.ammount}
                      </Text>
                    ) : null}
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Es Mensual?</FormLabel>
                    <Field
                      name="isMonthly"
                      style={{paddingLeft: "1em", minWidth: "32px", minHeight: "32px"}}
                      type="checkbox"
                    />
                  </FormControl>

                  <Button
                    bg="primary"
                    color="white"
                    disabled={deleteSumbitting === true ? true : false}
                    fontSize="20"
                    fontWeight={700}
                    isLoading={isSumbitting === true ? true : false}
                    mr={3}
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
                      onClick={async () => {
                        setDeleteSumbitting(true);
                        try {
                          await fetchApi(user.token, "payment", "DELETE", {_id: payment?._id});
                          toast({title: "Pago eliminado correctamente"});
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

export default PaymentModal;
