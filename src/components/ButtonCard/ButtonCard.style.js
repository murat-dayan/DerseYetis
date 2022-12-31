import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {},
  touchable_container: {
    borderRadius: 10,
    marginVertical: 5,
    alignSelf: 'center',
    width: deviceSize.width * 0.8,
    height: deviceSize.height/18,
    backgroundColor: colors.compsBlue,
    alignItems: 'center',
    justifyContent:'center'
  },
  touchable_text: {
    alignSelf:'center',
    color: 'white',
    fontSize: 22,
    fontStyle:'normal',
    fontWeight:'bold'
  },
});
