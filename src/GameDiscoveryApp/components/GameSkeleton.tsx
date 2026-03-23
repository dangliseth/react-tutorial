import { Card, HStack, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const GameSkeleton = () => {
  return (
    <Card.Root width="100%">
      <Card.Header>
        <Skeleton height="200px" />
      </Card.Header>
      <Card.Body>
        <HStack>
          <SkeletonCircle size="6"/>
          <SkeletonText noOfLines={1} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameSkeleton;
