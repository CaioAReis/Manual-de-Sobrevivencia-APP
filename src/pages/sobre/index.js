import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

export default function aboutScreen() {
    return(
        <View style={styles.container}>

            <View style={styles.viewSup}>

                <Text style={styles.title}>Sobre o Manual de sobrevivência</Text>

                <Image 
                    source={{
                        uri: ''
                    }}
                    size={30}
                />

            </View>

            <View style={styles.textContainer}>

                <Text style={{}}>
                    Manual de Sobrevivência é uma ferramenta que traz informações pertinentes sobre o 
                    Instituto Federal de Sergipe (IFS) e o curso de BSI (Bacharelado em Sistemas de 
                    Informação) em um único lugar. Desta maneira, as informações chegam até os alunos de
                    uma maneira mais fácil e prática, ou seja, é uma ferramenta eletrônica e online 
                    para os alunos de Tecnologia da Informação. Esta ferramenta Manualrá os alunos 
                    durante sua permanência no curso de SI, ou seja, será um manual que funcionará ao 
                    estilo de um repositório de informações centralizadas, consequentemente, o manual 
                    possibilita que os alunos se tornem mais conscientes sobre as informações pertinentes 
                    ao curso como por exemplo, jubilamento, direitos e deveres do discente, TCC etc. 
                    E assim possivelmente podemos ter menos evasão. Para conseguirmos desenvolver um 
                    produto que porte estas informações, utilizaremos a linguagem de marcação Markdown, 
                    CSS (Cascading Style Sheets que, traduzido para o português, significa Folha de 
                    Estilo em Cascatas) e JS (JavaScript), e assim teremos um website compatível com 
                    dispositivos móveis.
                </Text>

            </View>

            <Text>About Screen</Text>
        </View>
    );
}