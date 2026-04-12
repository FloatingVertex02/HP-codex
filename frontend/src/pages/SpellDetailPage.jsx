import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";

function SpellDetailPage() {
    const { id } = useParams();
    const [entry, setEntry] = useState(null);

    useEffect(() => {
        const fetchEntry = async () => {
            try {
                const response = await fetch(`http://localhost:4000/v1/entries/${id}`)

                if (!response.ok) {
                    throw new Error("Failed to fetch entry")
                }

                const data = await response.json();
                setEntry(data);
            } catch (error) {
                console.error("Error fetching entry: ", error)
            }
        };
        fetchEntry()
    }, [id]);

    if (!entry) {
        return (
            <VStack>
                <Link to="/"><Button>Back to spell list</Button></Link>
                <Text>Loading spell...</Text>
            </VStack>
        );
    }

    return (
        <VStack>
            <Link to="/"><Button>Back to spell list</Button></Link>
            <Heading>{entry.name}</Heading>
            <HStack>
                <Text>Description: {entry.description}</Text>
                <Text>Category: {entry.category}</Text>
            </HStack>
        </VStack>
    )

}

export default SpellDetailPage