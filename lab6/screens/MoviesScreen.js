import React, { useState, useEffect } from 'react';
import { SafeAreaView, Dimensions, View, VirtualizedList, StyleSheet, Text, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export const DATA = []
const COLOR = '#EEEEEE'

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");


const getItem = (data, index) => {
    return ({
        id: `${data[index].imdbID}`,
        title: `${data[index].Title}`,
        year: `${data[index].Year}`,
        type: `${data[index].Type}`,
        poster: `${data[index].Poster}`
    })
};


const getItemCount = (data) => data.length;

function getUniqueListBy(arr, key) {
    // filter object list from repetitions
    return [...new Map(arr.map(item => [item[key], item])).values()]
}

export default function MoviesScreen({ navigation }) {

    const [dimensions, setDimensions] = useState({ window, screen });
    const [rerender, setRerender] = useState(false);

    const [filteredDataSource, setFilteredDataSource] = useState([]);

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
        if (dim.height >= dimensions.window.width) {
            return styles
        } else {
            return landscape
        }
    }

    const LeftActions = () => {
        return (
            <View style={styles.rightAction}>
                <Text style={styles.actionText}>Delete</Text>
            </View>
        )
    }

    
    function Item({ id, title, year, type, poster }) {

        return (

            <TouchableOpacity
                activeOpacity={0.5}
                onPress={
                    () => navigation.navigate('Information', {
                        fileName: id,
                        title: title,
                        year: year
                    })

                }>
                <Swipeable
                    renderRightActions={LeftActions}
                    onSwipeableRightOpen={() => {
                        const obj = filteredDataSource.findIndex(elem => elem.imdbID === id)
                        filteredDataSource.splice(obj, 1);
                        setRerender(!rerender)  // to rerender
                    }}
                >
                    <View style={styles.item}>
                        <View style={styles.posterViev}>
                            <Image
                                style={orientation().poster}
                                source={poster === 'N/A' ? require('../posters/noposter.png') : { uri: poster }}
                            />
                        </View>
                        <View style={orientation().textViev}>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.specs}>{year}</Text>
                            <Text style={styles.specs}>{type}</Text>
                        </View>
                    </View>
                </Swipeable>
            </TouchableOpacity>

        )
    }

    const ItemSeparatorView = () => {
        return (
            // Flat List Item Separator
            <View
                style={{
                    flex: 1,
                    height: 0.5,
                    width: '92%',
                    backgroundColor: '#e4e4e4',
                    marginLeft: 'auto',
                    marginRight: 'auto'

                }}
            />
        );
    };

    const searchFilterFunction = async (text) => {

        const validText = text
            .toLowerCase()
            .replace(/[^a-zA-Z ]/g, "")
            .replace(/\s+/g, ' ')
            .trim()
            .replace(/,/g, '')

        if (validText.length < 3) {
            setFilteredDataSource([])
        } else {
            let url = `http://www.omdbapi.com/?apikey=dbf1a99b&s=${validText}&page=1`;
            let response = await fetch(url)
                .then(loadedData => loadedData.json())
                .catch(error => {
                    console.log(error);
                })

            if (response.Search !== undefined) {
                setFilteredDataSource(getUniqueListBy(response.Search, 'imdbID'))
            }
        }
    };



    return (

        <SafeAreaView style={styles.container}>
            {
                React.useLayoutEffect(() => {
                    navigation.setOptions({
                        headerRight: () => (
                            <TouchableOpacity
                                activeOpacity={0.5}

                                onPress={() => {
                                    navigation.navigate('New poster');
                                }}
                            >
                                <MaterialCommunityIcons style={orientation().addIcon} name="plus" color={'#808082'} size={30} />
                            </TouchableOpacity>
                        ),
                    });
                }, [navigation])
            }
            <View style={styles.sectionStyle}>
                <MaterialCommunityIcons style={styles.imageStyle} name="magnify" color={'#808082'} size={26} />
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={(text) =>
                        searchFilterFunction(text)}

                    underlineColorAndroid="transparent"
                    clearButtonMode={'while-editing'}
                />
            </View>

            <VirtualizedList
                data={filteredDataSource}
                // decelerationRate='fast'

                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={({ item }) => (
                    <Item id={item.id} title={item.title} year={item.year} type={item.type} poster={item.poster} />
                )}

                
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
    addIcon: {
        textAlign: 'right',
        marginHorizontal: 16,
        marginBottom: 5,
        marginTop: 2,
        color: '#3076CB'
    }
})


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: '#fff',

    },
    item: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 'auto',
        justifyContent: 'center',
        marginHorizontal: 0,
        padding: 20,
    },
    title: {
        fontSize: 18,
    },

    poster: {
        width: 70,
        height: 120,
        borderWidth: 1,
        borderColor: COLOR,
        marginTop: 3,
    },

    posterViev: {
        flex: 2,
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
    },

    textViev: {
        flex: 10,
        marginLeft: 28,
    },

    specs: {
        marginTop: 10,
        fontSize: 16,
    },

    // Search style section

    textInputStyle: {
        flex: 1,
        height: 40,
        margin: 2,
        borderRadius: 10,
    },

    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEEEEE',
        height: 40,
        borderRadius: 10,
        marginTop: 10,
        marginHorizontal: 10,
        marginBottom: 4,
    },

    imageStyle: {
        margin: 5,
    },


    // Text Styles (actually at Poster Info component)

    baseText: {
        color: '#949494',
        fontWeight: '600',
        fontSize: 15,

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

    rightAction: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'red',

    },

    actionText: {
        color: '#fff',
        padding: 20,
        textAlign: 'right'
    },
    addIcon: {
        textAlign: 'right',
        marginHorizontal: 16,
        marginBottom: 5,
        marginTop: 2,
        color: '#3076CB'
    }

});
