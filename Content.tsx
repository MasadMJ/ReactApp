import React from 'react';
import { Text, TextStyle, View } from 'react-native';

interface ContentItem {
  text: string;
  textStyle: TextStyle;
}

interface ContentProps {
  items: ContentItem[];
}

const Content = ({ items }: ContentProps) => {
  return (
    <View>
      {items.map((item, index) => (
        <Text key={index} style={item.textStyle}>
          {item.text}
        </Text>
      ))}
    </View>
  );
};

export default Content;
