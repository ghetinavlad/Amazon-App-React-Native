import React , {useState} from 'react';
import {View, Text, FlatList, Image , StyleSheet, useWindowDimensions} from 'react-native';
const ImageCarousel = ({images}) => {

    const windowWidth = useWindowDimensions().width;
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <View style={styles.root}>
            <FlatList
                data={images}
                renderItem={({item}) => (
                    <Image
                        style={[styles.image, {width:windowWidth - 40}]}
                        source={{uri:item}} />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={windowWidth-20}
                snapToAlignment={'center'}
                decelerationRate={'fast'}
            
            />

            <View style={styles.dots}>
                {images.map((image, index) => (
                    <View style=
                    {[styles.dot,
                      {backgroundColor:index === activeIndex ? '#c9c9c9' : '#ededed'}
                    ]} />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root:{

    },
    image:{
        height:250,
        margin:10,
        resizeMode:'contain'
    },
    dots:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:5
    },
    dot:{
        width:10,
        height:10,
        borderRadius:25,
        borderWidth:1,
        borderColor:'#c9c9c9',
        backgroundColor:'#ededed',
        margin:5
    }
})

export default ImageCarousel;