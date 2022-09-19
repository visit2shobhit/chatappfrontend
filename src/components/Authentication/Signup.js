import React, { useState } from "react";
import { Button, FormControl, FormLabel, VStack } from "@chakra-ui/react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { Redirect, useHistory } from "react-router-dom";

const Signup = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [pic, setPic] = useState();
  const toast = useToast();
  const history = useHistory();

  const handleClick = () => {
    setShow(!show);
  };

  const postDetails = (pic) => {};

  const submitHandler = async () => {
    if (!name || !email || !password || !confirmpassword) {
      toast({
        title: "Please fill all the fields",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return false;
    }
    if (password !== confirmpassword) {
      toast({
        title: "Password and Confirm Password do not match",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return false;
    }
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/user",
        {
          name,
          email,
          password,
        },
        config
      );
      toast({
        title: "Registration is successfull",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      history.push("/chats");
    } catch (error) {
      toast({
        title: "Error",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  return (
    <VStack spacing="5px" color="black">
      <FormControl id="first-name" isRequired>
        <FormLabel> Name</FormLabel>
        <Input
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          borderWidth="2px"
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          borderWidth="2px"
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter your email"
            onChange={(e) => setPassword(e.target.value)}
            borderWidth="2px"
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              w="1 em"
              size="sm"
              onClick={handleClick}
            ></Button>
            {show ? "Hide" : "Show"}
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="confirmpassword" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter your email"
            onChange={(e) => setConfirmpassword(e.target.value)}
            borderWidth="2px"
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              w="1 em"
              size="sm"
              onClick={handleClick}
            ></Button>
            {show ? "Hide" : "Show"}
          </InputRightElement>
        </InputGroup>
      </FormControl>
      {/* <FormControl id="confirmpassword" isRequired>
        <FormLabel>Upload your pic</FormLabel>
        <InputGroup>
          <Input
            type="file"
            p={1.5}
            accept="/image"
            onChange={(e) => postDetails(e.target.files[0])}
          />
        </InputGroup>
      </FormControl> */}
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
