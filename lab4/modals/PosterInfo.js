import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import { posterSelector } from "../assets/global";
import { itemInfoSelector } from "../assets/global";
import { Dimensions } from 'react-native';

const COLOR = '#EEEEEE'
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");


export default function PosterInfo({ fileName, title, year }) {

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
        if (dim.height >= dim.width) {
            return styles
        } else {
            return landscape
        }
    }


    const tt = itemInfoSelector(fileName)
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <SafeAreaView>
                <ScrollView style={{ backgroundColor: 'white' }}>
                    <View style={orientation().infoScreen}>
                        <View style={orientation().infoImageSection}>
                            <Image
                                style={orientation().infoImage}
                                source={posterSelector(tt.Poster)}
                            />
                        </View>
                        <View style={orientation().infoScreenTextView}>
                            <Text style={styles.baseText}>
                                Title:
                            <Text style={styles.innerText}> {tt.Title != '' ? tt.Title : title }</Text>
                            </Text>
                            <Text style={styles.baseText}>
                                Year:
                            <Text style={styles.innerText}> {tt.Year != '' ? tt.Year : year}</Text>
                            </Text>
                            <Text style={styles.baseText}>
                                Genre:
                            <Text style={styles.innerText}> {tt.Genre}{'\n'}</Text>
                            </Text>
                            <Text style={styles.baseText}>
                                Director:
                            <Text style={styles.innerText}> {tt.Director}</Text>
                            </Text>
                            <Text style={styles.baseText}>
                                Actors:
                            <Text style={styles.innerText}> {tt.Actors}{'\n'}</Text>
                            </Text>
                            <Text style={styles.baseText}>
                                Country:
                            <Text style={styles.innerText}> {tt.Country}</Text>
                            </Text>
                            <Text style={styles.baseText}>
                                Language:
                            <Text style={styles.innerText}> {tt.Language}</Text>
                            </Text>
                            <Text style={styles.baseText}>
                                Production:
                            <Text style={styles.innerText}> {tt.Production}</Text>
                            </Text>
                            <Text style={styles.baseText}>
                                Released:
                            <Text style={styles.innerText}> {tt.Released}</Text>
                            </Text>
                            <Text style={styles.baseText}>
                                Runtime:
                            <Text style={styles.innerText}> {tt.Runtime}{'\n'}</Text>
                            </Text>
                            <Text style={styles.baseText}>
                                Awards:
                            <Text style={styles.innerText}> {tt.Awards}</Text>
                            </Text>
                            <Text style={styles.baseText}>
                                Rating:
                            <Text style={styles.innerText}> {tt.imdbRating != '' ? tt.imdbRating + '/10' : ''}{'\n'}</Text>
                            </Text>
                            <Text style={styles.baseText}>
                                Plot:
                            <Text style={styles.innerText}> {tt.Plot}</Text>
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
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
        flexShrink: 1 // перенос 
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

})