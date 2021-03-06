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

import Shopping from './Shopping';
// module
import AdSlider from './home/AdSlider';
import Menu from './home/Menu';
import Rush from './home/Rush';
import Discount from './home/Discount';
import Foods from './home/Foods';
import MenuDetail from './home/foods/MenuDetail';
import DiscountDetail from './home/discount/DiscountDetail'

export default class Home extends Component {
    constructor() {
        super();
    }

    // 选中一行
    _selectShop(shopData) {
        console.log("_selectShop");
        if (Platform.OS === 'ios') {
            this.props.navigator.push({
                title: '限时抢购',
                component: Shopping,
                passProps: {shopData},
            });
        } else {
            // for android
        }
    }

    _selectRush() {
        console.log("_selectRush");
        if (Platform.OS === 'ios') {
            this.props.navigator.push({
                title: '限时抢购',
                component: MenuDetail,
                passProps: {},
            });
        } else {
            // for android
        }
    }

    _selectDiscount(url) {
        console.log("_selectDiscount = " + url);
        if (Platform.OS === 'ios') {
            this.props.navigator.push({
                title: '限时抢购',
                component: DiscountDetail,
                passProps: {url},
            });
        } else {
            // for android
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    <AdSlider />
                    <Separator />
                    <Menu />
                    <Separator />
                    <Rush childSelected={() => this._selectRush()}/>
                    <Separator />
                    <Discount childSelected={(url) => this._selectDiscount(url)} />
                    <Separator />
                    <Foods />
                </ScrollView>
                <Text>
                    Hello world.
                </Text>
            </View>
        );
    }
}

class Separator extends Component {

    render() {
        return(
            <View style={styles.separator}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    separator: {
        height: 4,
        backgroundColor: '#f2f2f2',
    },
});
