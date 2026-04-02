import { useState, useEffect } from 'react';
import { Provider } from "./components/ui/provider";
import { Heading, Text } from "@chakra-ui/react";
import EntriesList from "./components/EntriesList";


function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await fetch("http://localhost:4000/v1/entries");
        const data = await response.json();
        setEntries(data)
      } catch (error) {
        console.error("Error fetching entries: ", error)
      }
    };
    fetchEntries()
  }, [])

  return (
    <Provider>
      <Heading>Harry Potter Spells & Potions</Heading>
      <Text>
        <EntriesList entries={entries}/>
      </Text>
    </Provider>
  )
}

export default App
