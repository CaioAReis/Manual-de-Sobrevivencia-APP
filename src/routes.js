import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';

import Home from './pages/home';

const HomeStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387',
            // alignSelf: 'flex-end'
            // backgroundColor: '#009387'
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
            fontSize: 22,
            fontWeight: 'bold',
            alignSelf: 'center',
            marginRight: 55,
        }
    }} initialRouteName="Home">
        <HomeStack.Screen name="Home" component={Home} options={{
            headerLeft: () => (
                <Icon.Button name='md-menu' size={35} color={'#FFF'}
                backgroundColor="#009387" onPress={() => navigation.openDrawer()}
                style={{paddingLeft: 20}}></Icon.Button>
            )
        }} />
    </HomeStack.Navigator>
);


export default function Routes() {
    return (
        <NavigationContainer>

            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeStackScreen} />
            </Drawer.Navigator>

        </NavigationContainer>
    );
}