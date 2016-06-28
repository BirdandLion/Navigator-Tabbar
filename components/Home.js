/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Platform,
} from 'react-native';

class Home extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>
                    Home
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

// 导出模块
module.exports = Home;
