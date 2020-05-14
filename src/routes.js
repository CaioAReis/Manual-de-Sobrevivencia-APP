import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './pages/home';

const HomeStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#39e676',
            // backgroundColor: '#009387'
        },
        headerTintColor: '#2E2E2E',
        headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: "center",
        }
    }} initialRouteName="Home">
        <HomeStack.Screen name="Home" component={Home} />
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