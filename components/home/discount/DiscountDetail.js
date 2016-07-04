'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    WebView,
} from 'react-native';

let gHeader = '#3b5998';
let gBgWash = 'rgba(255, 255, 255, 0.8)';
let gDisableWash = 'rgba(255, 255, 255, 0.25)';
let gWebviewRef = 'webview';
let gDefaultURL = '?ci=1&f=iphone&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-07-02-16-25124&utm_campaign=AgroupBgroupFab_chunceshishuju__a__a___b1junglehomepagecatesort__b__leftflow___ab_gxhceshi__nostrategy__leftflow___ab_gxhceshi0202__b__a___ab_pindaochangsha__a__leftflow___ab_xinkeceshi__b__leftflow___ab_gxtest__gd__leftflow___ab_waimaiwending__a__a___ab_gxh_82__nostrategy__leftflow___i_group_5_2_deallist_poitype__d__d___ab_b_food_57_purepoilist_extinfo__a__a___ab_pindaoshenyang__a__leftflow___ab_pindaoquxincelue0630__b__b1___a20141120nanning__m1__leftflow___ab_i_group_5_3_poidetaildeallist__a__b___ab_waimaizhanshi__b__b1___ab_i_group_5_5_onsite__b__b___ab_i_group_5_6_searchkuang__a__leftflowGhomepage_topic2_7921&utm_content=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&utm_medium=iphone&utm_source=AppStore&utm_term=5.7&uuid=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&version_name=5.7';

export default class DiscountDetail extends Component {
    constructor() {
        super();

        this.state = {
            url: gDefaultURL,
            status: 'No Page Loaded',
            backButtonEnabled: false,
            forwardButtonEnabled: false,
            loading: true,
        };
    }

    // componentDidMount() {
    //     let mDefaultURL = this.props.url + gDefaultURL;
    //     this.setState({
    //         url: mDefaultURL,
    //         status: 'No Page Loaded',
    //         backgroundColor: false,
    //         forwardButtonEnabled: false,
    //         loading: true,
    //     });
    // }

    render() {
        console.log(this.props.url + gDefaultURL);
        return (
            <View style={styles.container}>
                <WebView
                    ref={gWebviewRef}
                    automaticallyAdjustContentInsets={true}
                    style={styles.webview}
                    source={{uri: this.props.url + gDefaultURL}}
                    startInLoadingState={true}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: gHeader,
    },

    addressbarrow: {
        flexDirection: 'row',
        padding: 8,
    },

    webview: {
        flex: 1,
        backgroundColor: gBgWash,
    },

    addressbartextinput: {
        flex: 1,
        height: 24,
        fontSize: 14,
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 10,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: 'transparent',
        backgroundColor: gBgWash,
    },

    navbutton: {
        width: 20,
        padding: 3,
        marginRight: 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        borderColor: 'transparent',
        backgroundColor: gBgWash,
    },

    disablebutton: {
        width: 20,
        padding: 3,
        marginRight: 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        borderColor: 'transparent',
        backgroundColor: gDisableWash,
    },

    gobutton: {
        height: 24,
        padding: 3,
        marginLeft: 8,
        alignItems: 'center',
        alignSelf: 'stretch',
        borderRadius: 3,
        borderColor: 'transparent',
        backgroundColor: gBgWash,
    },

    statusbar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 5,
        height: 22,
    },

    statusbartext: {
        fontSize: 13,
        color: 'white',
    },

    spinner: {
        width: 20,
        marginRight: 6,
    },
});
