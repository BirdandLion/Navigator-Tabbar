'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
} from 'react-native';

// 获取屏幕尺寸
import Dimensions from 'Dimensions';

// 解构屏幕尺寸
let { width, height, scale } = Dimensions.get('window');

let itemHeight = 100;
let picFormat = '_750x234xzq75.jpg';

export default class AdSlider extends Component {
    constructor() {
        super();

        // 这是初始化state的格式
        this.state = {
            currentX: 0,
            activePage: 0,
            dataSource: [],
        };
    }

    // 类的静态变量
    static defaultProps = {
        width: width,
        indicatorColor: '#ffffff',
        inactiveIndicatorColor: '#ffffff',
        timer: 5000,
        api: 'http://ald.taobao.com/recommend.htm?appId=lb-tms-1261576-40550',
    };
    static propTypes = {
        width: React.PropTypes.number.isRequired,
        indicatorColor: React.PropTypes.string.isRequired,
        inactiveIndicatorColor: React.PropTypes.string.isRequired,
        timer: React.PropTypes.number.isRequired,
        api: React.PropTypes.string.isRequired,
    };

    // 请求数据
    fetchData() {
        var weakSelf = this;
        fetch(weakSelf.props.api)
            .then((response) => response.json())
            .then((responseData) => {
                console.log("OK");
                weakSelf.setState({
                    dataSource: responseData.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
            .done(() => {
                weakSelf.start();
            })
    }

    // 处理scrollView滚动
    start() {
        let scrollView = this.refs.scrollView;
        let length = this.state.dataSource.length;

        this.timer = setTimeout(() => {
            let activePage = 0;
            if ((this.state.activePage + 1) >= length) {
                activePage = 0;
            } else {
                activePage = this.state.activePage + 1;
            }

            let currentX = this.props.width * activePage;
            scrollView.scrollResponderScrollTo({
                x: currentX,
                y: 0,
                animated: true,
            });

            this.setState({
                currentX: currentX,
                activePage: activePage,
            });
        }, this.state.timer);
    }

    componentDidMount() {
        this.fetchData();
    }

    // 开始滚动时清楚timer
    _onScrollBegin(event) {
        this.timer && clearTimeout(this.timer);
    }

    // 滚动结束
    _onScrollEnd() {

    }

    // 获取图片
    loadImage(url) {
        if (url.search('https:') === -1) {
            return ('https:' + url);
        } else {
            return (url);
        }
    }

    // 渲染单张图片
    renderItems(data) {
        var weakSelf = this;
        return data.map((item, i) => {
            var imgURL = weakSelf.loadImage(item.img);
            return (
                <Image key={i} style={{width: width, height: itemHeight}} source={{uri: imgURL + picFormat}}/>
            );
        });
    }

    renderPageIndicator() {
        var indicators = [];
        var style;

        for (var i = 0; i < this.state.dataSource.length; i++) {
            style = (i===this.state.activePage) ? {color: this.props.indicatorColor, opacity: 1} : {color: this.props.inactiveIndicatorColor, opacity: 0.3};
            indicators.push(
                <Text key={i} style={[style, {fontSize: 32}]}>
                    &bull;
                </Text>
            );
        }

        return (
            <View style={styles.pageIndicator}>
                {indicators}
            </View>
        );
    }

    onAnimatinoEnd(event) {
        var activePage = event.nativeEvent.contentOffset.x / this.props.width;
        this.setState({
            currentX: event.nativeEvent.contentOffset.x,
            activePage: activePage,
        });
    }

    render() {
        var data = this.state.dataSource;

        return (
            <View style={styles.container}>
                <ScrollView
                    ref='scrollView'
                    contentContainerStyle={styles.container}
                    automaticallyAdjustContentInsets={false}
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={this.onAnimatinoEnd.bind(this)}>
                    {this.renderItems(data)}
                </ScrollView>
                {this.renderPageIndicator()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1, 无法显示
        height: itemHeight,
    },

    pageIndicator: {
        position: 'absolute',
        backgroundColor: 'transparent',
        left: 12,
        bottom: -10,
        flexDirection: 'row',
    },
});
