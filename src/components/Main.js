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
import { connect } from 'react-redux';
//import { fetchError, fetchSuccess, startFetchData, fetchDataThunk } from '../redux/actionCreators';
// thay the bang lenh sau
import * as actionCreators from '../redux/actionCreators';



class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: '',
        }
    }

    getWeatherMessage() {
        const { error, isLoading, cityName, temp } = this.props;
        if (isLoading) return '..... is Loading';
        if (error) return 'Vui long thu lai';
        if (!cityName) return 'Nhap ten thanh pho cua ban';
        // return '${cityName} hien tai la ${temp} oC';
        return temp;

    }


    getTempByCityName() {
        const { cityName } = this.state;
        this.props.fetchDataThunk(cityName);

        // this.props.startFetchData();
        // getTemp(this.state.cityName)
        //     .then(temp => this.props.fetchSuccess(cityName, temp))
        //     .catch(err => this.props.fetchError());
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.message} >
                    {this.getWeatherMessage()}
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
        fontSize: 20
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

function mapStateToProps(state){
    return { cityName: state.cityName, temp: state.temp, error: state.error,
    isLoading: state.isLoading }
}
//export default connect(mapStateToProps, { startFetchData, fetchSuccess, fetchError, fetchDataThunk } )(Main)
export default connect(mapStateToProps, actionCreators )(Main);