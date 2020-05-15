import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';

import DrawerContent from './components/drawer';

import HomeScreen from './pages/home';
import AboutScreen from './pages/sobre';
import UsScreen from './pages/somos';
import GitScreen from './pages/github';

const HomeStack = createStackNavigator();
const AboutStack = createStackNavigator();
const UsStack = createStackNavigator();
const GitStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#099e4f',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
            fontSize: 22,
            fontWeight: 'bold',
            alignSelf: 'center',
            marginRight: 55,
        }
    }} initialRouteName="Home">
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
            headerLeft: () => (
                <Icon.Button name='md-menu' size={35} color={'#FFF'}
                backgroundColor="#099e4f" onPress={() => navigation.openDrawer()}
                style={{paddingLeft: 20}}></Icon.Button>
            )
        }} />
        <AboutStack.Screen name="AboutScreen" component={AboutScreen} options={{
             headerLeft: () => (
                 <Icon.Button name='md-menu' size={35} color={'#FFF'}
                 backgroundColor="#099e4f" onPress={() => navigation.openDrawer()}
                 style={{paddingLeft: 20}}></Icon.Button>
             )
         }} />
    </HomeStack.Navigator>
);

// const AboutStackScreen = ({navigation}) => (
//     <AboutStack.Navigator screenOptions={{
//         headerStyle: {
//             backgroundColor: '#099e4f',
//         },
//         headerTintColor: '#FFF',
//         headerTitleStyle: {
//             fontSize: 22,
//             fontWeight: 'bold',
//             alignSelf: 'center',
//             marginRight: 55,
//         }
//     }}>
//         <AboutStack.Screen name="AboutScreen" component={AboutScreen} options={{
//             headerLeft: () => (
//                 <Icon.Button name='md-menu' size={35} color={'#FFF'}
//                 backgroundColor="#099e4f" onPress={() => navigation.openDrawer()}
//                 style={{paddingLeft: 20}}></Icon.Button>
//             )
//         }} />
//     </AboutStack.Navigator>
// );

// const UsStackScreen = ({navigation}) => (
//     <UsStack.Navigator screenOptions={{
//         headerStyle: {
//             backgroundColor: '#099e4f',
//         },
//         headerTintColor: '#FFF',
//         headerTitleStyle: {
//             fontSize: 22,
//             fontWeight: 'bold',
//             alignSelf: 'center',
//             marginRight: 55,
//         }
//     }}>
//         <UsStack.Screen name="Us Are" component={UsScreen} options={{
//             headerLeft: () => (
//                 <Icon.Button name='md-menu' size={35} color={'#FFF'}
//                 backgroundColor="#099e4f" onPress={() => navigation.openDrawer()}
//                 style={{paddingLeft: 20}}></Icon.Button>
//             )
//         }} />
//     </UsStack.Navigator>
// );

// const GitStackScreen = ({navigation}) => (
//     <GitStack.Navigator screenOptions={{
//         headerStyle: {
//             backgroundColor: '#099e4f',
//         },
//         headerTintColor: '#FFF',
//         headerTitleStyle: {
//             fontSize: 22,
//             fontWeight: 'bold',
//             alignSelf: 'center',
//             marginRight: 55,
//         }
//     }}>
//         <GitStack.Screen name="GitHub" component={GitScreen} options={{
//             headerLeft: () => (
//                 <Icon.Button name='md-menu' size={35} color={'#FFF'}
//                 backgroundColor="#099e4f" onPress={() => navigation.openDrawer()}
//                 style={{paddingLeft: 20}}></Icon.Button>
//             )
//         }} />
//     </GitStack.Navigator>
// );

export default function Routes() {
    return (
        <NavigationContainer>

            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                <Drawer.Screen name="Home" component={HomeStackScreen} />
                {/* <Drawer.Screen name="About" component={AboutStackScreen} /> */}
                {/* <Drawer.Screen name="GitHub" component={GitStackScreen} /> */}
                {/* <Drawer.Screen name="Who us are" component={UsStackScreen} /> */}
            </Drawer.Navigator>

        </NavigationContainer>
    );
}