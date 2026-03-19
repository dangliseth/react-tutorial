import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import GamesView from "./GameDiscoveryApp/components/GamesView";
import GameHeading from "./GameDiscoveryApp/components/GameHeading";
import GenreList from "./GameDiscoveryApp/components/GenreList";
import NavBar from "./GameDiscoveryApp/components/NavBar";
import PlatformSelector from "./GameDiscoveryApp/components/PlatformSelector";
import GameSelect from "./GameDiscoveryApp/components/GameSelect";
import { type Platform } from "./GameDiscoveryApp/hooks/useCards";
import { type Genre } from "./GameDiscoveryApp/hooks/useGenres";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  // const { users, loading, error, setUsers, setError } = useUsers();

  // const deleteUser = (id: number) => {
  //   setUsers(users.filter((user) => user.id !== id));

  //   const oldUsers = [...users];

  //   userService.delete(id).catch((e) => {
  //     setError(e.message);
  //     setUsers(oldUsers);
  //   });
  // };

  // const addUser = () => {
  //   const oldUsers = [...users];
  //   const newUser = {
  //     id: 50,
  //     name: "New User",
  //   };

  //   userService
  //     .add(newUser)
  //     .then(() => {
  //       setUsers([...users, newUser]);
  //     })
  //     .catch((e) => {
  //       setError(e.message);
  //       setUsers(oldUsers);
  //     });
  // };

  // const updateUser = (user: User) => {
  //   const oldUsers = [...users];
  //   const updatedUser = { ...user, name: user.name + " Updated" };

  //   setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

  //   userService.update(updatedUser).catch((e) => {
  //     setError(e.message);
  //     setUsers(oldUsers);
  //   });
  // };

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        <GridItem area="main">
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery} />
            <Flex marginBottom={5}>
              <Box marginRight={5}>
                <PlatformSelector
                  selectedPlatform={gameQuery.platform}
                  onSelectPlatform={(platform) =>
                    setGameQuery({ ...gameQuery, platform })
                  }
                />
              </Box>
              <GameSelect
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </Flex>
          </Box>
          <GamesView gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
