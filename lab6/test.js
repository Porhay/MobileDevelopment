import React from "react";
import { Text, View, StyleSheet } from 'react-native';

export default function GeneralScreen() {
    return (
        <View style={styles.container}>
            <Text style={{ textAlign: 'center' }}>
                Test
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
})