import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

function Second (props) {


    const FirstGoBack = () => props.navigation.goBack();

    const mesaj = props.route.params.mesaj;

    return (
        <View style={styles.container}>
            <Text style={styles.texty}>pankooo second</Text>
            <Button style={styles.buttonShape} title="goBack" onPress={FirstGoBack} />
            <Text style={styles.texty}>incoming Message: {mesaj}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texty: {
        fontsize: 52,
        fonweight: 'bold',
        color: 'red',
    },
    buttonShape: {
        padding: 10,
        margin: 40,
        color: 'white',
        backgroundColor: 'white',
        borderRadius: 20,
    },
});


export default Second;