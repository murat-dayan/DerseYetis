import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../../styles/colors'

const deviceSize=Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.backgroundColorCream,
        justifyContent:'space-evenly'
    },
    title_text:{
        fontSize:32,
        fontWeight:'bold',
        color:colors.compsBlue,
        alignSelf:'center',
        letterSpacing:10
    },
    logo_container:{
        width: deviceSize.width,
        height: deviceSize.height/4,
        margin:20,
        justifyContent:'center',
        alignSelf:'center',
        alignItems:'center'
    },
    form_container:{
    }
})