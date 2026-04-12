import { Link } from "react-router-dom";
import { Card } from "@chakra-ui/react";

function Entry({ entry }) {
    return(
        <Link to={`/spells/${entry.id}`} >
            <Card.Root>
                <Card.Body>
                    <Card.Title>{entry.name}</Card.Title>
                    <Card.Description>{entry.description}</Card.Description>
                </Card.Body>
            </Card.Root>
        </Link>
    )
}

export default Entry