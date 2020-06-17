import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import * as  Animatable from 'react-native-animatable';

import styles from './styles';

export default function usScreen() {

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
        <ScrollView style={styles.container} >

            <Animated.View style={[{height: alt1}, styles.profileContainer]}>

            <View style={styles.viewImg}>

            </View>

            <TouchableOpacity onPress={ () => {
                key1 = !key1;
                if(key1) {
                    Animated.timing(alt1,{toValue: 460, duration: 350 }).start(({ finished }) => {});
                    viewInfo1.current.fadeIn();
                }
                else { 
                    Animated.timing(alt1,{toValue: 230, duration: 350 }).start(({ finished }) => {});
                    viewInfo1.current.fadeOut();
                }}}>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text></Text>
                        <Text style={styles.textProfile}>Aléson Carlos</Text>
                        {/* <Icon name='down' size={25} color='#FFF'/> */}
                        <Text></Text>
                    </View>
                
            </TouchableOpacity>

            <Animatable.View opacity={0} duration={400} useNativeDriver ref={viewInfo1}>

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

            <Animated.View style={[{height: alt}, styles.profileContainer]}>

                    <View style={styles.viewImg}>

                    </View>

                    <TouchableOpacity onPress={ () => {
                        key = !key;
                        if(key) {
                            Animated.timing(alt,{toValue: 460, duration: 350 }).start(({ finished }) => {});
                            viewInfo.current.fadeIn();
                        }
                        else { 
                            Animated.timing(alt,{toValue: 230, duration: 350 }).start(({ finished }) => {});
                            viewInfo.current.fadeOut();
                        }}}>

                            <View style={{flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text></Text>
                                <Text style={styles.textProfile}>Caio Almeida</Text>
                                {/* <Icon name='down' size={25} color='#FFF'/> */}
                                <Text></Text>                                
                            </View>
                        
                    </TouchableOpacity>

                    <Animatable.View opacity={0} duration={400} useNativeDriver ref={viewInfo}>

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

            <Animated.View style={[{height: alt2}, styles.profileContainer]}>

                <View style={styles.viewImg}>

                </View>

                <TouchableOpacity onPress={ () => {
                    key2 = !key2;
                    if(key2) {
                        Animated.timing(alt2,{toValue: 460, duration: 350 }).start(({ finished }) => {});
                        viewInfo2.current.fadeIn();
                    }
                    else { 
                        Animated.timing(alt2,{toValue: 230, duration: 350 }).start(({ finished }) => {});
                        viewInfo2.current.fadeOut();
                    }}}>

                        <View style={{flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text></Text>
                            <Text style={styles.textProfile}>Catuxe Varjão</Text>
                            {/* <Icon name='down' size={25} color='#FFF'/> */}
                            <Text></Text>
                        </View>
                    
                </TouchableOpacity>

                <Animatable.View opacity={0} duration={400} useNativeDriver ref={viewInfo2}>

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

            <Animated.View style={[{height: alt3}, styles.profileContainer]}>

                <View style={styles.viewImg}>

                </View>

                <TouchableOpacity onPress={ () => {
                    key3 = !key3;
                    if(key3) {
                        Animated.timing(alt3,{toValue: 460, duration: 350 }).start(({ finished }) => {});
                        viewInfo3.current.fadeIn();
                    }
                    else { 
                        Animated.timing(alt3,{toValue: 230, duration: 350 }).start(({ finished }) => {});
                        viewInfo3.current.fadeOut();
                    }}}>

                        <View style={{flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text></Text>
                            <Text style={styles.textProfile}>Francisco</Text>
                            {/* <Icon name='down' size={25} color='#FFF'/> */}
                            <Text></Text>
                        </View>
                    
                </TouchableOpacity>

                <Animatable.View opacity={0} duration={400} useNativeDriver ref={viewInfo3}>

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