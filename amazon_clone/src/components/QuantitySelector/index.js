import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

const QuantitySelector = ({quantity, setQuantity}) => {

    const onMinus = () => {
        setQuantity(Math.max(0,quantity-1));
    }

    const onPlus = () => {
        setQuantity(quantity+1);
    }

    return (
        <View style={styles.root}>
            <Pressable onPress={onMinus} style={styles.button}>
                <Feather name="trash" size={19} />
            </Pressable>

            <Text style={styles.quantity}>{quantity}</Text>

            <Pressable onPress={onPlus} style={styles.button}>
                <Entypo name="plus" size={20} />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    root:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderWidth:1.5,
        borderColor:'#A9A9A9',
        width:130,
        borderRadius:5
    },
    button:{
        width:35,
        height:35,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#d1d1d1'
    },
    quantity:{
        color:'#007eb9'
    },

});

export default QuantitySelector;