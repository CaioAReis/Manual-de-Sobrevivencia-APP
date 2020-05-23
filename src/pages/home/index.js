import React from 'react';
import { View, Text, Button, ScrollView ,TouchableOpacity } from 'react-native';

import styles from './styles';

import Icon from 'react-native-vector-icons/AntDesign';

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
        <ScrollView style = {styles.contaier}>

            <View style = {styles.titlePage} >
                <Text style = {styles.titleText}>Manual de Sobrevivência</Text>
            </View>

            <View style = {styles.buttonArea} >
                
                <View style={styles.viewBottom} >
                    <TouchableOpacity style={styles.buttom}>
                        <Text></Text>

                        <View style = {{alignContent: 'center', justifyContent: 'center'}}>
                            <Text style={{color: '#FFF', fontSize: 23, fontWeight: 'bold'}}>História</Text>
                        </View>
                        
                        <Icon name='rightcircle' color='#FFF' size={27} style={{alignSelf: 'center'}} />
                    </TouchableOpacity>
                </View>

                <View style={styles.viewBottom} >
                    <TouchableOpacity style={styles.buttom}>
                        <Text></Text>

                        <View style = {{alignContent: 'center', justifyContent: 'center'}}>
                            <Text style={{color: '#FFF', fontSize: 23, fontWeight: 'bold'}}>Biblioteca</Text>
                        </View>
                        
                        <Icon name='rightcircle' color='#FFF' size={27} style={{alignSelf: 'center'}} />
                    </TouchableOpacity>
                </View>

                <View style={styles.viewBottom} >
                    <TouchableOpacity style={styles.buttom}>
                        <Text></Text>

                        <View style = {{alignContent: 'center', justifyContent: 'center'}}>
                            <Text style={{color: '#FFF', fontSize: 23, fontWeight: 'bold'}}>SIGAA</Text>
                        </View>
                        
                        <Icon name='rightcircle' color='#FFF' size={27} style={{alignSelf: 'center'}} />
                    </TouchableOpacity>
                </View>

                <View style={styles.viewBottom} >
                    <TouchableOpacity style={styles.buttom}>
                        <Text></Text>

                        <View style = {{alignContent: 'center', justifyContent: 'center'}}>
                            <Text style={{color: '#FFF', fontSize: 23, fontWeight: 'bold'}}>Discentes</Text>
                        </View>
                        
                        <Icon name='rightcircle' color='#FFF' size={27} style={{alignSelf: 'center'}} />
                    </TouchableOpacity>
                </View>

                <View style={styles.viewBottom} >
                    <TouchableOpacity style={styles.buttom}>
                        <Text></Text>

                        <View style = {{alignContent: 'center', justifyContent: 'center'}}>
                            <Text style={{color: '#FFF', fontSize: 23, fontWeight: 'bold'}}>Docentes</Text>
                        </View>
                        
                        <Icon name='rightcircle' color='#FFF' size={27} style={{alignSelf: 'center'}} />
                    </TouchableOpacity>
                </View>

                <View style={styles.viewBottom} >
                    <TouchableOpacity style={styles.buttom}>
                        <Text></Text>

                        <View style = {{alignContent: 'center', justifyContent: 'center'}}>
                            <Text style={{color: '#FFF', fontSize: 23, fontWeight: 'bold'}}>Ministério da Educação</Text>
                        </View>
                        
                        <Icon name='rightcircle' color='#FFF' size={27} style={{alignSelf: 'center'}} />
                    </TouchableOpacity>
                </View>

                <View style={styles.viewBottom} >
                    <TouchableOpacity style={styles.buttom}>
                        <Text></Text>

                        <View style = {{alignContent: 'center', justifyContent: 'center'}}>
                            <Text style={{color: '#FFF', fontSize: 23, fontWeight: 'bold'}}>ROD</Text>
                        </View>
                        
                        <Icon name='rightcircle' color='#FFF' size={27} style={{alignSelf: 'center'}} />
                    </TouchableOpacity>
                </View>

                <View style={styles.viewBottom} >
                    <TouchableOpacity style={styles.buttom}>
                        <Text></Text>

                        <View style = {{alignContent: 'center', justifyContent: 'center'}}>
                            <Text style={{color: '#FFF', fontSize: 23, fontWeight: 'bold'}}>IRA</Text>
                        </View>
                        
                        <Icon name='rightcircle' color='#FFF' size={27} style={{alignSelf: 'center'}} />
                    </TouchableOpacity>
                </View>

                <View style={styles.viewBottom} >
                    <TouchableOpacity style={styles.buttom}>
                        <Text></Text>

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
        
    );
}