import { Provider } from "./components/ui/provider";
import { Heading, VStack, Theme } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";


function App() {
  

  return (
    <Provider>
      <Theme appearance="light">
        <VStack>
          <Heading>Harry Potter Spells & Potions</Heading>
          <Outlet />
        </VStack>
      </Theme>
    </Provider>
  )
}

export default App
