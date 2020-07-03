import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/AntDesign';

import DrawerContent from './components/drawer';
import HomeScreen from './pages/home';
import SobreScreen from './pages/sobre';
import UsScreen from './pages/somos';

const Drawer = createDrawerNavigator();

export default function Routes() {
    return (
        <NavigationContainer theme={DarkTheme} >
            <Drawer.Navigator
                initialRouteName="Inicio" 
                drawerContentOptions={{
                    activeTintColor: '#FFF',
                    activeBackgroundColor: '#099e4f',
                    inactiveTintColor: '#c9c5c1',
                    labelStyle: {fontSize: 20, fontWeight: 'bold'}
                }} 
                drawerContent={props => <DrawerContent {...props}/>}>
                    <Drawer.Screen name="Inicio" component={HomeScreen} options={{
                        drawerIcon: ({color}) => (<Icon name='home' size={30} color={color} />)
                    }} />
                    <Drawer.Screen name="Sobre" component={SobreScreen} options={{
                        drawerIcon: ({color}) => (<Icon name='book' size={30} color={color} />)
                    }}/>
                    <Drawer.Screen name="Quem somos" component={UsScreen} options={{
                        drawerIcon: ({color}) => (<Icon name='team' size={30} color={color} />)
                    }}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}