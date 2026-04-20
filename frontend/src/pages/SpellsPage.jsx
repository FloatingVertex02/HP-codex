import { useState, useEffect } from 'react';
import { Button, Heading, HStack, Input, Text, VStack } from "@chakra-ui/react";
import EntriesList from "../components/EntriesList";


function SpellsPage() {
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
    fetchEntries(`${import.meta.env.VITE_API_URL}/v1/entries`)
  }, []);

  const handleFilteredList = (category) => {
    fetchEntries(`${import.meta.env.VITE_API_URL}/v1/entries/category/${category}`)
  };

  const handleShowAll = () => {
    fetchEntries(`${import.meta.env.VITE_API_URL}/v1/entries`)
  };

  const handleSearchList = () => {
    fetchEntries(`${import.meta.env.VITE_API_URL}/v1/entries/search/${searchTerm}`)
  };

  return (
    <>
      <HStack>
        <Text>Filter spells by type:</Text>
        <Button backgroundColor="#4b2e19" onClick={handleShowAll}>All Spells</Button>
        <Button backgroundColor="#4b2e19" onClick={() => handleFilteredList("charm")}>Charms</Button>
        <Button backgroundColor="#4b2e19" onClick={() => handleFilteredList("conjuration")}>Conjuration</Button>
        <Button backgroundColor="#4b2e19" onClick={() => handleFilteredList("curse")}>Curse</Button>
        <Button backgroundColor="#4b2e19" onClick={() => handleFilteredList("transfiguration")}>Transfiguration</Button>
      </HStack>
      <HStack>
        <Input width='300px' borderColor="#d6c3a1" placeholder='Search' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <Button backgroundColor="#d6c3a1" onClick={handleSearchList}>Search</Button>
      </HStack>
      <Text>
        <EntriesList entries={entries}/>
      </Text>
    </>
  )
}

export default SpellsPage
