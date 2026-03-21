import { Card, Skeleton, VStack } from "@chakra-ui/react";

const GameSkeleton = () => {
  return (
    <Card.Root width="100%">
      <Skeleton height="200px" width="100%" />
      <Card.Body>
        <VStack>
          <Skeleton height="20px" width="80%" marginBottom={3} />
          <Skeleton height="20px" width="60%" />
        </VStack>
        <Skeleton width="300px"/>
      </Card.Body>
    </Card.Root>
  );
};

export default GameSkeleton;
