import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import styles from './styles';
import CustomHeader from '../../components/customHeader';
import img from '../../assets/sobre.png';

export default function Sobre({navigation}) {
    return(
    <>
        <CustomHeader title='Sobre' navigation={navigation}/>
        <ScrollView style={styles.container}>

            <View style={styles.viewSup}>
                <Image source={img} height={54}/>
            </View>

            <View style={styles.textContainer}>

                <Text style={styles.mainText}>
                    Manual de Sobrevivência é uma ferramenta que traz informações pertinentes sobre o 
                    Instituto Federal de Sergipe (IFS) e o curso de BSI (Bacharelado em Sistemas de 
                    Informação) em um único lugar. Desta maneira, as informações chegam até os alunos de
                    uma maneira mais fácil e prática, ou seja, é uma ferramenta eletrônica e online 
                    para os alunos de Tecnologia da Informação.
                </Text>

                <Text style={styles.mainText}>
                    Esta ferramenta Manualrá os alunos durante sua permanência no curso de SI, ou seja, 
                    será um manual que funcionará ao estilo de um repositório de informações centralizadas, 
                    consequentemente, o manual possibilita que os alunos se tornem mais conscientes 
                    sobre as informações pertinentes ao curso como por exemplo, jubilamento, 
                    direitos e deveres do discente, TCC etc. E assim possivelmente podemos ter menos evasão.
                </Text>

                <Text style={styles.mainText}>
                    Para conseguirmos desenvolver um produto que porte estas informações, utilizamos
                    a linguagem de marcação Markdown, CSS (Cascading Style Sheets que, traduzido para
                    o português, significa Folha de Estilo em Cascatas) e a linguagem de programação
                    JavaScript, linguagem essa que nos permitiu criar a presente aplicação através da 
                    biblioteca React-Native; uma aplicação extremamente simples pensado em facilitar
                    ainda mais a experiência de seus usuários.
                </Text>
            </View>
        </ScrollView>
    </>
    );
}