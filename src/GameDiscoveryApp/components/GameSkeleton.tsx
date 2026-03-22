import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameSkeleton = () => {
  return (
    <Card.Root width="100%">
      <Card.Header>
        <Skeleton height="200px" />
      </Card.Header>
      <Card.Body>
        <Skeleton height="20px" width="80%" marginBottom={3} />
        <SkeletonText noOfLines={2} />
      </Card.Body>
    </Card.Root>
  );
};

export default GameSkeleton;
