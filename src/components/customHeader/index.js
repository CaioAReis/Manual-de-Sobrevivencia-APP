import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';

export default function HeaderCustom({ navigation, title }) {
    return(
        <View style={styles.customHeader}>

            <Icon.Button name='bars' size={30} color={'#FFF'}
                backgroundColor="#099e4f" onPress={() => navigation.openDrawer()}
                style={{paddingLeft: 20}}>
            </Icon.Button>

            <Text style={styles.customHeaderText}>{title}</Text>

            <Icon.Button name='search1' size={27} color={'#FFF'}
                backgroundColor="#099e4f" onPress={() => {alert('PESQUISA')}}
                style={{paddingLeft: 20}}>
            </Icon.Button>
        </View>
    );
}