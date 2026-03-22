import { HStack, Icon, Switch, Text } from "@chakra-ui/react";
import { useColorMode } from "../../components/ui/color-mode";
import { MdDarkMode } from "react-icons/md";
import { TbSunset2Filled } from "react-icons/tb";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Icon>{colorMode ==="dark" ? <MdDarkMode /> : <TbSunset2Filled />}</Icon>
      <Switch.Root
        colorPalette="green"
        checked={colorMode === "dark"}
        onCheckedChange={() => toggleColorMode()}
      >
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Label />
      </Switch.Root>
      <Text whiteSpace="nowrap" display={{ base: "none", md: "block" }}>
        Dark Mode
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
