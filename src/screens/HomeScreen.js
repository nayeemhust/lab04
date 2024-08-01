import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../components/Button';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Browse Books"
        onPress={() => navigation.navigate('BooksListScreen')}
        color="#007BFF"
      />
      <Button
        title="View Borrowed Books"
        onPress={() => navigation.navigate('BorrowedBooks')}
        color="#28A745"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
});

export default HomeScreen;
