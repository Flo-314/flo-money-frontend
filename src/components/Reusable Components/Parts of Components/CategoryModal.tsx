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

import fetchApi from "../../../helper functions/fetchApi";
import {category} from "../../../helper functions/interfaces";
import {UserContext, UserDispatchContext} from "../../../helper functions/UserContext";
interface Props {
  isEdit?: boolean;
  isIncome?: boolean;
  category?: category;
}
interface Values {
  name?: string;
  color?: string;
}
const CategoryModal: FC<Props> = ({isEdit, isIncome, category}) => {
  const [isSumbitting, setIsSumbitting] = useState(false);
  const {isOpen, onOpen, onClose} = useDisclosure();
  const dispatch = useContext(UserDispatchContext);
  const user = useContext(UserContext);
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
      <Button onClick={onOpen}>
        {isEdit ? <EditIcon color="green" /> : <SmallAddIcon boxSize={10} color="green" />}
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
                  } catch (err) {
                    return err;
                  }
                } else if (isEdit && user.token && category) {
                  let body = {name: values.name, color: values.color, _id: category._id, target};

                  try {
                    await fetchApi(user.token, "category", "PUT", body);
                  } catch (err) {
                    return err;
                  }
                }
                setIsSumbitting(false);
                onClose();
              }}
            >
              <Form>
                <FormControl>
                  <FormLabel>Nombre de la Categoria</FormLabel>
                  <Input as={Field} name="name" placeholder="Nombre de la Categoria" />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Color de la categoria</FormLabel>
                  <Input as={Field} name="color" type="color" />
                </FormControl>
                <Button
                  bg="primary"
                  color="white"
                  colorScheme="blue"
                  fontSize="20"
                  fontWeight={700}
                  isLoading={isSumbitting === true ? true : false}
                  mr={3}
                  type="submit"
                >
                  {isEdit ? "Guardar" : "Crear"}
                </Button>
                <Button disabled={isSumbitting === true ? true : false} onClick={onClose}>
                  Cancelar
                </Button>
              </Form>
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CategoryModal;
