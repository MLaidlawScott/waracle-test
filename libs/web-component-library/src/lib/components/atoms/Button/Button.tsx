import React from 'react';
import { Button as CUIButton, ButtonProps } from '@chakra-ui/react';

interface Props extends ButtonProps {
  color?: 'primary' | 'secondary';
}

export const Button: React.FC<Props> = ({ color = 'primary', ...props }) => {
  return (
    <CUIButton {...props} colorScheme={color}>
      Hello
    </CUIButton>
  );
};

export default Button;
