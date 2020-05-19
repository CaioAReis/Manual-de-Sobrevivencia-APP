import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import DrawerContent from './components/drawer';

import HomeScreen from './pages/home';
import AboutScreen from './pages/sobre';
import UsScreen from './pages/somos';

const HomeStack = createStackNavigator();
const AboutStack = createStackNavigator();
const UsStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#099e4f',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            alignSelf: 'center',
        }
    }} initialRouteName="Inicio">
        <HomeStack.Screen name="Inicio" component={HomeScreen} options={{
            headerLeft: () => (
                <Icon.Button name='md-menu' size={30} color={'#FFF'}
                backgroundColor="#099e4f" onPress={() => navigation.openDrawer()}
                style={{paddingLeft: 20}}></Icon.Button>
            ),
            headerRight: () => (
                <Icon.Button name='md-search' size={27} color={'#FFF'}
                backgroundColor="#099e4f" onPress={() => {alert('PESQUISA')}}
                style={{paddingLeft: 20}}></Icon.Button>
            )
        }} />
     </HomeStack.Navigator>
 );

const SobreStackScreen = ({navigation}) => (
    <AboutStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#099e4f',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            alignSelf: 'center',
        }
    }}>
        <AboutStack.Screen name="Sobre" component={AboutScreen} options={{
            headerLeft: () => (
                <Icon.Button name='md-menu' size={30} color={'#FFF'}
                backgroundColor="#099e4f" onPress={() => navigation.openDrawer()}
                style={{paddingLeft: 20}}></Icon.Button>
            ),
            headerRight: () => (
                <Icon.Button name='md-search' size={27} color={'#FFF'}
                backgroundColor="#099e4f" onPress={() => {alert('PESQUISA')}}
                style={{paddingLeft: 20}}></Icon.Button>
            )
        }} />
    </AboutStack.Navigator>
);

const UsStackScreen = ({navigation}) => (
    <UsStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#099e4f',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            alignSelf: 'center',
        }
    }}>
        <UsStack.Screen name="Quem somos" component={UsScreen} options={{
            headerLeft: () => (
                <Icon.Button name='md-menu' size={30} color={'#FFF'}
                backgroundColor="#099e4f" onPress={() => navigation.openDrawer()}
                style={{paddingLeft: 20}}></Icon.Button>
            ),
            headerRight: () => (
                <Icon.Button name='md-search' size={27} color={'#FFF'}
                backgroundColor="#099e4f" onPress={() => {alert('PESQUISA')}}
                style={{paddingLeft: 20}}></Icon.Button>
            )
        }} />
    </UsStack.Navigator>
);

const Drawer = createDrawerNavigator();

export default function Routes() {
    return (
            <Drawer.Navigator
            initialRouteName="Inicio" drawerContent={props => <DrawerContent {...props}/> } 
            // drawerOptions={{ activeTintColor='red', activeBackgroundColor='blue' }} 
            >
                <Drawer.Screen name="Inicio" component={HomeStackScreen} />
                <Drawer.Screen name="Sobre" component={SobreStackScreen} />
                <Drawer.Screen name="Quem somos" component={UsStackScreen} />
            </Drawer.Navigator>
    );
}