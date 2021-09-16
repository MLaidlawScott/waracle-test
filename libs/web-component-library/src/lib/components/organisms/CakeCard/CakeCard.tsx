import { Box, AspectRatio, Image, Text, Center } from '../../atoms';

interface Props {
  imageUrl: string;
  name: string;
}

export const CakeCard: React.FC<Props> = ({ imageUrl, name }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      maxW="sm"
      overflow="hidden"
      bg="white"
      minW="250px"
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
