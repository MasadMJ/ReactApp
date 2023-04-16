import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const App = () => {
  const contentItems1 = [
    { text: 'משפט 1', textStyle: { fontSize: 18, color: 'blue' } },
    { text: 'משפט 2', textStyle: { fontSize: 22, color: 'green', fontStyle: 'italic' } },
    { text: 'משפט 3', textStyle: { fontSize: 16, color: 'red', textDecorationLine: 'underline' } },
  ];

  const contentItems2 = [
    { text: 'משפט 4', textStyle: { fontSize: 20, color: 'purple' } },
    { text: 'משפט 5', textStyle: { fontSize: 24, color: 'orange', fontWeight: 'bold' } },
  ];

  return (
    <View style={styles.container}>
      <Header isTop={true} textStyle={{ fontSize: 20 }}>כותרת 1</Header>
      <Content items={contentItems1} />
      <Header isTop={false} textStyle={{ fontSize: 20 }}>כותרת 2</Header>
      <Content items={contentItems2} />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});

export default App;
