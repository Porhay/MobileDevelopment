import React from 'react';
import { View, StyleSheet } from 'react-native';
import Image from 'react-native-image-progress';

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: "row",
    },

    column: {
        flexDirection: "column",
    },

    imageInner: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%",
        width: '100%',
        resizeMode: 'contain',
        backgroundColor: '#BEBEBE',
    }
})

const ImageLayout = ({ imageStore, width, height}) => {

    const imageBox = (size = 1) => {
        if (size === 1) {
            return(
                {
                    width: width,
                    height: height,
                    borderWidth: 1,
                    borderColor: 'white',
                }
            )
        } else if (size === 2) {
            return(
                {
                    width: width * 2,
                    height: height * 2,
                    borderWidth: 1,
                    borderColor: 'white',
                }
            )
        }
    }

    const ImageItem = (uri, style = imageBox()) => (
        <View style={style}>
            <Image
                style={styles.imageInner}
                source={uri}
            />  
        </View>
    );


    return (
        <View>
            <View style={styles.row}>
                <View style={styles.column}>
                    {imageStore[0] && ImageItem(imageStore[0])}
                    {imageStore[3] && ImageItem(imageStore[3])}
                </View>
                {imageStore[1] && ImageItem(imageStore[1], imageBox(2))}
                <View style={styles.column}>
                    {imageStore[2] && ImageItem(imageStore[2])}
                    {imageStore[4] && ImageItem(imageStore[4])}
                </View>
            </View>
            <View style={styles.row}>
                {imageStore[5] && ImageItem(imageStore[5], imageBox(2))}
                <View style={styles.column}>
                    {imageStore[6] && ImageItem(imageStore[6])}
                    {imageStore[8] && ImageItem(imageStore[8])}
                </View>
                <View style={styles.column}>
                    {imageStore[7] && ImageItem(imageStore[7])}
                    {imageStore[9] && ImageItem(imageStore[9])}
                </View>
            </View>
        </View>
    );
};

export default ImageLayout
