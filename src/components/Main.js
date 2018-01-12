/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, TextInput, TouchableOpacity
} from 'react-native';

import getTemp from '../api/getTemp';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: '',
        }
    }

    getTempByCityName() {
        getTemp(this.state.cityName)
            .then(temp => console.log(temp))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.message} >
                    Ha noi hien tai la 30oC
                </Text>
                <TextInput
                    style={styles.TextInput}
                    value={this.state.cityName}
                    onChangeText={Text => this.setState({
                        cityName: Text
                    })}
                />
                <TouchableOpacity style={styles.button} onPress={this.getTempByCityName.bind(this)} >
                    <Text style={styles.buttonText}> lay nhiet do </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

        backgroundColor: 'lightblue',
        alignItems: 'center'
    },
    message: {
        color: '#fff',
        fontSize: 30
    },
    button: {
        backgroundColor: 'gray',
        padding: 10,
        margin: 30
    },
    buttonText: {
        color: '#fff'
    },
    TextInput: {
        margin: 10,
        backgroundColor: '#fff',
        width: 200,
        height: 50,
        color: 'red'
    }

});
