import React from 'react';
import { View, Linking } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Avatar,
         Title,
         Drawer,
         Text,
         TouchableRipple,
         Switch
} from 'react-native-paper';

import Logo from '../../assets/logo.png';

import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

export default function DrawerContent(props) {

    const [idDarkTheme, setIsDarkTheme] = React.useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!setIsDarkTheme);
    }

    return(
        <View style={{flex:1, backgroundColor: "#099e4f", borderTopWidth: 1, borderColor: '#046b2f'}}>
            <DrawerContentScrollView {...props} >
                <View style={styles.drawerContent}>
                    <View style={styles.infoSection}>
                        <View style={{flexDirection: 'row', marginTop: 15, marginBottom: 10, paddingLeft: 2}} >
                            <Avatar.Image source={Logo} size={75} style={{backgroundColor:"#099e4f"}} />
                            <View style={{marginLeft: 5, flexDirection: 'column'}} >
                                <View style={{flexDirection: 'column'}}>
                                    <Title style={styles.titleC}>Manual de</Title>
                                    <Title style={styles.title}>Sobrevivência</Title>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <Drawer.Section style={styles.drawerSection} >

                    <DrawerItemList {...props} />

                    <DrawerItem 
                        icon={() => (
                            <Icon name='github'
                            color={'#FFF'}
                            size={27}
                            />
                        )}
                        labelStyle={{fontSize: 20, fontWeight: 'bold', color: '#FFF'}}
                        inactiveTintColor='#c9c5c1'
                        label="GitHub"
                        onPress={() => Linking.openURL('https://github.com/CaioAReis/MDS-APP')}
                    />

                    <DrawerItem 
                        icon={() => (
                            <Icon name='instagram'
                            color={'#FFF'}
                            size={27}
                            />
                        )}
                        labelStyle={{fontSize: 20, fontWeight: 'bold', color: '#FFF'}}
                        inactiveTintColor='#c9c5c1'
                        label="Instagram"
                        onPress={() => Linking.openURL('https://www.instagram.com/ifslagarto/')}
                    />

                    <DrawerItem 
                        icon={() => (
                            <Icon name='facebook-square'
                            color={'#FFF'}
                            size={27}
                            />
                        )}
                        
                        labelStyle={{fontSize: 20, fontWeight: 'bold', color: '#FFF'}}
                        inactiveTintColor='#c9c5c1'
                        label="Facebook"
                        onPress={() => Linking.openURL('https://pt-br.facebook.com/institutofederaldesergipe/')}
                    />

                    <DrawerItem 
                        icon={() => (
                            <Icon name='iconfontdesktop'
                            color={'#FFF'}
                            size={27}
                            />
                        )}
                        labelStyle={{fontSize: 20, fontWeight: 'bold', color: '#FFF'}}
                        inactiveTintColor='#c9c5c1'
                        label="Site"
                        onPress={() => Linking.openURL('https://alessonc.github.io/Manual-de-Sobrevivencia/')}
                    />
                </Drawer.Section>
                <Drawer.Section >
                    <TouchableRipple onPress={() => {toggleTheme()}}>
                        <View style={styles.preference}>
                            <Text>Tema escuro</Text>
                            <View pointerEvents="none">
                                <Switch />
                            </View>
                        </View>
                    </TouchableRipple>
                </Drawer.Section>
            </DrawerContentScrollView>
        </View>
    );
}