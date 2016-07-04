import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    WebView,
    TouchableOpacity,
} from 'react-native';

let header = '#3b5998';
let bgWash = 'rgba(255, 255, 255, 0.8)';
let disableWash = 'rgba(255, 255, 255, 0.25)';
let webviewRef = 'webview';
let defaultURL = 'http://i.meituan.com/topic/mingdian?ci=1&f=iphone&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-07-02-16-25124&token=p19ukJltGhla4y5Jryb1jgCdKjsAAAAAsgAAADHFD3UYGxaY2FlFPQXQj2wCyCrhhn7VVB-KpG_U3-clHlvsLM8JRrnZK35y8UU3DQ&userid=10086&utm_campaign=AgroupBgroupD100Fab_chunceshishuju__a__a___b1junglehomepagecatesort__b__leftflow___ab_gxhceshi__nostrategy__leftflow___ab_gxhceshi0202__b__a___ab_pindaochangsha__a__leftflow___ab_xinkeceshi__b__leftflow___ab_gxtest__gd__leftflow___ab_waimaiwending__a__a___ab_gxh_82__nostrategy__leftflow___i_group_5_2_deallist_poitype__d__d___ab_b_food_57_purepoilist_extinfo__a__a___ab_pindaoshenyang__a__leftflow___ab_pindaoquxincelue0630__b__b1___a20141120nanning__m1__leftflow___ab_i_group_5_3_poidetaildeallist__a__b___ab_waimaizhanshi__b__b1___ab_i_group_5_5_onsite__b__b___ab_i_group_5_6_searchkuang__a__leftflowGhomepage_bargainmiddle_30311731&utm_content=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&utm_medium=iphone&utm_source=AppStore&utm_term=5.7&uuid=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&version_name=5.7&lat=39.982223&lng=116.310502';

export default class MenuDetail extends Component {
    constructor() {
        super();

        this.state = {
            url: defaultURL,
            status: 'No Page Loaded',
            backButtonEnabled: false,
            forwardButtonEnabled: false,
            loading: true,
        };
    }

    render() {
        console.log("MenuDetail = " + this.state.url);
        return (
            <View style={styles.container}>
                <WebView
                    ref={webviewRef}
                    automaticallyAdjustContentInsets={true}
                    style={styles.webview}
                    source={{uri: this.state.url}}
                    startInLoadingState={true}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: header,
    },

    addressbarrow: {
        flexDirection: 'row',
        padding: 8,
    },

    webview: {
        flex: 1,
        backgroundColor: bgWash,
    },

    addressbartextinput: {
        flex: 1,
        height: 24,
        fontSize: 14,
        paddingLeft: 10,
        paddingTop: 3,
        paddingBottom: 3,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: 'transparent',
        backgroundColor: bgWash,
    },

    navbutton: {
        width: 20,
        padding: 3,
        marginRight: 3,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'transparent',
        borderRadius: 3,
        backgroundColor: bgWash,
    },

    disablebutton: {
        width: 20,
        padding: 3,
        marginRight: 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        borderColor: 'transparent',
        backgroundColor: disableWash,
    },

    gobutton: {
        height: 24,
        padding: 3,
        marginLeft: 8,
        alignItems: 'center',
        alignSelf: 'stretch',
        borderRadius: 3,
        borderColor: 'transparent',
        backgroundColor: bgWash,
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
