import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

export const theme = extendTheme(
  {
    colors: {
      primary: {
        '50': '#FFFFFF',
        '100': '#FFF7F2',
        '200': '#FED9C0',
        '300': '#FDBB8E',
        '400': '#FD9C5B',
        '500': '#FC7E29',
        '600': '#EF6203',
        '700': '#BC4D03',
        '800': '#8A3902',
        '900': '#582401'
      },
      secondary: {
        '50': '#F4FCFF',
        '100': '#DBF5FF',
        '200': '#A8E6FF',
        '300': '#75D7FF',
        '400': '#42C9FF',
        '500': '#0FBAFF',
        '600': '#009CDB',
        '700': '#0078A8',
        '800': '#005375',
        '900': '#002F42'
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: 'brandPrimary',
  })
);

export default theme;
