import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  IconButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { ViewIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/button";

const ProfileModal = ({ user, children }) => {
  const { onClose, isOpen, onOpen } = useDisclosure();
  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton>
          display={{ base: "flex" }}
          icon={<ViewIcon />}
          onClick={onOpen}
        </IconButton>
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{user.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{user.email}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
  return <div>{children}</div>;
};

export default ProfileModal;
