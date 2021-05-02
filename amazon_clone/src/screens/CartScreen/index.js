import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import CartProductItem from '../../components/CartProductItem';
import Button from '../../components/Button';
import products from '../../data/cart';
import {CheckBox} from 'react-native-elements';

const CartScreen = () => {

    const[isSelected, setIsSelected] = useState(false);
    const[isChecked, setIsChecked] = useState(false);
    const totalPrice = products.reduce((summedPrice, product) => 
        summedPrice + product.item.price * product.quantity,
        0,
    );

    return (
        <View style={styles.page}>
            
            <FlatList
                data={products}
                renderItem={({item}) => <CartProductItem cartItem = {item} />}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => (
            <View>
                <Text style={{fontSize:18}}>Subtotal ({products.length} items):
                    <Text style={{color:'#B22222', fontWeight:'bold'}}> ${totalPrice.toFixed(2)}</Text>
                </Text>

                <Button
                    text="Proceed to checkout"
                    onPress={() => console.warn('vlad')}
                    containerStyles={{
                        backgroundColor:'#f7e300',
                        borderColor:'#c7b702',
                        height:48,
                        
                    }}
                />

                <CheckBox
                    title='Add a gift receipt for easy returns'
                    checkedIcon='circle'
                    uncheckedIcon='circle-o'
                    checked={isChecked}
                    onPress={() => setIsChecked(!isChecked)}
                />
                
                
            </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    page:{
        padding:10
    }
})

export default CartScreen;