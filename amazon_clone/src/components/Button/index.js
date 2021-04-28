import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

const Button = ({text , onPress}) => {
    return (
        <Pressable onPress={onPress} style={styles.root}>
            <Text style={styles.text}>
                {text}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    root:{
        backgroundColor:'#FFA500',
        marginVertical:10,
        height:38,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
        borderWidth:0.5,
        borderColor:'#a15e1b',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    text:{
        fontSize:16
    }
})

export default Button;