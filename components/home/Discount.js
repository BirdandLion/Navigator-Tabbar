import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

let discountURL = 'http://api.meituan.com/group/v1/deal/topic/discount/city/1?ci=1&client=iphone&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-06-17-14-50363&userid=10086&utm_campaign=AgroupBgroupD100Fab_chunceshishuju__a__a___b1junglehomepagecatesort__b__leftflow___ab_gxhceshi__nostrategy__leftflow___ab_gxhceshi0202__b__a___ab_pindaochangsha__a__leftflow___ab_xinkeceshi__b__leftflow___ab_gxtest__gd__leftflow___ab_gxh_82__nostrategy__leftflow___ab_pindaoshenyang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_b_food_57_purepoilist_extinfo__a__a___ab_trip_yidizhoubianyou__b__leftflow___ab_i_group_5_3_poidetaildeallist__a__b___ab_waimaizhanshi__b__b1___a20141120nanning__m1__leftflow___ab_pindaoquxincelue__a__leftflow___ab_i_group_5_5_onsite__b__b___ab_i_group_5_6_searchkuang__a__leftflow&utm_content=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&utm_medium=iphone&utm_source=AppStore&utm_term=5.7&uuid=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&version_name=5.7';

let resultCache = {
    discountData: {}, // 商家列表数据
};

export default class Discount extends Component {
    constructor() {
        super();

        this.state = {
            isLoading: false,
            dataSource: null,
        };
    }

    componentDidMount() {
        this.loadDiscountData();
    }

    // 加载数据
    loadDiscountData() {
        resultCache.discountData = null;

        this.setState({
            isLoading: true,
            dataSource: null,
        });

        fetch(discountURL)
            .then((response) => response.json())
            .catch((error) => {
                resultCache.discountData = null;
                this.setState({
                    isLoading: false,
                    dataSource: null,
                });
            })
            .then((responseData) => {
                if (responseData.data) {
                    resultCache.discountData = responseData.data;
                    this.setState({
                        isLoading: false,
                        dataSource: resultCache.discountData,
                    });
                }
            })
            .done();
    }

    loadImage(url) {
        // return ('http://p0.meituan.net/200.120/deal/667c7aa92a0c04779e266bbfa7d77c64316233.jpg');
        if (url.search('w.h') === -1) {
            return (url);
        } else {
            url = url.replace('w.h', '200.120');
            return (url);
        }
    }

    _onPress(data) {
        // this.props.onSelect(data);
        console.log(data);
    }

    renderItems(data) {
        let weakSelf = this;
        let group = data.map((item, i) => {
            let imgURL = weakSelf.loadImage(item.imageurl);
            let webURL = item.share.url;

            return (
                <TouchableOpacity key={i} style={styles.touch} onPress={() => {
                    weakSelf._onPress(webURL)
                    }}>
                    <View style={styles.item}>
                        <View style={styles.title}>
                            <Text>
                                {item.maintitle}
                            </Text>
                            <Text>
                                {item.deputytitle}
                            </Text>
                        </View>
                        <Image style={styles.itemimg} source={{uri: imgURL}}/>
                    </View>
                </TouchableOpacity>
            );
        });

        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    {group.slice(0, 2)}
                </View>
                <View style={styles.row}>
                    {group.slice(0, 2)}
                </View>
            </View>
        );
    }

    render() {
        if (this.state.dataSource === null) {
            return (
                <Text>
                    吃肉都不开心的话，还不如吃酸菜。
                </Text>
            );
        } else {
            return (
                <View style={styles.container}>
                    {this.renderItems(this.state.dataSource)}
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        height: 144,
        backgroundColor: '#fff',
    },

    row: {
        flexDirection: 'row',
    },

    item: {
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: 'rgba(0, 0, 0, 0.1)',
        borderBottomWidth: 1,
        borderRightColor: 'rgba(0, 0, 0, 0.1)',
        borderRightWidth: 1,
    },

    title: {
        flex: 1,
        alignItems: 'center',
        marginTop: 10,
    },

    itemimg: {
        width: 50,
        height: 50,
        marginTop: 5,
    },

    touch: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
