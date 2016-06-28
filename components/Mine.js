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

class Mine extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>
                    Mine
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

// 导出模块
module.exports = Mine;
