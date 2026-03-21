import { SimpleGrid, Text } from "@chakra-ui/react";
import { type GameQuery } from "../../App";
import GameBox from "./GameBox";
import GameBoxContainer from "./GameBoxContainer";
import GameSkeleton from "../../components/GameSkeleton";
import useCards from "../hooks/useCards";
import type { ReactNode } from "react";

interface Props {
  gameQuery: GameQuery;
  children?: ReactNode;
}

const GamesView = ({ gameQuery, children }: Props) => {
  const { data, error, isLoading } = useCards(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding="10px" gap={5}>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameBoxContainer key={skeleton}>
            <GameSkeleton />
          </GameBoxContainer>
        ))}
      {!isLoading && data.map((game) => (
        <GameBoxContainer key={game.id}>
          <GameBox game={game} />
        </GameBoxContainer>
      ))}
      {children}
    </SimpleGrid>
  );
};

export default GamesView;
