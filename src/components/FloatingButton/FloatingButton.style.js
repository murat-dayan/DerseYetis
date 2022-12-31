import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

export default StyleSheet.create({
    container:{
        position:'absolute',
        bottom:20,
        left:20,
        flexDirection:'column',
        alignItems:'center',
        backgroundColor: colors.backgroundColorCream,
        
        borderRadius:20

    },
    floating_button_text:{
        marginHorizontal:5,
        fontWeight:'bold',
        color: colors.compsBlue
    },
    touchable_container:{
        
        borderRadius:50,
        width:60,
        height:60,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: colors.compsBlue

    }
})