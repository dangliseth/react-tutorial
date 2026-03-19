import {
  Card,
  HStack,
  SimpleGrid,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";

const GameSkeleton = () => {
  return (
    <>
      <SimpleGrid columns={3} gapX={100} gapY={10}>
        <Card.Root>
          <Stack gap="6" maxW="xs">
            <HStack width="full">
              <SkeletonCircle size="10" />
              <SkeletonText noOfLines={2} />
            </HStack>
            <Skeleton height="200px" />
          </Stack>
        </Card.Root>
      </SimpleGrid>
    </>
  );
};

export default GameSkeleton;
