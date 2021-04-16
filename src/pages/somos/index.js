import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Animated, Linking} from 'react-native';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';
import CustomHeader from '../../components/customHeader';

import alesson from '../../assets/alesson.png';
import caio from '../../assets/caio.png';
import catuxe from '../../assets/catuxe.png';
import francisco from '../../assets/francisco.png';

export default function QuemSomos({navigation}) {

    const alt = new Animated.Value(230);
    const alt1 = new Animated.Value(230);
    const alt2 = new Animated.Value(230);
    const alt3 = new Animated.Value(230);

    let key = false;
    let key1 = false;
    let key2 = false;
    let key3 = false;

    return(
    <>
        <CustomHeader title='Quem somos' navigation={navigation} />
        <ScrollView style={styles.container}>

            <TouchableOpacity style={{marginTop: 20}} activeOpacity={0.9} onPress={ () => { 
                key1 = !key1;
                if (key1) Animated.timing(alt1,{toValue: 440, duration: 350, useNativeDriver: false}).start();
                else Animated.timing(alt1,{toValue: 230, duration: 350, useNativeDriver: false }).start();}}>

                <Animated.View style={[{height: alt1}, styles.profileContainer]}>
                    <Avatar.Image source={alesson} size={170} style={styles.photo} />
                    <View style={styles.userTitle}>
                        <Text style={styles.textProfile}>Álesson Carlos</Text>
                    </View>

                    <View>
                        <Text style={styles.textInfo}>Estudande do CBSI do IFS Campus Lagarto;</Text>
                        <Text style={styles.textInfo}>Focado na área de segurança da informação e entusiasta de tecnologia.</Text>
                        <Text style={styles.textProfile}>Redes sociais:</Text>
                        <View style={styles.userContact}>
                            <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com/alesson.carlos.71")}>
                                <Icon name="facebook-square" size={45} backgroundColor="#222" color="#FFF" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Linking.openURL("https://www.instagram.com/alesson.carlos/")}>
                                <Icon name="instagram" size={45} backgroundColor="#222" color="#FFF" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Linking.openURL("https://github.com/AlessonC")}>
                                <Icon name="github" size={45} backgroundColor="#222" color="#FFF" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Animated.View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.9} onPress={ () => {
                key = !key;
                if (key) Animated.timing(alt,{toValue: 480, duration: 350, useNativeDriver: false}).start();
                else Animated.timing(alt,{toValue: 230, duration: 350, useNativeDriver: false}).start();}}>

                <Animated.View style={[{height: alt}, styles.profileContainer]}>
                    <Avatar.Image source={caio} size={170} style={styles.photo}/>
                    <View style={styles.userTitle}>
                        <Text style={styles.textProfile}>Caio Almeida</Text>
                    </View>

                    <View>
                        <Text style={styles.textInfo}>Atualmente estudande do CBSI no Instituto Federal de Sergipe(IFS) Campus Lagarto;</Text>
                        <Text style={styles.textInfo}>Interessado na área de desenvolvimento web e no desenvolvimento de aplicações mobile.  Apenas um fã de One Piece.</Text>
                        <Text style={styles.textProfile}>Redes sociais:</Text>
                        <View style={styles.userContact}>
                            <TouchableOpacity onPress={() => Linking.openURL("https://www.instagram.com/caio_areiss/")}>
                                <Icon name="instagram" size={45} backgroundColor="#222" color="#FFF" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Linking.openURL("https://github.com/CaioAReis")}>
                                <Icon name="github" size={45} backgroundColor="#222" color="#FFF" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Animated.View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.9} onPress={ () => {
                key2 = !key2;
                if (key2) Animated.timing(alt2,{toValue: 700, duration: 350, useNativeDriver: false}).start();    
                else Animated.timing(alt2,{toValue: 230, duration: 350, useNativeDriver: false}).start();}}>

                <Animated.View style={[{height: alt2}, styles.profileContainer]}>
                    <Avatar.Image source={catuxe} size={170} style={styles.photo} />
                    <View style={styles.userTitle}>
                        <Text style={styles.textProfile}>Catuxe Varjão</Text>
                    </View>
                    
                    <View>
                        <Text style={styles.textInfo}>Possui graduação em Ciência da Computação pela Universidade Federal de Sergipe (2008);</Text>
                        <Text style={styles.textInfo}>Mestrado em Ciência da Computação pela Universidade Federal de Campina Grande (2013);</Text>
                        <Text style={styles.textInfo}>Tem experiência na área de Ciência da Computação, com ênfase em Engenharia de Software;</Text>
                        <Text style={styles.textInfo}>Atuando principalmente nos seguintes temas: engenharia de software, programação de software, qualidade de software e gamificação.</Text>
                        <Text style={styles.textProfile}>Redes sociais:</Text>
                        <View style={styles.userContact}>
                            <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com/catuxe")}>
                                <Icon name="facebook-square" size={45} backgroundColor="#222" color="#FFF" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Linking.openURL("https://www.instagram.com/catuxe/")}>
                                <Icon name="instagram" size={45} backgroundColor="#222" color="#FFF" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Linking.openURL("https://github.com/catuxe")}>
                                <Icon name="github" size={45} backgroundColor="#222" color="#FFF" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Animated.View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.9} onPress={ () => {
                key3 = !key3;
                if (key3) Animated.timing(alt3,{toValue: 510, duration: 350, useNativeDriver: false}).start();
                else Animated.timing(alt3,{toValue: 230, duration: 350, useNativeDriver: false}).start();}}>

                <Animated.View style={[{height: alt3}, styles.profileContainer]}>
                    <Avatar.Image source={francisco} size={170} style={styles.photo}/>
                    <View style={styles.userTitle}>
                        <Text style={styles.textProfile}>Francisco Rodrigues</Text>
                    </View>                    
                    
                    <View>
                        <Text style={styles.textInfo}>Mestre em Sistemas e Computação com graduação em Sistemas de Informações;</Text>
                        <Text style={styles.textInfo}>Atualmente sou professor no Instituto Federal de Sergipe(IFS) pertencente ao curso de sistemas de informação no Campus Lagarto em Sergipe.</Text>
                        <Text style={styles.textProfile}>Redes sociais:</Text>
                        <View style={styles.userContact}>
                            <TouchableOpacity onPress={() => Linking.openURL("https://twitter.com/frchico")}>
                                <Icon name="twitter" size={45} backgroundColor="#222" color="#FFF" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Linking.openURL("https://github.com/frchico")}>
                                <Icon name="github" size={45} backgroundColor="#222" color="#FFF" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Animated.View>
            </TouchableOpacity>
        </ScrollView>
    </>
    );
}