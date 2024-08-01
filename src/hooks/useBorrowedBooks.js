import { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';

const useBorrowedBooks = (userId) => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    const fetchBorrowedBooks = async () => {
      const q = query(collection(db, 'bookapp'), where('borrowedBy', '==', userId));
      const querySnapshot = await getDocs(q);
      const borrowedList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBorrowedBooks(borrowedList);
    };

    fetchBorrowedBooks();
  }, [userId]);

  return borrowedBooks;
};

export default useBorrowedBooks;
