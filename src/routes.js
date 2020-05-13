import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from './pages/home';

export default function Routes() {
    return (
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: '#39e676',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }} initialRouteName="Home">
                <AppStack.Screen name="Home" component={Home} />
            </AppStack.Navigator>

        </NavigationContainer>
    );
}