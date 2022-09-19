import React, { useState } from "react";
import { ChatState } from "../Context/ChatProvider";
import SideDrawer from "../components/misc/SideDrawer";
import MyChat from "../components/misc/MyChat";

import ChatBox from "../components/misc/ChatBox";
import { Box } from "@chakra-ui/layout";

import {
  Text,
  Container,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

const Chatpage = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && (
          <MyChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;
