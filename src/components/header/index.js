import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

export default class Header extends React.Component {

    render(){
        return(
            <View style={styles.header}>

                <View style={styles.menu}>
                    <Icon.Button name='md-menu' size={35} color={'#FFF'}
                    backgroundColor="#099e4f" onPress={() => navigation.openDrawer()}></Icon.Button>
                </View>

                <View style={{alignItems: 'center'}}>
                    <Text style={styles.title}>{this.props.name} TESTE TITLE</Text>
                </View>

                <View>
                    
                </View>
    
            </View>
        );
    }
    
}