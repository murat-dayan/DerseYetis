import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../styles/colors'
const deviceSize=Dimensions.get("window")


export default StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor: colors.compsBlue,
        width: deviceSize.width*0.8,
        height: deviceSize.height/18,
        alignSelf:'center',
        borderRadius:10,
        marginVertical:5,
        backgroundColor:'white'
    },
    text_input:{
        padding:5
    }
})