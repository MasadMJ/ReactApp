import React from 'react';
import { Text, TextStyle } from 'react-native';

interface HeaderProps {
  children: string;
  isTop: boolean;
  textStyle: TextStyle;
}

const Header = ({ children, isTop, textStyle }: HeaderProps) => {
  const adjustedStyle = isTop
    ? { ...textStyle, fontSize: textStyle.fontSize ? textStyle.fontSize + 10 : 20, fontWeight: 'bold' }
    : textStyle;

  return <Text style={adjustedStyle}>{children}</Text>;
};

export default Header;
