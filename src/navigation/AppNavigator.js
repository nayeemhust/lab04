import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import BooksListScreen from '../screens/BooksListScreen';
import BookDetailScreen from '../screens/BookDetailScreen';
import BorrowedScreen from '../screens/BorrowedScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="HomeStackHome" component={HomeScreen} />
    <Stack.Screen name="BooksListScreen" component={BooksListScreen} />
    <Stack.Screen name="BookDetailScreen" component={BookDetailScreen} />
  </Stack.Navigator>
);

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="HomeTab" component={HomeStack} />
    <Tab.Screen name="BorrowedBooks" component={BorrowedScreen} />
  </Tab.Navigator>
);

export default AppNavigator;
