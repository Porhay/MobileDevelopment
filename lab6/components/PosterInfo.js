import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Text, Dimensions, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';


const COLOR = '#EEEEEE'

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");


export default function PosterInfo({ route }) {

    const { fileName, title, year } = route.params;

    const [dimensions, setDimensions] = useState({ window, screen });
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);


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
        if (dim.height >= dim.width) {
            return styles
        } else {
            return landscape
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                await fetch(`http://www.omdbapi.com/?apikey=dbf1a99b&i=${fileName}`)
                    .then((response) => response.json())
                    .then((json) => setData(json))
                    .finally(() => setLoading(false));
            } catch (error) {
                console.error(error);
            }
        }

        fetchData()

    }, []);

    return (
        <>
            {isLoading ? <View style={orientation().loading}><ActivityIndicator size='large' /></View> : (
                <SafeAreaView>
                    <ScrollView style={{ backgroundColor: 'white' }}>
                        <View style={orientation().infoScreen}>
                            <View style={orientation().infoImageSection}>
                                <Image
                                    style={orientation().infoImage}
                                    source={data.Poster === 'N/A' ? require('../posters/noposter.png') : { uri: data.Poster }}
                                />
                            </View>
                            <View style={orientation().infoScreenTextView}>
                                <Text style={orientation().baseText}>
                                    Title:
                                    <Text style={orientation().innerText}> {data.Title != '' ? data.Title : title}</Text>
                                </Text>
                                <Text style={orientation().baseText}>
                                    Year:
                                    <Text style={orientation().innerText}> {data.Year != '' ? data.Year : year}</Text>
                                </Text>
                                <Text style={orientation().baseText}>
                                    Genre:
                                    <Text style={orientation().innerText}> {data.Genre}{'\n'}</Text>
                                </Text>
                                <Text style={orientation().baseText}>
                                    Director:
                                    <Text style={orientation().innerText}> {data.Director}</Text>
                                </Text>
                                <Text style={orientation().baseText}>
                                    Actors:
                                    <Text style={orientation().innerText}> {data.Actors}{'\n'}</Text>
                                </Text>
                                <Text style={orientation().baseText}>
                                    Country:
                                    <Text style={orientation().innerText}> {data.Country}</Text>
                                </Text>
                                <Text style={orientation().baseText}>
                                    Language:
                                    <Text style={orientation().innerText}> {data.Language}</Text>
                                </Text>
                                <Text style={orientation().baseText}>
                                    Production:
                                    <Text style={orientation().innerText}> {data.Production}</Text>
                                </Text>
                                <Text style={orientation().baseText}>
                                    Released:
                                    <Text style={orientation().innerText}> {data.Released}</Text>
                                </Text>
                                <Text style={orientation().baseText}>
                                    Runtime:
                                    <Text style={orientation().innerText}> {data.Runtime}{'\n'}</Text>
                                </Text>
                                <Text style={orientation().baseText}>
                                    Awards:
                                    <Text style={orientation().innerText}> {data.Awards}</Text>
                                </Text>
                                <Text style={orientation().baseText}>
                                    Rating:
                                    <Text style={orientation().innerText}> {data.imdbRating}{'\n'}</Text>
                                </Text>
                                <Text style={orientation().baseText}>
                                    Plot:
                                    <Text style={orientation().innerText}> {data.Plot}</Text>
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    // Text Styles (actually at Poster Info component)

    baseText: {
        color: '#949494',
        fontWeight: '600',
        fontSize: 15,
        marginVertical: 1,

    },

    innerText: {
        color: 'black',
        fontWeight: '400',
    },

    infoScreen: {
        paddingHorizontal: 16,
        paddingTop: 10,
        paddingBottom: 40,
        backgroundColor: 'white'
    },

    infoImageSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLOR,

        // shadow
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
    },

    infoImage: {
        width: 380,
        height: 600,

    },
    infoScreenTextView: {
        marginTop: 10
    },

    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }


});


const landscape = StyleSheet.create({

    infoScreen: {
        paddingHorizontal: 16,
        paddingTop: 10,
        paddingBottom: 40,
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row',
    },



    infoImage: {
        width: 170,
        height: 300,

        borderWidth: 3,
        borderColor: '#EEEEEE',


    },

    infoScreenTextView: {
        paddingLeft: 10,
        flexShrink: 1  
    },

    baseText: {
        color: 'black',
        fontWeight: '600',
        fontSize: 14,
        marginVertical: 1,


    },

    innerText: {
        color: 'black',
        fontWeight: '400',

    },

    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }

})