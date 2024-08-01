import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const useBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const querySnapshot = await getDocs(collection(db, 'bookapp'));
      const bookList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBooks(bookList);
    };

    fetchBooks();
  }, []);

  return books;
};

export default useBooks;
