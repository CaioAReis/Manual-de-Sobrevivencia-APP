import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Animated, Linking, Image } from 'react-native';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import * as  Animatable from 'react-native-animatable';

import styles from './styles';
import CustomHeader from '../../components/customHeader';

import alesson from '../../assets/alesson.png';
import caio from '../../assets/caio.png';
import catuxe from '../../assets/catuxe.png';
import francisco from '../../assets/francisco.png';

export default function QuemSomos({navigation}) {

    const viewInfo = useRef();
    const viewInfo1 = useRef();
    const viewInfo2 = useRef();
    const viewInfo3 = useRef();

    const [alt, setAlt] = useState(new Animated.Value(230));
    const [alt1, setAlt1] = useState(new Animated.Value(230));
    const [alt2, setAlt2] = useState(new Animated.Value(230));
    const [alt3, setAlt3] = useState(new Animated.Value(230));

    let key = false;
    let key1 = false;
    let key2 = false;
    let key3 = false;

    return(
<>
        <CustomHeader title='Quem somos' navigation={navigation} />
        <ScrollView style={styles.container} >

        <TouchableOpacity activeOpacity={0.9} onPress={ () => {
            key1 = !key1;
            if (key1) {
                Animated.timing(alt1,{toValue: 440, duration: 350 }).start(({ finished }) => {});
                viewInfo1.current.fadeIn();
            } else { 
                Animated.timing(alt1,{toValue: 230, duration: 350 }).start(({ finished }) => {});
                viewInfo1.current.fadeOut();
            }}}>
            <Animated.View style={[{height: alt1}, styles.profileContainer]}>

                <Avatar.Image source={alesson} size={170} style={{backgroundColor:"#099e4f", alignSelf: 'center'}} />

                <View style={{flexDirection: 'row', justifyContent: 'space-between' }}>
                    {/* <View style={{width: 50}}></View> */}
                    <Text></Text>
                    <Text style={styles.textProfile}>Aléson Carlos</Text>
                    {/* <Icon name={(iconState ? 'plus' : 'up')} size={25} color='#FFF'/> */}
                    <Text></Text>
                </View>

                <Animatable.View opacity={0} duration={400} useNativeDriver ref={viewInfo1}>

                    <Text style={styles.textInfo}>Estudande do CBSI do IFS Campus Lagarto;</Text>
                    <Text style={styles.textInfo}>Focado na área de segurança da informação e entusiasta de tecnologia.</Text>

                    <Text style={styles.textProfile}>Redes sociais:</Text>

                    <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingTop: 10 }}>
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

                    </Animatable.View>
                </Animated.View>
            </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.9} onPress={ () => {
            key = !key;
            if (key) {
                Animated.timing(alt,{toValue: 480, duration: 350 }).start(({ finished }) => {});
                viewInfo.current.fadeIn();
            } else { 
                Animated.timing(alt,{toValue: 230, duration: 350 }).start(({ finished }) => {});
                viewInfo.current.fadeOut();
            }}}>
            <Animated.View style={[{height: alt}, styles.profileContainer]}>

                <Avatar.Image source={caio} size={170} style={{backgroundColor:"#099e4f", alignSelf: 'center'}} />

                <View style={{flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text></Text>
                    <Text style={styles.textProfile}>Caio Almeida</Text>
                    {/* <Icon name='down' size={25} color='#FFF'/> */}
                    <Text></Text>                                
                </View>
                        
                <Animatable.View opacity={0} duration={400} useNativeDriver ref={viewInfo}>

                    <Text style={styles.textInfo}>Estudande do CBSI do IFS Campus Lagarto;</Text>
                    <Text style={styles.textInfo}>Entusiasta das áreas de Frontend e desenvolvimento mobile;</Text>
                    <Text style={styles.textInfo}>Apaixonado por one piece.</Text>

                    <Text style={styles.textProfile}>Redes sociais:</Text>

                    <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingTop: 10 }}>
                        <TouchableOpacity onPress={() => Linking.openURL("https://www.instagram.com/caio_areiss/")}>
                            <Icon name="instagram" size={45} backgroundColor="#222" color="#FFF" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL("https://github.com/CaioAReis")}>
                            <Icon name="github" size={45} backgroundColor="#222" color="#FFF" />
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </Animated.View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.9} onPress={ () => {
            key2 = !key2;
            if (key2) {
                Animated.timing(alt2,{toValue: 790, duration: 350 }).start(({ finished }) => {});
                viewInfo2.current.fadeIn();
            } else { 
                Animated.timing(alt2,{toValue: 230, duration: 350 }).start(({ finished }) => {});
                viewInfo2.current.fadeOut();
            }}}>

            <Animated.View style={[{height: alt2}, styles.profileContainer]}>

                <Avatar.Image source={catuxe} size={170} style={{backgroundColor:"#099e4f", alignSelf: 'center'}} />

                <View style={{flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text></Text>
                    <Text style={styles.textProfile}>Catuxe Varjão</Text>
                    {/* <Icon name='down' size={25} color='#FFF'/> */}
                    <Text></Text>
                </View>
                
                <Animatable.View opacity={0} duration={400} useNativeDriver ref={viewInfo2}>

                    <Text style={styles.textInfo}>Possui graduação em Ciência da Computação pela Universidade Federal de Sergipe (2008);</Text>
                    <Text style={styles.textInfo}>Mestrado em Ciência da Computação pela Universidade Federal de Campina Grande (2013);</Text>
                    <Text style={styles.textInfo}>Atualmente é professora EBTT do Instituto Federal de Sergipe;</Text>
                    <Text style={styles.textInfo}>Tem experiência na área de Ciência da Computação, com ênfase em Engenharia de Software;</Text>
                    <Text style={styles.textInfo}>Atuando principalmente nos seguintes temas: engenharia de software, programação de software, qualidade de software e gamificação.</Text>


                    <Text style={styles.textProfile}>Redes sociais:</Text>

                    <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingTop: 10 }}>
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
                </Animatable.View>
            </Animated.View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.9} onPress={ () => {
            key3 = !key3;
            if (key3) {
                Animated.timing(alt3,{toValue: 510, duration: 350 }).start(({ finished }) => {});
                viewInfo3.current.fadeIn();
            }  else { 
                Animated.timing(alt3,{toValue: 230, duration: 350 }).start(({ finished }) => {});
                viewInfo3.current.fadeOut();
            }}}>

            <Animated.View style={[{height: alt3}, styles.profileContainer]}>

                <Avatar.Image source={francisco} size={170} style={{backgroundColor:"#099e4f", alignSelf: 'center'}} />

                <View style={{flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text></Text>
                    <Text style={styles.textProfile}>Francisco Rodrigues</Text>
                    {/* <Icon name='down' size={25} color='#FFF'/> */}
                    <Text></Text>
                </View>                    
                
                <Animatable.View opacity={0} duration={400} useNativeDriver ref={viewInfo3}>

                    <Text style={styles.textInfo}>Mestre em Sistemas e Computação com graduação em Sistemas de Informações;</Text>
                    <Text style={styles.textInfo}>Atualmente sou professor no Instituto Federal de Sergipe(IFS) pertencente ao curso de sistemas de informação no Campus Lagarto em Sergipe.</Text>

                    <Text style={styles.textProfile}>Redes sociais:</Text>

                    <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingTop: 10 }}>
                        <TouchableOpacity onPress={() => Linking.openURL("https://twitter.com/frchico")}>
                            <Icon name="twitter" size={45} backgroundColor="#222" color="#FFF" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL("https://github.com/frchico")}>
                            <Icon name="github" size={45} backgroundColor="#222" color="#FFF" />
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </Animated.View>
        </TouchableOpacity>

        </ScrollView>
</>
    );
}