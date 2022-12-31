import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    margin: 5,
    borderRadius: 10,
    padding: 5,
    backgroundColor: colors.compsBlue,
  },

  inner_container: {
    justifyContent:'space-between',
    flexDirection:'row',
    paddingVertical:5
  },

  user: {
    color: 'white',
  },

  date: {
    color: 'white',
  },

  title: {
    color: 'white',
    fontSize:18,
    padding:8
  
  },
});
