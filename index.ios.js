/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Image,
    TabBarIOS,
    NavigatorIOS,
} from 'react-native';

// 导入自定义组件
import Home from './components/Home';
import Shangjia from './components/Shangjia';
import Onsite from './components/Onsite';
import Mine from './components/Mine';
import Setting from './components/Setting'

class NavigatorTabbar extends Component {
    constructor() {
        super();

        this.state = {
            selectedTab: 'home',
        };
    }

    render() {
        return (
            <TabBarIOS>
                <TabBarIOS.Item
                    title = "首页"
                    icon = {require('image!icon_tabbar_homepage_selected')}
                    onPress={() => this._changeTab('home')}
                    selected={this.state.selectedTab === 'home'}>
                    <NavigatorIOS
                        ref="nav"
                        style={styles.container}
                        initialRoute={{
                            title: '首页',
                            component: Home,
                            rightButtonIcon: require('image!icon_tabbar_onsite'),
                            onRightButtonPress: () => {
                                this.refs.nav.navigator.push({
                                    title: "Music",
                                    component: Setting,
                                    leftButtonTitle: 'Back',
                                    onLeftButtonPress: () => {
                                        this.refs.nav.navigator.pop();
                                    }
                                })
                            }
                        }}/>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    title="商家"
                    icon={require('image!icon_tabbar_merchant_normal')}
                    onPress={() => this._changeTab('shangjia')}
                    selected={this.state.selectedTab === 'shangjia'}>
                    <NavigatorIOS
                        style={styles.container}
                        initialRoute={{
                            title: '商家',
                            component: Shangjia,
                        }}/>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    title="上门"
                    icon={require('image!icon_tabbar_onsite_selected')}
                    onPress={() => this._changeTab('onsite')}
                    selected={this.state.selectedTab === 'onsite'}>
                    <NavigatorIOS
                        style={styles.container}
                        initialRoute={{
                            title: '上门',
                            component: Onsite,
                        }}/>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    title="我的"
                    icon={require('image!icon_tabbar_mine')}
                    onPress={() => this._changeTab('mine')}
                    selected={this.state.selectedTab === 'mine'}>
                    <NavigatorIOS
                        style={styles.container}
                        initialRoute={{
                            title: '我的',
                            component: Mine,
                        }}/>
                </TabBarIOS.Item>

            </TabBarIOS>
        );
    }

    _changeTab(tabName) {
        this.setState({
            selectedTab: tabName,
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
    },
});

AppRegistry.registerComponent('NavigatorTabbar', () => NavigatorTabbar);
