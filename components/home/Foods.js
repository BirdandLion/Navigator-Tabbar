import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Platform,
    ListView,
} from 'react-native';

import RecommandCell from './foods/RecommandCell';
import Detail from './foods/Detail';

let commendURL = 'http://api.meituan.com/group/v1/recommend/homepage/city/1?__skck=40aaaf01c2fc4801b9c059efcd7aa146&__skcy=mrUZYo7999nH8WgTicdfzaGjaSQ=&__skno=51156DC4-B59A-4108-8812-AD05BF227A47&__skts=1434530933.303717&__skua=bd6b6e8eadfad15571a15c3b9ef9199a&__vhost=api.mobile.meituan.com&ci=1&client=iphone&limit=40&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-06-17-14-50363&offset=0&position=39.982223,116.310502&userId=10086&userid=10086&utm_campaign=AgroupBgroupD100Fab_chunceshishuju__a__a___b1junglehomepagecatesort__b__leftflow___ab_gxhceshi__nostrategy__leftflow___ab_gxhceshi0202__b__a___ab_pindaochangsha__a__leftflow___ab_xinkeceshi__b__leftflow___ab_gxtest__gd__leftflow___ab_gxh_82__nostrategy__leftflow___ab_pindaoshenyang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_b_food_57_purepoilist_extinfo__a__a___ab_trip_yidizhoubianyou__b__leftflow___ab_i_group_5_3_poidetaildeallist__a__b___ab_waimaizhanshi__b__b1___a20141120nanning__m1__leftflow___ab_pind';

let resultCache = {
    shopData: {},
};

let loading = {};

export default class Foods extends Component {
    constructor() {
        super();

        this.state = {
            isLoading: false,
            isLoadingFail: false,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            filter: '',
            queryNumber: 0,
        };
    }

    componentDidMount() {
        this.getCommandData();
    }

    getCommandData() {
        // 加载数据
        resultCache.shopData = null;
        this.setState({
            isLoading: true,
            isLoadingFail: false,
        });

        fetch(commendURL)
            .then((response) => response.json())
            .catch((error) => {
                resultCache.shopData = undefined;
                this.setState({
                    dataSource: this.getDataSource([]),
                    isLoading: false,
                });
            })
            .then((responseData) => {
                resultCache.shopData = responseData.data;
                this.setState({
                    isLoading: false,
                    dataSource: this.getDataSource(responseData.data),
                });
            })
            .done();
    }

    getDataSource(data) {
        return this.state.dataSource.cloneWithRows(data);
    }

    // 选中一行
    selectShop(shopData) {
        if (Platform.OS === 'ios') {
            this.props.navigator.push({
                title: '限时抢购',
                component: Detail,
                passProps: {shopData},
            });
        } else {
            // Android做对应处理
        }
    }

    renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
        let style = styles.rowSeparator;
        if (adjacentRowHighlighted) {
            style = [style, styles.rowSeparatorHide];
        }

        return (
            <View key={`${sectionID} - ${rowID}`} style={style}>
            </View>
        )
    }

    _onSelect() {

    }

    renderRow(shopData, sectionID, rowID, highlightRow) {
        return (
            <RecommandCell key={shopData.id}

                onHighlight={() => highlightRow(sectionID, rowID)}
                onUnhighlight={() => highlightRow(null, null)}
                shopData={shopData} />
        );
    }

    render() {
        let content = this.state.dataSource.getRowCount === 0 ?
            <NoCommand isLoading={this.state.isLoading}/> :
            <ListView
                ref="listview"
                renderSeparator={this.renderSeparator}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}

                automaticallyAdjustContentInsets={true}
                keyboardDismissMode="on-drag"
                keyboardShouldPersistTaps={true}
                showsVerticalScrollIndicator={false}/>;

        return (
            <View style={styles.container}>
                <View style={styles.separator}>
                </View>

                {content}
            </View>
        );
    }
}

class NoCommand extends Component {
    constructor() {
        super();
    }

    render() {
        let text = '';
        if (!this.props.isLoading) {
            text = 'No recommend shop';
        };

        return (
            <View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5fcff',
    },

    centerText: {
        alignItems: 'center',
    },

    separator: {
        height: 1,
        backgroundColor: '#eeeeee',
    },

    rowSeparator: {
        height: 1,
        marginLeft: 4,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },

    rowSeparatorHide: {
        opacity: 0.0,
    },

    noCommandText: {
        marginTop: 80,
        color: '#888888',
    },
});
