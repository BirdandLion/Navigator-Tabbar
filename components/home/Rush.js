import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

let rush_url = 'http://api.meituan.com/group/v1/deal/activity/1?__skck=40aaaf01c2fc4801b9c059efcd7aa146&__skcy=NF9S7jqv3TVBAoEURoapWJ5VBdQ%3D&__skno=FB6346F3-98FF-4B26-9C36-DC9022236CC3&__skts=1434530933.316028&__skua=bd6b6e8eadfad15571a15c3b9ef9199a&__vhost=api.mobile.meituan.com&ci=1&client=iphone&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-06-17-14-50363&ptId=iphone_5.7&userid=10086&utm_campaign=AgroupBgroupD100Fab_chunceshishuju__a__a___b1junglehomepagecatesort__b__leftflow___ab_gxhceshi__nostrategy__leftflow___ab_gxhceshi0202__b__a___ab_pindaochangsha__a__leftflow___ab_xinkeceshi__b__leftflow___ab_gxtest__gd__leftflow___ab_gxh_82__nostrategy__leftflow___ab_pindaoshenyang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_b_food_57_purepoilist_extinfo__a__a___ab_trip_yidizhoubianyou__b__leftflow___ab_i_group_5_3_poidetaildeallist__a__b___ab_waimaizhanshi__b__b1___a20141120nanning__m1__leftflow___ab_pindaoquxincelue__a__leftflow___ab_i_group_5_5_onsite__b__b___ab_i_group_5_6_searchkuang__a__leftflow&utm_content=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&utm_medium=iphone&utm_source=AppStore&utm_term=5.7&uuid=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&version_name=5.7';

let resultCache = {
    rushData: {},
};

export default class Rush extends Component {
    constructor() {
        super();

        this.state = {
            isLoading: false,
            dataSource: null,
        };
    }

    componentDidMount() {
        this.getRushData();
    }

    // 获取数据
    getRushData() {
        resultCache.rushData = null,
        this.setState({
            isLoading: true,
            dataSource: null,
        });

        fetch(rush_url)
            .then((response) => response.json())
            .then((responseData) => {
                if (responseData.data) {
                    resultCache.rushData = responseData.data.deals;
                    this.setState({
                        isLoading: false,
                        dataSource: resultCache.rushData,
                    });
                }
            })
            .catch((error) => {
                resultCache.rushData = undefined;
                this.setState({
                    isLoading: false,
                });
            })
            .done();
    }

    loadImage(url) {
        if (url.search('w.h') === -1) {
            return (url);
        } else {
            url = url.replace('w.h', '200.120');
            return (rul);
        }
    }

    renderItems(data) {
        if (data) {
            let weakSelf = this;
            return data.map((item, i) => {
                let imgURL = weakSelf.loadImage(item.mdcLogoUrl);
                return (
                    <TouchableOpacity  key={i}  style={styles.boxtd} onPress={this.props.childSelected}>
                        <View>
                            <Image source={{uri: imgURL}} style={styles.cardimg}/>
                            <Text style={styles.cardtext}>
                                {item.price} 元
                            </Text>
                        </View>
                    </TouchableOpacity>
                );
            });
        } else {
            return (
                <Text>
                    吃肉都不开心的话，还不如吃酸菜。
                </Text>
            );
        }
    }

    render() {
        if (this.state.dataSource === null) {
            return (
                <View>
                    <Text>
                        空数据
                    </Text>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <Text style={styles.titleicon}>
                        名店抢购
                    </Text>
                    <View style={styles.boxtr}>
                        {this.renderItems(this.state.dataSource)}
                    </View>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        height: 116,
        backgroundColor: '#fff',
    },

    boxtr: {
        flexDirection: 'row',
        justifyContent: 'center',
        // 可以优化
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 5,
        paddingRight: 5,
    },

    boxtd: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 3,
    },

    cardimg: {
        width: 80,
        height: 40,
    },

    cardtext: {
        color: '#000',
        fontSize: 14,
        marginTop: 10,
        alignSelf: 'center',
    },

    titleicon: {
        width: 78,
        color: '#ff9900',
        fontSize: 14,
        paddingLeft: 10,
        paddingTop: 5,
    },
});
