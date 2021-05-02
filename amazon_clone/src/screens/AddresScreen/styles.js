import {StyleSheet} from 'react-native';
import { withDecay } from 'react-native-reanimated';

const styles = StyleSheet.create({
    row:{
        marginVertical:5
    },  
    root:{
        padding:10,
    },
    label:{
        fontWeight:'bold'
    },
    input:{
        backgroundColor:'white',
        padding:5,
        marginVertical:5,
        borderWidth:1,
        borderColor:'lightgrey',
        borderRadius:3,
        height:40
    },
    inputApt:{
        backgroundColor:'white',
        padding:5,
        borderWidth:1,
        marginVertical:-7,
        borderColor:'lightgrey',
        borderRadius:3,
        height:40
    },
    pairForm:{
        flexDirection:'row',
        marginVertical:5

    
    },
    inputPairForm:{
        backgroundColor:'white',
        padding:5,
        marginVertical:5,
        borderWidth:1,
        borderColor:'lightgrey',
        borderRadius:3,
        height:40,
        width:'100%'
        
        
    },

    
})

export default styles;