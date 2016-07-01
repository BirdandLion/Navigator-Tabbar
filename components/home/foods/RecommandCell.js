import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Platform,
    PixelRatio,
    TouchableOpacity,
    Text,
    Image,
} from 'react-native';

import getImageSource from './ImageSource';

export default class RecommandCell extends Component {
    constructor() {
        super();
    }

    render() {
        let price = this.props.shopData.price;

        return (
            <TouchableOpacity
                onPress={this.props.onSelect}
                onShowUnderlay={this.props.onHighlight}
                onHideUnderlay={this.props.onUnhighlight}>
                <View style={styles.row}>
                    <Image source={getImageSource(this.props.shopData, 'imgurl')}
                    style={styles.cellimage}/>

                    <View style={styles.container}>
                        <Text style={styles.shoptitle} numberOfLines={1}>
                            {this.props.shopData.brandname}
                        </Text>
                        <Text style={styles.movieyear} numberOfLines={2}>
                            {this.props.shopData.title}
                        </Text>
                        <Text style={styles.pricecolor}>
                            {price} 元
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    shoptitle: {
        flex: 1,
        fontSize: 16,
        fontWeight: '500',
        margin: 2,
        height: 30,
    },

    movieyear: {
        color: '#999999',
        fontSize: 12,
        marginBottom: 5,
    },

    row: {
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 5,
    },

    cellimage: {
        height: 93,
        marginRight: 10,
        width: 93,
        backgroundColor: '#dddddd',
    },

    cellborder: {
        height: 1 / PixelRatio.get(),
        marginLeft: 4,
    },

    pricecolor: {
        color: '#3eb433',
    },
});
