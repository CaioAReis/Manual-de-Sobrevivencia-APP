import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Animated } from 'react-native';
import * as  Animatable from 'react-native-animatable';

import styles from './styles';

export default function usScreen() {

    const viewInfo = useRef();

    const [alt, setAlt] = useState(new Animated.Value(220));

    let key = false;

    return(
        <ScrollView style={styles.container} >

{/* ########################################################################################################################### */}
            <TouchableOpacity activeOpacity={0.7} onPress={ () => {
                key = !key;
                if(key) {
                    Animated.timing(alt,{toValue: 400, duration: 450 }).start(({ finished }) => {});
                    viewInfo.current.fadeIn()
                }
                else { 
                    Animated.timing(alt,{toValue: 220, duration: 450 }).start(({ finished }) => {});
                    viewInfo.current.fadeOut()
                }
                }}>
                
                <Animated.View style={{
                    backgroundColor: '#222222',
                    height: alt,                                                                                                                                                                        
                    borderRadius: 20,
                    paddingHorizontal: 20,
                    paddingTop: 10,
                    marginBottom: 10,
                    alignItems: 'center'
                    
                }}
                >
                    <View style={{height: 170, width: 170, backgroundColor: '#FFF', borderRadius: 200}}>

                    </View>

                    <Text style={{color: '#FFF', fontSize: 25}}>Caio Almeida</Text>

                    <Animatable.View 
                        style={{backgroundColor: 'red', height: 170, alignSelf: 'stretch'}}
                        opacity={0}
                        duration={460}
                        useNativeDriver
                        ref={viewInfo}
                    ></Animatable.View>
                
                </Animated.View>
                
            </TouchableOpacity>

{/* ########################################################################################################################### */}

            <View>

            </View>

{/* ########################################################################################################################### */}

            {/* <TouchableOpacity activeOpacity={0.7} style={styles.profileContainer}>

                <View style={styles.viewImg}>
                    <View style={{backgroundColor: '#FFF', height: 250, width: 250, borderRadius: 200}}></View>
                </View>

                <Text style={styles.textProfile}>Alesson Carlos</Text>

            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} style={styles.profileContainer}>

                <View style={styles.viewImg}>
                    <View style={{backgroundColor: '#FFF', height: 250, width: 250, borderRadius: 200}}></View>                
                </View>

                <Text style={styles.textProfile}>Caio Almeida</Text>

            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} style={styles.profileContainer}>

                <View style={styles.viewImg}>
                    <View style={{backgroundColor: '#FFF', height: 250, width: 250, borderRadius: 200}}></View>                    
                </View>

                <Text style={styles.textProfile}>Catuxe Varjão</Text>

            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} style={styles.profileContainer}>

                <View style={styles.viewImg}>
                    <View style={{backgroundColor: '#FFF', height: 250, width: 250, borderRadius: 200}}></View>                    
                </View>

                <Text style={styles.textProfile}>Francisco chico</Text>

            </TouchableOpacity> */}

            {/* <Animated.View style={{
                height: alt,
                backgroundColor: '#099e47',
                borderRadius: 20,
                paddingTop: 20,
                paddingHorizontal: 20,
                marginTop: 70,
                }}>
                <View style={styles.topSide}>
                </View>
                <Text>Caio</Text>
            </Animated.View> */}

            
            
            {/* <Text style={{fontSize: 30}} >Us Screen</Text> */}

        </ScrollView>
    );
}