import React from 'react';
import { View, Text, Button } from 'react-native';

import styles from './styles';
import Header from '../../components/header';

function TestNav({navigation}) {
    return(
        <Button
          title="Toggle drawer"
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        />
    );
}

export default function Home() {
    return(
        <>
        {/* <Header name="Inicio"/> */}
        <View style = {styles.contaier}>

            <View style = {styles.titlePage} >
                <Text style = {styles.titleText}>Manual de Sobrevivência</Text>
            </View>

            <View style = {styles.buttonArea} >
                <TestNav/>
                {/* <Feed/> */}
            </View>

        </View>
        </>
    );
}