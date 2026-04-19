import { Provider } from "./components/ui/provider";
import { Heading, VStack, Theme } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";


function App() {
  

  return (
    <Provider>
      <Theme appearance="light" bg="#f7f1e3" minH="100vh">
        <VStack>
          <Heading color="#4b2e19" size="6xl" margin="20px">Harry Potter Spells & Potions</Heading>
          <Outlet />
        </VStack>
      </Theme>
    </Provider>
  )
}

export default App
