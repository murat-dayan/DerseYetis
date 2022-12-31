import { Dimensions, StyleSheet } from 'react-native'

const deviceSize = Dimensions.get('window')

export default StyleSheet.create({
    
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1, //the container will fill the whole screen.
      },
      map: {
        ...StyleSheet.absoluteFillObject,
        
        marginBottom:100
        
      },

})