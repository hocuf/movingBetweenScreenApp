import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native'

function First(props){

    const SecondPageGo = () => props.navigation.navigate('SecondScreen', {mesaj: "selamunaleykum"});

    return (
        <View style={styles.container}>
            <Text style={styles.texty}>hellaaooo first</Text>
            <Button style={styles.buttonShape} title="Click" onPress={SecondPageGo} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    texty: {
        fontsize: 52,
        fonweight: 'bold',
        color: 'white',
    },
    buttonShape: {
        padding: 10,
        margin: 40,
        borderRadius: 20,
    },
});

export  default First;