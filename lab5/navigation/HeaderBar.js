import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MoviesScreen from "../screens/MoviesScreen";
import AddItem from "../components/AddItem";
import PosterInfo from "../components/PosterInfo";




function HomeScreen({ navigation }) {
 
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => navigation.navigate('New poster')}>

                    <MaterialCommunityIcons style={styles.addIcon} name="plus" color={'#808082'} size={30} />
                </TouchableOpacity>
                
            ),
        });
    }, [navigation]);

    return <MoviesScreen />;
}



function AddItemForm() {
    return (
        <AddItem />
    );
}

function PosterInfoForm({ route }) {
    
    const { fileName, title, year } = route.params;

    return (
        <PosterInfo 
            fileName = { fileName }
            title = { title }
            year = { year }
        />

    );
}


const Stack = createStackNavigator();

export default function HeaderBar() {
    return (

        <Stack.Navigator initialRouteName="Movies">
            <Stack.Screen name="Movies" component={HomeScreen} />
            <Stack.Screen name="New poster" component={AddItemForm} />
            <Stack.Screen name="Info" component={PosterInfoForm} />
            
        </Stack.Navigator>

    );
}


const styles = StyleSheet.create({
    // Add form
    addIcon: {
        textAlign: 'right',
        marginHorizontal: 16,
        marginBottom: 5,
        marginTop: 2,
        color: '#3076CB'
    }
});