import Entry from "./Entry";
import { Box } from "@chakra-ui/react";

function EntriesList({ entries }) {
    return (
        <Box margin="50px">
            {entries.map((entry) => (
                <Entry key={entry.id} entry={entry} />
            ))}
        </Box>
    )
}

export default EntriesList