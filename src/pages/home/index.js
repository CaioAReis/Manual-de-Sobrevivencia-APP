import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function Home() {
    return(
        <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style = {{ fontSize: 30 }}>Home Screen</Text>
        </View>
    );
}