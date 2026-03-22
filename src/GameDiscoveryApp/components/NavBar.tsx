import { Grid, GridItem, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
  onLogoClick: () => void;
}

const NavBar = ({ onSearch, onLogoClick }: Props) => {
  return (
    <Grid
      padding="10px"
      gap={{ base: 1, md: 5 }}
      alignItems="center"
      templateAreas={{
        base: `"logo switch" "search search"`,
        md: `"logo search switch"`,
      }}
      templateColumns={{
        base: "1fr auto",
        md: "auto 1fr auto",
      }}
    >
      <GridItem area="logo">
        <Image
          src={logo}
          boxSize="60px"
          cursor="pointer"
          onClick={onLogoClick}
        />
      </GridItem>
      <GridItem area="search">
        <SearchInput onSearch={onSearch} />
      </GridItem>
      <GridItem area="switch">
        <ColorModeSwitch />
      </GridItem>
    </Grid>
  );
};

export default NavBar;
