import { Portal, Select, createListCollection } from "@chakra-ui/react";

interface Props {
  onSelectOrder: (order: string) => void;
}

const GameSelect = ({ onSelectOrder }: Props) => {
  const orderFields = createListCollection({
    items: [
      { value: "name" },
      { value: "released" },
      { value: "added" },
      { value: "created" },
      { value: "updated" },
      { value: "rating" },
    ],
  });

  return (
    <>
      <Select.Root
        collection={orderFields}
        onValueChange={(e) => onSelectOrder(e.value[0])}
      >
        <Select.HiddenSelect />
        <Select.Label>Order by</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Order" />
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              {orderFields.items.map((o) => (
                <Select.Item item={o} key={o.value}>
                  {o.value}
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
    </>
  );
};

export default GameSelect;
