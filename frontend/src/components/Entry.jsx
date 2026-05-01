import { Link } from "react-router-dom";
import { Box, Card, HStack, Image } from "@chakra-ui/react";
import PlaceholderIconsCa from "../assets/PlacholderIconsCa.svg";
import PlaceholderIconsTr from "../assets/PlacholderIconsTr.svg";
import PlaceholderIconsCo from "../assets/PlacholderIconsCo.svg";
import PlaceholderIconsCu from "../assets/PlacholderIconsCu.svg";
import PlaceholderIconsHe from "../assets/PlacholderIconsHe.svg";

function Entry({ entry }) {
    const iconMap = {
        Charm: PlaceholderIconsCa,
        Transfiguration: PlaceholderIconsTr,
        Conjuration: PlaceholderIconsCo,
        Curse: PlaceholderIconsCu,
        Healing: PlaceholderIconsHe
    };

    const categories = Array.isArray(entry.category) ? entry.category : entry.category.split(",").map((cat) => cat.trim())

    const iconSrc = categories.map((cat) => iconMap[cat]).filter(Boolean)

    return(
        <Link to={`/spells/${entry.id}`} >
            <Card.Root bg="#f7f1e3" borderColor="#d6c3a1">
                <Card.Body>
                    <HStack align="start" justify="space-between">

                        <Box>
                            <Card.Title color="#4b2e19">{entry.name}</Card.Title>
                            <Card.Description color="#6b5a45">{entry.description}</Card.Description>
                       </Box>
                       <HStack justify="flex-end" align="start" gap={2}>
                            {iconSrc.map((icon, index) => (
                                    <Image 
                                    key={index}
                                    src={icon}

                                    boxSize="28px" />
                            ))}
                        </HStack>
                    </HStack>
                </Card.Body>
            </Card.Root>
        </Link>
    )
}

export default Entry