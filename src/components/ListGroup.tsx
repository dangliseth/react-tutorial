import { useState } from "react";
import styled from "styled-components";

const Ul = styled.ul`
  color: red;
  list-style: none;
`;

const Li = styled.li<LiProps>`
  background-color: ${(props) => (props.active ? "blue" : "none")};
`;
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
interface LiProps {
  active: boolean;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <Ul>
        {items.map((item, index) => (
          <Li
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </Li>
        ))}
      </Ul>
    </>
  );
}

export default ListGroup;
