import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';

import styles from './styles';

export default function usScreen() {

    // const [larg, serLarg] = useState(new Animated.Value(0));
    const [alt, setAlt] = useState(new Animated.Value(70));

    let key = false;


    // Animated.sequence([
    //     Animated.timing(
    //         larg,
    //         {
    //             toValue: 430,
    //             duration: 2000
    //         }
    //     ),
    //     Animated.timing(
    //         alt,
    //         {
    //             toValue: 300,
    //             duration: 1000
    //         }
    //     )
    // ]).start();
    // Animated.timing(alt,{toValue: 100, duration: 2000 }).start(({ finished }) => {
    //   });

    const openPerfil = Animated.timing(alt,{toValue: 500, duration: 1000 }).start(({ finished }) => {});
    const closePerfil = Animated.timing(alt,{toValue: 100, duration: 1000 }).start(({ finished }) => {});

    return(
        <View style={styles.container} >

            <TouchableOpacity onPress={ () => {
                key = !key;
                if(key) return Animated.timing(alt,{toValue: 500, duration: 700 }).start(({ finished }) => {});
                else return Animated.timing(alt,{toValue: 100, duration: 700 }).start(({ finished }) => {});
            } } >
                
                <Animated.View style={{
                    backgroundColor: '#222222',
                    height: alt
                }}>

                </Animated.View>
                
            </TouchableOpacity>
            

            {/* <Animated.View style={{
                width: larg,
                height: alt,
                backgroundColor: '#222'
            }}>

            </Animated.View> */}

            <Text style={{fontSize: 30}} >Us Screen</Text>

        </View>
    );
}