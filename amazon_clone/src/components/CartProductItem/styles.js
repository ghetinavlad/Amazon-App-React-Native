import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    root:{
        borderWidth:1,
        borderColor:'#d1d1d1',
        borderRadius:10,
        backgroundColor:'#fff',
        marginVertical:5,
        padding:5
    },
    row:{
        flexDirection:'row'
    },
    image:{
        flex:2,
        height:150,
        resizeMode:'contain'
    },
    rightContainer:{
        flex:3,
        padding:10
    },
    title:{
        fontSize:18,
        fontWeight:'500'

    },
    price:{
        fontSize:18,
        fontWeight:'bold',
    }
    ,ratingsContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:5
    },
    star:{
        margin:2
    },
    oldPrice:{
        fontSize:14,
        fontWeight:'normal',
        textDecorationLine:'line-through',
    
    },
    quantityContainer:{
        marginLeft:4,
        marginVertical:8
    }
});

export default styles;