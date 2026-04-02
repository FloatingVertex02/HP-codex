import { Card } from "@chakra-ui/react"

function Entry({ entry }) {
    return(
        <Card.Root>
            <Card.Body>
                <Card.Title>{entry.name}</Card.Title>
                <Card.Description>{entry.description}</Card.Description>
            </Card.Body>
        </Card.Root>
    )
}

export default Entry