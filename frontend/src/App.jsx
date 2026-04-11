import { Provider } from "./components/ui/provider";
import { Heading, VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";


function App() {
  

  return (
    <Provider>
      <VStack>
        <Heading>Harry Potter Spells & Potions</Heading>
        <Outlet />
      </VStack>
    </Provider>
  )
}

export default App
