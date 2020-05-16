import React from 'react';
import { View, Text } from 'react-native';

import Header from '../../components/header';

export default function usScreen() {
    return(
        <>
        {/* <Header name="Quem somos" /> */}
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
            <Text style={{fontSize: 30}} >Us Screen</Text>
        </View>
        </>
    );
}