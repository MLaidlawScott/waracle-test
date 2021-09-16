import { Box, Header } from '@waracle-test/web-component-library';

interface Props {
  headerText: string;
}

export const PageWithHeader: React.FC<Props> = ({ headerText, ...props }) => {
  return (
    <Box w="100vw" h="100vh" backgroundColor="secondary.100">
      <Header title={headerText} />
      {props.children}
    </Box>
  );
};
