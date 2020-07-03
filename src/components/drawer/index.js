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

import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

export default function DrawerContent(props) {

    const [idDarkTheme, setIsDarkTheme] = React.useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!setIsDarkTheme);
    }

    return(
        <View style={{flex:1, backgroundColor: "#099e47"}}>
            <DrawerContentScrollView {...props} >
                <View style={styles.drawerContent}>
                    <View style={styles.infoSection}>
                        <View style={{flexDirection: 'row', marginTop: 15, marginBottom: 10, paddingLeft: 5}} >
                            <Avatar.Image 
                                source={{
                                    
                                }}
                                size={85}
                            />
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
                        icon={({color}) => (
                            <Icon name='github'
                            color={color}
                            size={27}
                            />
                        )}
                        labelStyle={{fontSize: 20, fontWeight: 'bold'}}
                        inactiveTintColor='#c9c5c1'
                        label="GitHub"
                        onPress={() => Linking.openURL('https://github.com/CaioAReis/MDS-APP')}
                    />

                    <DrawerItem 
                        icon={({color}) => (
                            <Icon name='instagram'
                            color={color}
                            size={27}
                            />
                        )}
                        labelStyle={{fontSize: 20, fontWeight: 'bold'}}
                        inactiveTintColor='#c9c5c1'
                        label="Instagram"
                        onPress={() => Linking.openURL('https://www.instagram.com/ifslagarto/')}
                    />

                    <DrawerItem 
                        icon={({color}) => (
                            <Icon name='facebook-square'
                            color={color}
                            size={27}
                            />
                        )}
                        
                        labelStyle={{fontSize: 20, fontWeight: 'bold'}}
                        inactiveTintColor='#c9c5c1'
                        label="Facebook"
                        onPress={() => Linking.openURL('https://pt-br.facebook.com/institutofederaldesergipe/')}
                    />

                    <DrawerItem 
                        icon={({color}) => (
                            <Icon name='iconfontdesktop'
                            color={color}
                            size={27}
                            />
                        )}
                        labelStyle={{fontSize: 20, fontWeight: 'bold'}}
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