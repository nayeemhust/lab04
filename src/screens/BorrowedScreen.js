import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { db } from '../../firebaseConfig';
import { collection, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';

const BorrowedScreen = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    const fetchBorrowedBooks = async () => {
      const q = query(collection(db, 'bookapp'), where('borrowedBy', '==', 'User1'));
      const querySnapshot = await getDocs(q);
      const borrowedList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBorrowedBooks(borrowedList);
    };

    fetchBorrowedBooks();
  }, []);

  const handleReturn = async (bookId) => {
    const docRef = doc(db, 'bookapp', bookId);
    await updateDoc(docRef, {
      isBorrowed: false,
      borrowedBy: null,
    });
    Alert.alert('Success', 'Book returned successfully');
    setBorrowedBooks(borrowedBooks.filter(book => book.id !== bookId));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={borrowedBooks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.bookItem}>
            <Text style={styles.bookTitle}>{item.bookName}</Text>
            <TouchableOpacity onPress={() => handleReturn(item.id)}>
              <Text style={styles.returnButton}>Return Book</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  bookItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bookTitle: {
    fontSize: 18,
  },
  returnButton: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
});

export default BorrowedScreen;
