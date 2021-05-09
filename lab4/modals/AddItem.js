import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Text, Button, ScrollView } from 'react-native';
import { DATA } from "../screens/MoviesScreen";

let newPosterCounter = 0
const regex = /\d+/;

const AddItem = () => {
    const [title, onChangeTitle] = useState('');
    const [type, onChangeType] = useState('');
    const [year, onChangeYear] = useState('');

    const [shouldShow, setShouldShow] = useState(false);

    const newItem = () => {
        onChangeTitle('')
        onChangeType('')
        onChangeYear('')
        if (title != '') { 
            const obj = {
                "Title": title,
                "Type": type,
                "Year": year,
                "imdbID": newPosterCounter + 1,
            }
            DATA.push(obj)
            newPosterCounter++
        } else {
            setShouldShow(true)
            setTimeout(() => {
                setShouldShow(false)
            }, 4000);
        }   
        
    }


    return (
        
        <View style={styles.screen}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps='handled'
            >
            
            <Text style={styles.textStyle}>Title</Text>
            <View style={styles.sectionStyle}>
                <TextInput
                    placeholder={''}
                    style={styles.textInputStyle}
                    onChangeText={(text) => onChangeTitle(text)}
                    value={title}
                    clearButtonMode={'while-editing'}
                    
                />
                
            </View>
            <View style={{padding:2}}>
                {shouldShow ? (<Text style={styles.textTipStyle}>Movie title is required!</Text>) : null}
            </View>

            
            <Text style={styles.textStyle}>Type</Text>
            <View style={styles.sectionStyle}>
                
                
                <TextInput
                    placeholder={''}
                    style={styles.textInputStyle}
                    onChangeText={(text) => onChangeType(text)}
                    value={type}
                    clearButtonMode={'while-editing'}

                />
            </View>
            <View style={{ padding: 2 }}></View>


            <Text style={styles.textStyle}>Year</Text>
            
            <View style={styles.sectionStyle}>
                    <TextInput
                        keyboardType={'numeric'}
                        placeholder={''}
                        style={styles.textInputStyle}
                        onChangeText={(text) => {
                            if (regex.test(text) || text === '') {
                                onChangeYear(text)
                            }
                        }}
                        value={year}
                        clearButtonMode={'while-editing'}
                        maxLength={4}
                    />
                
            </View>
            <View style={{ padding: 2 }}></View>


            <View style={styles.buttonStyle}>
                <Button
                    
                    title="Add Poster"
                    onPress={newItem}
                />
            </View>
            </ScrollView>
        </View>
    );
}



const styles = StyleSheet.create({

    // Input style section
    screen: {
        flex: 1, 
        backgroundColor: 'white',
        paddingHorizontal: 14,
        
    },

    textInputStyle: {
        flex: 1,
        height: 40,
        margin: 2,
        borderRadius: 10,
        marginLeft: 19
        
    },

    sectionStyle: {

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEEEEE',

        borderRadius: 10,
        height: 40,
        borderRadius: 10,
        marginTop: 5,
        marginHorizontal: 8,

        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 3,
            width: 0,
        },
        elevation: 2,
        
    },

    imageStyle: {
        margin: 5,
    },

    // Button section
    buttonStyle: {
        marginTop: 30,
    },

    // Text sections
    textStyle: {
        
        marginLeft: 26, 
        fontWeight: 'bold', 
        color: '#808082',
        marginTop: 20,
    },

    textTipStyle: {
        paddingTop: 6,
        marginLeft: 26,
        position: 'absolute',
        fontSize: 12,
        color: 'red',
    },


    closeButtonParent: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        color: '#3076CB'
    },
});

export default AddItem;