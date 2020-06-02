import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Animated } from 'react-native';
// import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';

export default function usScreen() {

    // const [alt, setAlt] = useState(new Animated.Value(70));

    // let key = false;

    return(
        <ScrollView style={styles.container} >

            <TouchableOpacity activeOpacity={0.7} style={styles.profileContainer}>

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

            </TouchableOpacity>

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

            {/* <TouchableOpacity activeOpacity={0.7} onPress={ () => {
                key = !key;
                if(key) return Animated.timing(alt,{toValue: 200, duration: 650 }).start(({ finished }) => {});
                else return Animated.timing(alt,{toValue: 70, duration: 650 }).start(({ finished }) => {});}}>
                
                <Animated.View style={{
                    backgroundColor: '#222222',
                    height: alt,
                    borderRadius: 20,
                    paddingHorizontal: 20,
                    paddingTop: 20,
                }}>
                    <Text style={{color: '#054eee'}}>CAIO</Text>
                    <Text style={{color: '#054eee'}}>CAIO</Text>
                    <Text style={{color: '#054eee'}}>CAIO</Text>
                    <Text style={{color: '#054eee'}}>CAIO</Text>
                    <Text style={{color: '#054eee'}}>CAIO</Text>
                </Animated.View>
                
            </TouchableOpacity> */}
            
            {/* <Text style={{fontSize: 30}} >Us Screen</Text> */}

        </ScrollView>
    );
}