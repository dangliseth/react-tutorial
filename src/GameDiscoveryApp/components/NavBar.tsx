import {
  Image,
  Input,
  InputGroup,
  Link,
  Group,
  Box,
  Flex,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
      <Box position="sticky">
        <Flex gap="5">
          <a className="navbar-brand" href="#">
            <Image
              height="40px"
              src="https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo.png"
            />
          </a>
          <form>
            <InputGroup startElement={<FaSearch />}>
              <Input placeholder="Search" key="search" />
            </InputGroup>
          </form>
          <Group marginEnd="auto">
            <Link href="https://chakra-ui.com" colorPalette="gray">
              LOG IN
            </Link>
            <Link href="https://chakra-ui.com" colorPalette="gray">
              SIGN UP
            </Link>
          </Group>
        </Flex>
      </Box>
    </>
  );
};

export default NavBar;
