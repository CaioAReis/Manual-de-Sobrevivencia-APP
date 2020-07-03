import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';

export default function HeaderCustomBack({ navigation, title }) {
    return(
        <View style={styles.customHeaderBack}>

            <Icon.Button name='back' size={30} color={'#FFF'}
                backgroundColor="#099e4f" onPress={() => navigation.goBack()}
                style={{paddingLeft: 20}}>
            </Icon.Button>

            <Text style={styles.customHeaderBackText}>{title}</Text>

            <View style={{width: 50}}></View>
        </View>
    );
}