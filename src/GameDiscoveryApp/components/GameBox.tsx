import {
  Card,
  GridItem,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import type { Results } from "../services/card-service";
import { GiStarsStack } from "react-icons/gi";
import useCards from "../hooks/useCards";
import GameSkeleton from "./GameSkeleton";

interface Props {
  data: Results[];
}
function GameBox({ data }: Props) {

  const { loading } = useCards();
  return (
    <>
      <SimpleGrid columns={3} gapX={100} gapY={10}>
        {data.map((l) => (
          <Card.Root
            key={l.name}
            width="250px"
            variant="subtle"
            overflow="hidden"
          >
            <Image src={l.background_image} alt={l.name} maxH={130} />
            <Card.Body>
              <Card.Title>
                <Heading>{l.name}</Heading>
                <Text>
                  <Icon size="sm">
                    <GiStarsStack color="yellow" />
                  </Icon>{" "}
                  {l.rating}
                </Text>
              </Card.Title>
            </Card.Body>
            <Card.Footer>
              <Heading size="sm">Release Date: {l.released}</Heading>
            </Card.Footer>
          </Card.Root>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameBox;
