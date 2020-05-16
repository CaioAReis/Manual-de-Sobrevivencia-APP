import React from 'react';
import { View, Text, Button } from 'react-native';

import styles from './styles';
import Header from '../../components/header';

export default function Home() {
    return(
        
<>
        <Header />
        <View style = {styles.contaier}>

            <View style = {styles.titlePage} >
                <Text style = {styles.titleText}>Manual de Sobrevivência</Text>
            </View>

            <View style = {styles.buttonArea} >
                
            </View>

        </View>
</>
    );
}