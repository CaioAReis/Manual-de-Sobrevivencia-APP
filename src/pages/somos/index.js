import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import * as  Animatable from 'react-native-animatable';

import styles from './styles';

export default function usScreen() {

    const viewInfo = useRef();

    const [alt, setAlt] = useState(new Animated.Value(220));

    let key = false;

    return(
        <ScrollView style={styles.container} >
                <Animated.View style={{
                    height: alt,
                    backgroundColor: '#099e4f',
                    borderRadius: 20,
                    paddingHorizontal: 15,
                    paddingTop: 10,
                    marginBottom: 10}}>

                    <View style={styles.viewImg}>

                    </View>

                    <TouchableOpacity onPress={ () => {
                        key = !key;
                        if(key) {
                            Animated.timing(alt,{toValue: 460, duration: 450 }).start(({ finished }) => {});
                            viewInfo.current.fadeIn();
                        }
                        else { 
                            Animated.timing(alt,{toValue: 220, duration: 450 }).start(({ finished }) => {});
                            viewInfo.current.fadeOut();
                        }}}>

                            <View style={{flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text></Text>
                                <Text style={styles.textProfile}>Caio Almeida</Text>
                                <Icon name='down' size={25} color='#FFF'/>
                            </View>
                        
                    </TouchableOpacity>

                    <Animatable.View opacity={0} duration={160} useNativeDriver ref={viewInfo}>

                        <Text style={styles.textInfo}>Estudande do CBSI do IFS Campus Lagarto;</Text>
                        <Text style={styles.textInfo}>Entusiasta das áreas de Frontend e desenvolvimento mobile;</Text>
                        <Text style={styles.textInfo}>Apaixonado por one piece.</Text>

                        <Text style={styles.textProfile}>Redes sociais:</Text>

                        <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingTop: 10 }}>
                            <TouchableOpacity onPress={() => alert("ASHUASHDU")}>
                                <Icon name="facebook-square" size={45} backgroundColor="#222" color="#FFF" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => alert("ASHUASHDU")}>
                                <Icon name="instagram" size={45} backgroundColor="#222" color="#FFF" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {alert("ASHUASHDU")}}>
                                <Icon name="github" size={45} backgroundColor="#222" color="#FFF" />
                            </TouchableOpacity>
                        </View>
                    </Animatable.View>
                </Animated.View>
        </ScrollView>
    );
}