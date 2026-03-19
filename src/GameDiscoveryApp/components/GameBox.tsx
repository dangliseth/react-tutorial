import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import { type Game } from '../hooks/useCards'
import getCroppedImageUrl from '../services/image-url'
import CriticScore from './CriticScore'
import PlatformIconList from './PlatformIconList'

interface Props {
  game: Game
}

const GameBox = ({ game }: Props) => {
  return (
    <Card.Root>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent='space-between' marginBottom={3}>
          <PlatformIconList platforms={game.parent_platforms?.map(p => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize='2xl'>{game.name}</Heading>
      </CardBody>
    </Card.Root>
  )
}

export default GameBox;