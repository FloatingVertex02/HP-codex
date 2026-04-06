import { useState, useEffect } from 'react';
import { Provider } from "./components/ui/provider";
import { Button, Heading, HStack, Input, Text, VStack } from "@chakra-ui/react";
import EntriesList from "./components/EntriesList";


function App() {
  const [entries, setEntries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchEntries = async (url) => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch list")
        };

        const data = await response.json();
        setEntries(data)
      } catch (error) {
        console.error("Error fetching entries: ", error)
      }
    };
  
  useEffect(() => {
    fetchEntries("http://localhost:4000/v1/entries")
  }, []);

  const handleFilteredList = async (category) => {
    fetchEntries(`http://localhost:4000/v1/entries/category/${category}`)
  };

  const handleShowAll = async () => {
    fetchEntries("http://localhost:4000/v1/entries")
  };

  const handleSearchList = () => {
    fetchEntries(`http://localhost:4000/v1/entries/search/${searchTerm}`)
  };

  return (
    <Provider>
      <Heading>Harry Potter Spells & Potions</Heading>
      <HStack>
        <Text>Filter spells by type:</Text>
        <Button onClick={handleShowAll}>All Spells</Button>
        <Button onClick={() => handleFilteredList("charm")}>Charms</Button>
        <Button onClick={() => handleFilteredList("conjuration")}>Conjuration</Button>
        <Button onClick={() => handleFilteredList("curse")}>Curse</Button>
        <Button onClick={() => handleFilteredList("transfiguration")}>Transfiguration</Button>
      </HStack>
      <HStack>
        <Input width='300px' placeholder='Search' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <Button onClick={handleSearchList}>Search</Button>
      </HStack>
      <Text>
        <EntriesList entries={entries}/>
      </Text>
    </Provider>
  )
}

export default App
