// import userService, {
//   type Card,
// } from "./GameDiscoveryApp/services/card-service";
// import useUsers from "./GameDiscoveryApp/hooks/useCards";
import NavBar from "./GameDiscoveryApp/components/NavBar";
import SideBar from "./GameDiscoveryApp/components/SideBar";
import GamesView from "./GameDiscoveryApp/components/GamesView";
import { GridItem, SimpleGrid } from "@chakra-ui/react";

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

  return (
    <>
      <NavBar />
      <SimpleGrid columns={2}>
        <GridItem>
          <SideBar />
        </GridItem>
        <GridItem>
          <GamesView />
        </GridItem>
      </SimpleGrid>
    </>
  );
}

export default App;
