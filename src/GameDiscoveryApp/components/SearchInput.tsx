import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { TbWorldSearch } from "react-icons/tb";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      style={{ flex: 1, minWidth: 0 }}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
      onChange={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup startAddon={<TbWorldSearch />} w="100%">
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="subtle"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
