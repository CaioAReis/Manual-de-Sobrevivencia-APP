import React from 'react';
import { View, Text } from 'react-native';

import Header from '../../components/header';

export default function aboutScreen() {
    return(
        <>
        {/* <Header name="Sobre" /> */}
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
            <Text style={{fontSize: 30}} >About Screen</Text>
        </View>
        </>
    );
}