import { Portal, Select } from "@chakra-ui/react";

interface Props {
  handleChange: () => void;
}

const GameSelect = ({ handleChange }: Props) => {
  const orderFields = [
    "name",
    "released",
    "added",
    "created",
    "updated",
    "rating",
  ];

  return (
    <>
      <Select.Root onValueChange={handleChange}>
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
              {orderFields.map((o) => (
                <Select.Item item={o} key={o}>
                  {o}
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
