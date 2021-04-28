import React , {useState} from 'react';
import {View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';
import product from '../../data/product';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';

const ProductScreen = () => {

    const [selectedOption, setSelectedOption] = useState(product.options ? product.options[1] : null);
    const [quantity, setQuantity] = useState(1)
    //console.log("*"+selectedOption+"*");
    return (
        <View style={styles.root}>

            <Text style={styles.title}>
                {product.title}
            </Text>

            <ImageCarousel images={product.images} />

            <Picker
                selectedValue={selectedOption}
                onValueChange={(itemValue) => setSelectedOption(itemValue)}
            >
                
                {product.options.map(option => (
                    <Picker.Item label={option} value={option} />
                ))}
            </Picker>

            <Text style={styles.price}>
                ${product.price}
                {product.oldPrice && ( <Text style={styles.oldPrice}> ${product.oldPrice}</Text>)}
            </Text>

            <Text style={styles.description}>
                {product.description}
            </Text>

            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

            <Button text={'Add To Cart'} onPress={() => {}} />
            <Button text={'Buy Now'} onPress={() => {}} />

        </View>
        
    );
};

export default ProductScreen;