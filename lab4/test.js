import React from "react";
import { Text, View, StyleSheet } from 'react-native';

export default function Test() {
    return (
        <View style={styles.container}>
            <Text style={{ textAlign: 'center' }}>
                Мітячкін Денис
                {"\n"}
                Група ІО-83
                {"\n"}
                ЗК ІО-8320
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