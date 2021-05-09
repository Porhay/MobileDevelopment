import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, VirtualizedList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import * as data from '../MoviesList.json';
import { Dimensions } from 'react-native';

const DATA = data.Search

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const posterSelector = (key) => {
    switch (key) {
        case 'Poster_01.jpg':
            return require('../posters/Poster_01.jpg')
        case 'Poster_02.jpg':
            return require('../posters/Poster_02.jpg')
        case 'Poster_03.jpg':
            return require('../posters/Poster_03.jpg')
        case 'Poster_05.jpg':
            return require('../posters/Poster_05.jpg')
        case 'Poster_06.jpg':
            return require('../posters/Poster_06.jpg')
        case 'Poster_07.jpg':
            return require('../posters/Poster_07.jpg')
        case 'Poster_08.jpg':
            return require('../posters/Poster_08.jpg')
        case 'Poster_10.jpg':
            return require('../posters/Poster_10.jpg')
            
        default:
            return require('../posters/noposter.png')
    }
}

const getItem = (data, index) => {
    return ({
        id: Math.random().toString(12).substring(0),
        title: `${data[index].Title}`,
        year: `${data[index].Year}`,
        type: `${data[index].Type}`, 
        poster: `${data[index].Poster}`
})};

const getItemCount = (data) => data.length;

const MoviesScreen = () => {

    const [dimensions, setDimensions] = useState({ window, screen });

    const onChange = ({ window, screen }) => {
        setDimensions({ window, screen });
    };

    useEffect(() => {
        Dimensions.addEventListener("change", onChange);
        return () => {
            Dimensions.removeEventListener("change", onChange);
        };
    });

    const orientation = () => {
        const dim = Dimensions.get('screen');
        if (dimensions.window.height >= dimensions.window.width) {
            return portrait
        } else {
            return landscape
        }
    }

    const Item = ({ title, year, type, poster }) => (   
        <View style={portrait.item}>
            <View style={portrait.posterViev}>
                <Image
                    style={orientation().poster}
                    source={posterSelector(poster)}
                />
            </View>
            <View style={orientation().textViev}>
                <Text style={portrait.title}>{title}</Text>
                <Text style={portrait.specs}>{year}</Text>
                <Text style={portrait.specs}>{type}</Text>
            </View>   
        </View>
    );

    const ItemSeparatorView = () => {
        return (
            // Flat List Item Separator
            <View
                style={{
                    height: 0.5,
                    width: '92%',
                    backgroundColor: '#C8C8C8',
                    display: 'block', 
                    marginLeft: 'auto',
                    marginRight: 'auto'

                }}
            />
        );
    };

    return (
        <SafeAreaView style={portrait.container}>
            <VirtualizedList
                data={DATA}
                initialNumToRender={4}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={({ item }) => 
                    <Item title={item.title} year={item.year} type={item.type} poster={item.poster}/>}
                
                keyExtractor={(item, index) => {
                    return item.id;
                }}
                getItemCount={getItemCount}
                getItem={getItem}
            />
        </SafeAreaView>
    );
}

const landscape = StyleSheet.create({
    textViev: {
        flex: 10,
        marginRight: 80,
    },
    
    poster: {
        width: 70,
        height: 120,
        marginLeft: 12,
    },
})

const portrait = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: '#fff',
    },
    item: {
        flexDirection: 'row',
        marginBottom: 1,
        backgroundColor: 'white',
        height: 'auto',
        justifyContent: 'center',
        marginVertical: 8,
        marginHorizontal: 0,
        padding: 20,
        
    },
    title: {
        fontSize: 18,
    },
    poster: {
        
        width: 70,
        height: 120,
        
    },

    posterViev: {
        flex: 2
    },

    textViev: {
        flex: 10,
        marginLeft: 28,
        
    },

    specs: {
        marginTop: 10,
        fontSize: 16,
    }
});

export default MoviesScreen;