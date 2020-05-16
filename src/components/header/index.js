import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const StackTes = ({navigation}) => (navigation.dispatch(DrawerActions.openDrawer()));

export default function Header(props, {navigation}) {

        return(
            <View style={styles.header}>

                <View style={{paddingLeft: 20}}>
                    <Icon.Button name='md-menu' size={30} color={'#FFF'}
                    backgroundColor='#099e4f' onPress={() => navigation.openDrawer()}/>
                </View>

                <View style={{alignItems: 'center'}}>
                    <Text style={styles.title}> {props.name} </Text>
                </View>

                <View style={{paddingRight: 15}}>
                    <Icon.Button name="md-search" size={30} color={'#FFF'} backgroundColor='#099e4f'
                    onPress={() => {alert('Button clicked')}}/>
                </View>
    
            </View>
        );
}