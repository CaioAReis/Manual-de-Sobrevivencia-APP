import React from 'react';
import { View, Text } from 'react-native';

export default function usScreen() {
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
            <Text style={{fontSize: 30}} >Us Screen</Text>
        </View>
    );
}