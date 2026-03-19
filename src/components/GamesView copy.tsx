import {
  GridItem,
  Heading,
  SimpleGrid,
  Select,
  Portal,
} from "@chakra-ui/react";
import useCards from "../hooks/useCards";
import GameBox from "./GameBox";
import GameSelect from "./GameSelect";
import GameSkeleton from "./GameSkeleton";

function GamesView() {
  const { result, loading, error, setResult, setError, setOrder } = useCards();

  const onValueChange = (order: string) => {
    setOrder(order);
  };

  const skeletons = [1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      <Heading size="lg">Photos Here</Heading>
      <GameSelect onSelectOrder={onValueChange} />
      {loading &&
        skeletons.map((s) => {
          <GameSkeleton key={s} />;
        })}
      <GameBox data={result} />
    </>
  );
}

export default GamesView;
