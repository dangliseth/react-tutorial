import { Card, GridItem, Heading, Icon, Image, SimpleGrid, Text } from "@chakra-ui/react";
import type { Results } from "../services/card-service";
import { GiStarsStack } from "react-icons/gi";

interface Props {
  data: Results[];
}
function GameBox({ data }: Props) {
  return (
    <>
        {data.map((l) => (
            <Card.Root key={l.name} width="250px" variant="subtle">
              <Image src={l.background_image} alt={l.name} maxH={130} />
              <Card.Body>
                <Card.Title>
                  <Heading>{l.name}</Heading>
                  <Text><Icon size="sm"><GiStarsStack color="yellow" /></Icon> {l.rating}</Text>
                </Card.Title>
              </Card.Body>
              <Card.Footer>
                <Heading size="sm">Release Date: {l.released}</Heading>
              </Card.Footer>
            </Card.Root>
        ))}
    </>
  );
}

export default GameBox;
