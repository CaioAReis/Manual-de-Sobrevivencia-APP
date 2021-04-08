import React, { useState } from 'react';
import { View, Text, Animated } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';

export default function HeaderCustom({ navigation, title }) {

    const alt = new Animated.Value(58);
    let key = false;

    return(
    <Animated.View style={{overflow: 'hidden',height: alt}}>    
        <View style={styles.customHeader}>

            <Icon.Button name='bars' size={30} color={'#FFF'}
                backgroundColor="#099e4f" onPress={() => navigation.openDrawer()}
                style={{paddingLeft: 20}}>
            </Icon.Button>

            <Text style={styles.customHeaderText}>{title}</Text>

            <Icon.Button name='search1' size={27} color={'#FFF'}
                backgroundColor="#099e4f" onPress={() => {
                    key = !key;
                    if (key) Animated.timing(alt,{toValue: 127, duration: 200 }).start();
                    else Animated.timing(alt,{toValue: 58, duration: 200 }).start();}}
                style={{}}>
            </Icon.Button>
        </View>

        <View style={{width: '100%', height: 70}}>
            <SearchBar 
                placeholder="Pesquisa..."
                lightTheme='true'
                showLoading='true'
            />
        </View>
    </Animated.View>
    );
}