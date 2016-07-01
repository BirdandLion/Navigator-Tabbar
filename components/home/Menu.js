import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

let cardData = [
    {
        img: 'icon_homepage_entertainmentCategory',
        text: '美食',
        link: 'http://3c.m.tmall.com',
    },
    {
        img: 'icon_homepage_foottreatCategory',
        text: '电影',
        link: 'http://3c.m.tmall.com',
    },
    {
        img: 'icon_homepage_hotelCategory',
        text: '酒店',
        link: 'http://3c.m.tmall.com',
    },
    {
        img: 'icon_homepage_KTVCategory',
        text: 'KTV',
        link: 'http://3c.m.tmall.com',
    },
];

export default class Menu extends Component {
    constructor() {
        super();
    }

    _onPressButton(index) {
        console.log(index);
        console.log("OK");
    }

    renderItems(data) {
        return data.map((item, i) => {
            return (
                <TouchableOpacity style={styles.boxtd} key={`${i}` + 'menu'} onPress={() => {this._onPressButton(i)}}>
                    <View >
                        <Image source={{uri: item.img}} style={styles.cardimg}/>
                        <Text style={styles.cardtext}>
                            {item.text}
                        </Text>
                    </View>
                </TouchableOpacity>
            );
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.boxtr}>
                    {this.renderItems(cardData)}
                </View>
                <View style={styles.boxtr}>
                    {this.renderItems(cardData)}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 188,
        backgroundColor: '#fff',
    },

    boxtr: {
        flexDirection: 'row',
        justifyContent: 'center',
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
        width: 40,
        height: 40,
    },

    cardtext: {
        color: '#000',
        fontSize: 14,
        marginTop: 10,
        alignSelf: 'center',
    },
});
