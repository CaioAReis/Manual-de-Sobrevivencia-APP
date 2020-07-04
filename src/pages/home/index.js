import React from 'react';
import { View, Text, ScrollView ,TouchableOpacity, Image} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import styles from './styles';
import CustomHeader from '../../components/customHeader';

import Img from '../../assets/imgHome.png';
import Icon from 'react-native-vector-icons/AntDesign';

import Biblioteca from '../conteudos/biblioteca';
import Discentes from '../conteudos/discentes';
import Docentes from '../conteudos/docentes';
import Historia from '../conteudos/historia';
import IRA from '../conteudos/ira';
import MEC from '../conteudos/mec';
import PPC from '../conteudos/ppc';
import ROD from '../conteudos/rod';
import SIGAA from '../conteudos/sigaa';

function HomeS({navigation}) {
    return(
<>
    <CustomHeader title='Inicio' navigation={navigation} />
    <ScrollView style = {styles.contaier}>

        <View style = {styles.titlePage} >
            <Image source={Img} height={54} />
        </View>

        <View style = {styles.buttonArea} >
                    
        <View style={styles.viewBottom} >
            <TouchableOpacity activeOpacity={0.6} style={styles.buttom} onPress={() => navigation.navigate(Historia)} >
                <View style={{width: 27}}></View>

                <View style = {{alignContent: 'center', justifyContent: 'center'}}>
                    <Text style={{color: '#FFF', fontSize: 23, fontWeight: 'bold'}}>História</Text>
                </View>
                            
                <Icon name='rightcircle' color='#FFF' size={27} style={{alignSelf: 'center'}} />
            </TouchableOpacity>
        </View>

        <View style={styles.viewBottom} >
            <TouchableOpacity activeOpacity={0.6} style={styles.buttom} onPress={() => navigation.navigate(Biblioteca)}>
                <View style={{width: 27}}></View>

                <View style = {{alignContent: 'center', justifyContent: 'center'}}>
                    <Text style={{color: '#FFF', fontSize: 23, fontWeight: 'bold'}}>Biblioteca</Text>
                </View>
                            
                <Icon name='rightcircle' color='#FFF' size={27} style={{alignSelf: 'center'}} />
            </TouchableOpacity>
        </View>

        <View style={styles.viewBottom} >
            <TouchableOpacity activeOpacity={0.6} style={styles.buttom} onPress={() => navigation.navigate(SIGAA)}>
                <View style={{width: 27}}></View>

                <View style = {{alignContent: 'center', justifyContent: 'center'}}>
                    <Text style={{color: '#FFF', fontSize: 23, fontWeight: 'bold'}}>SIGAA</Text>
                </View>
                            
                <Icon name='rightcircle' color='#FFF' size={27} style={{alignSelf: 'center'}} />
            </TouchableOpacity>
        </View>

        <View style={styles.viewBottom} >
            <TouchableOpacity activeOpacity={0.6} style={styles.buttom} onPress={() => navigation.navigate(Discentes)}>
                <View style={{width: 27}}></View>

                <View style = {{alignContent: 'center', justifyContent: 'center'}}>
                    <Text style={{color: '#FFF', fontSize: 23, fontWeight: 'bold'}}>Discentes</Text>
                </View>
                            
                <Icon name='rightcircle' color='#FFF' size={27} style={{alignSelf: 'center'}} />
            </TouchableOpacity>
        </View>

        <View style={styles.viewBottom} >
            <TouchableOpacity activeOpacity={0.6} style={styles.buttom} onPress={() => navigation.navigate(Docentes)}>
                <View style={{width: 27}}></View>

                <View style = {{alignContent: 'center', justifyContent: 'center'}}>
                    <Text style={{color: '#FFF', fontSize: 23, fontWeight: 'bold'}}>Docentes</Text>
                </View>
                            
                <Icon name='rightcircle' color='#FFF' size={27} style={{alignSelf: 'center'}} />
            </TouchableOpacity>
        </View>

        <View style={styles.viewBottom} >
            <TouchableOpacity activeOpacity={0.6} style={styles.buttom} onPress={() => navigation.navigate(MEC)}>
                <View style={{width: 27}}></View>

                <View style = {{alignContent: 'center', justifyContent: 'center'}}>
                    <Text style={{color: '#FFF', fontSize: 23, fontWeight: 'bold'}}>Ministério da Educação</Text>
                </View>
                            
                <Icon name='rightcircle' color='#FFF' size={27} style={{alignSelf: 'center'}} />
            </TouchableOpacity>
        </View>

        <View style={styles.viewBottom} >
            <TouchableOpacity activeOpacity={0.6} style={styles.buttom} onPress={() => navigation.navigate(ROD)}>
                <View style={{width: 27}}></View>

                <View style = {{alignContent: 'center', justifyContent: 'center'}}>
                    <Text style={{color: '#FFF', fontSize: 23, fontWeight: 'bold'}}>ROD</Text>
                </View>
                            
                <Icon name='rightcircle' color='#FFF' size={27} style={{alignSelf: 'center'}} />
            </TouchableOpacity>
        </View>

        <View style={styles.viewBottom} >
            <TouchableOpacity activeOpacity={0.6} style={styles.buttom} onPress={() => navigation.navigate(IRA)}>
                <View style={{width: 27}}></View>

                <View style = {{alignContent: 'center', justifyContent: 'center'}}>
                    <Text style={{color: '#FFF', fontSize: 23, fontWeight: 'bold'}}>IRA</Text>
                </View>
                            
                <Icon name='rightcircle' color='#FFF' size={27} style={{alignSelf: 'center'}} />
            </TouchableOpacity>
        </View>

        <View style={styles.viewBottom} >
            <TouchableOpacity activeOpacity={0.6} style={styles.buttom} onPress={() => navigation.navigate(PPC)}>
                <View style={{width: 27}}></View>

                <View style = {{alignContent: 'center', justifyContent: 'center'}}>
                    <Text style={{color: '#FFF', fontSize: 23, fontWeight: 'bold'   }}>PPC</Text>
                </View>
                            
                <Icon name='rightcircle' color='#FFF' size={27} style={{alignSelf: 'center'}} />
            </TouchableOpacity>
        </View>

        <View style={styles.footer} >
            <Text style={{color: '#a3a3a3'}}>
                Desenvolvido por Álesson Carlos & Caio Almeida Copyright © 2020 CBSI - Todos os direitos reservados
            </Text>
        </View>
        </View>
        </ScrollView>
</>
    );
}

const Stack = createStackNavigator();

export default function Home({navigation}) {
    return(

        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeS} options={{headerShown: false}} />
            <Stack.Screen name='Historia' component={Historia} options={{headerShown: false}} />
            <Stack.Screen name='Biblioteca' component={Biblioteca} options={{headerShown: false}} />
            <Stack.Screen name='Sigaa' component={SIGAA} options={{headerShown: false}} />
            <Stack.Screen name='Discentes' component={Discentes} options={{headerShown: false}} />
            <Stack.Screen name='Docentes' component={Docentes} options={{headerShown: false}} />
            <Stack.Screen name='MEC' component={MEC} options={{headerShown: false}} />
            <Stack.Screen name='ROD' component={ROD} options={{headerShown: false}} />
            <Stack.Screen name='PPC' component={PPC} options={{headerShown: false}} />
        </Stack.Navigator>
    );
}