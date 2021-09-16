import { Box, AspectRatio, Image, Text, Center } from '../../atoms';

interface Props {
  imageUrl: string;
  name: string;
  id: number;
  onClick?: () => void;
}

export const CakeCard: React.FC<Props> = ({ imageUrl, name, onClick }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      maxW="sm"
      overflow="hidden"
      bg="white"
      minW="250px"
      onClick={onClick}
      data-testid="cake-card"
    >
      <AspectRatio ratio={4 / 3}>
        <Image src={imageUrl} alt="cake" />
      </AspectRatio>
      <Box p="3">
        <Center>
          <Text fontSize="2xl">{name}</Text>
        </Center>
      </Box>
    </Box>
  );
};

export default CakeCard;
