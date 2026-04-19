import { Link } from "react-router-dom";
import { Box, Card, HStack, Image } from "@chakra-ui/react";
import PlaceholderIconsCa from "../assets/PlacholderIconsCa.svg";
import PlaceholderIconsTr from "../assets/PlacholderIconsTr.svg";
import PlaceholderIconsCo from "../assets/PlacholderIconsCo.svg";
import PlaceholderIconsCu from "../assets/PlacholderIconsCu.svg";

function Entry({ entry }) {
    const iconMap = {
        Charm: PlaceholderIconsCa,
        Transfiguration: PlaceholderIconsTr,
        Conjuration: PlaceholderIconsCo,
        Curse: PlaceholderIconsCu,
    };

    const categories = Array.isArray(entry.category) ? entry.category : entry.category.split(",").map((cat) => cat.trim())

    const iconSrc = categories.map((cat) => iconMap[cat]).filter(Boolean)

    return(
        <Link to={`/spells/${entry.id}`} >
            <Card.Root>
                <Card.Body>
                    <HStack>

                        <Box>
                            <Card.Title>{entry.name}</Card.Title>
                            <Card.Description>{entry.description}</Card.Description>
                       </Box>
                       {iconSrc.map((icon, index) => (
                            <Image 
                            key={index}
                            src={icon}

                            boxSize="28px" />
                       ))}

                    </HStack>
                </Card.Body>
            </Card.Root>
        </Link>
    )
}

export default Entry