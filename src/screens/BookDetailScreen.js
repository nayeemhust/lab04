import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, Alert } from 'react-native';
import { db } from '../../firebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const BookDetailScreen = ({ route }) => {
  const { bookId } = route.params;
  const [book, setBook] = useState(null);
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    const fetchBookDetails = async () => {
      const docRef = doc(db, 'bookapp', bookId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setBook(docSnap.data());
      }
    };

    fetchBookDetails();
  }, [bookId]);

  const handleBorrow = async () => {
    if (borrowedBooks.length >= 3) {
      Alert.alert('Borrowing Limit Reached', 'You cannot borrow more than 3 books at a time.');
      return;
    }

    const docRef = doc(db, 'bookapp', bookId);
    await updateDoc(docRef, {
      isBorrowed: true,
      borrowedBy: 'User1', // Replace with actual user ID or name
    });
    Alert.alert('Success', "You've successfully borrowed the book");
  };

  return (
    <View style={styles.container}>
      {book && (
        <>
          <Image source={{ uri: book.coverPage }} style={styles.coverImage} />
          <Text style={styles.title}>{book.bookName}</Text>
          <Text style={styles.author}>{book.authorName}</Text>
          <Text>Rating: {book.rating}</Text>
          <Text>Summary: {book.summary}</Text>
          <Button title="Borrow Book" onPress={handleBorrow} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f8f9fa',
  },
  coverImage: {
    width: '100%',
    height: 200,
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  author: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default BookDetailScreen;
