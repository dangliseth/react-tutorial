import { Input, InputElement, Group, Menu } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      <Menu.Root>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (ref.current) onSearch(ref.current.value);
          }}
        >
          <Menu.ItemGroup>
            <InputElement children={<BsSearch />} />
            <Input
              ref={ref}
              borderRadius={20}
              placeholder="Search games..."
              variant="flushed"
            />
          </Menu.ItemGroup>
        </form>
      </Menu.Root>
    </>
  );
};

export default SearchInput;
