import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
    const [name, setName] = useState('deep');
    const clickHandler = () => {
        setName('Chun lee')
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}><Text style={styles.boldText}>Header</Text></View>
            <Text>Open up App.js to start working on your app3!</Text>
            <View style={styles.body}><Text>My name is { name }</Text></View>
            <View style={styles.button}>
                <Button title="Update Me" onPress={clickHandler}/>
            </View>
            <TextInput style={styles.input} placeholder="eg. 90" onChangeText={(val) => setName(val)}/>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        backgroundColor: 'pink',
        padding: 20
    },
    boldText: {
        fontWeight: 'bold'
    },
    body: {
        backgroundColor: 'yellow'
    },
    button: {

    },
    input: {
        padding: 8,
        borderWidth: 2,
        borderColor: '#eeeeee',
        width: 200,
        margin: 10
    }
});
