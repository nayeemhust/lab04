import { StyleSheet } from 'react-native';
import { COLORS, DIMENSIONS } from '../utils/constants';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: DIMENSIONS.padding,
    backgroundColor: COLORS.background,
  },
  header: {
    padding: DIMENSIONS.padding,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    padding: DIMENSIONS.padding,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: DIMENSIONS.margin,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default globalStyles;
