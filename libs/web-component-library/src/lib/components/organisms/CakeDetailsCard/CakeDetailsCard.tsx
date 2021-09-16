import { Box, AspectRatio, Image, Text, Center, Flex } from '../../atoms';
import { StarIcon } from '@chakra-ui/icons';

export interface Props {
  imageUrl: string;
  name: string;
  comment: string;
  yumFactor: number;
}

export const CakeDetailsCard: React.FC<Props> = ({
  imageUrl,
  name,
  comment,
  yumFactor,
}) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" maxW="sm" overflow="hidden">
      <AspectRatio ratio={4 / 3}>
        <Image src={imageUrl} alt="cake" />
      </AspectRatio>
      <Box p="3">
        <Center>
          <Text fontSize="2xl">{name}</Text>
        </Center>
      </Box>
      <Box p="3">
        <Flex flexDir="column">
          <Center>
            <Text>{comment}</Text>
          </Center>
          <Box pt="4">
            <Center>
              <Text fontSize="xs">Yum Factor:</Text>
            </Center>
            <Center>
              {Array.from(Array(yumFactor)).map((_, i) => (
                <StarIcon key={i} />
              ))}
            </Center>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default CakeDetailsCard;
