import {EditIcon, SmallAddIcon} from "@chakra-ui/icons";
import {Button, Text, FormControl, FormLabel, Input, useDisclosure, Box} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import {Formik, Field, Form, FormikHelpers} from "formik";
import {FC, useContext} from "react";

import fetchApi from "../../../helper functions/fetchApi";
import {UserContext, UserDispatchContext} from "../../../helper functions/UserContext";
interface Props {
  isEdit: boolean;
}
interface Values {
  name: string;
  color: string;
}
const CategoryModal: FC<Props> = ({isEdit}) => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const dispatch = useContext(UserDispatchContext);
  const user = useContext(UserContext);

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
              initialValues={{
                name: "",
                color: "",
              }}
              onSubmit={async (values: Values) => {}}
            >
              <Form>
                <FormControl>
                  <FormLabel>Nombre de la Categoria</FormLabel>
                  <Input placeholder="Nombre de la Categoria" />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Color de la categoria</FormLabel>
                  <Input type="color" />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Es Mensual?</FormLabel>
                  <input
                    style={{paddingLeft: "1em", minWidth: "32px", minHeight: "32px"}}
                    type="checkbox"
                  />
                </FormControl>
              </Form>
            </Formik>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              {isEdit ? "Guardar" : "Crear"}
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CategoryModal;
