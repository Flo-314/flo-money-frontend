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
import {FC} from "react";
interface Props {
  isEdit: boolean;
}
const CategoryModal: FC<Props> = ({isEdit}) => {
  const {isOpen, onOpen, onClose} = useDisclosure();

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
            <FormControl>
              <FormLabel>Nombre de la Categoria</FormLabel>
              <Input placeholder="Nombre de la Categoria" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Monto de la Categoria</FormLabel>
              <Input placeholder="1230" type="number" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Es Mensual?</FormLabel>
              <input
                style={{paddingLeft: "1em", minWidth: "32px", minHeight: "32px"}}
                type="checkbox"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Guardar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CategoryModal;
