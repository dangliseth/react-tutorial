import { GridItem, Heading, SimpleGrid, Select, Portal } from "@chakra-ui/react";
import useCards from "../hooks/useCards";
import GameBox from "./GameBox";
import GameSelect from "./GameSelect";

function GamesView() {
  const { result, loading, error, setResult, setError, setOrder } = useCards();

  const onValueChange = (order: string) => {

  };

  return (
    <>
      <SimpleGrid autoRows={2} columns={1}>
        <GridItem colSpan={3}>
          <Heading size="lg">Photos Here</Heading>
        </GridItem>
        <GridItem>
          <GameSelect handleChange={() => onValueChange(order)} />
        </GridItem>
        <GridItem>
          <GameBox data={result} />
        </GridItem>
      </SimpleGrid>
    </>
  );
}

export default GamesView;
