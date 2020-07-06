import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';

import styles from './styles';
import CustomHeaderBack from '../../components/customHeaderBack';
import img from '../../assets/imgHome.png';

export default function IRA({ navigation }) {
    return(
<>
        <CustomHeaderBack title='IRA' navigation={navigation} />
        <ScrollView style={styles.container}>

            <View style={styles.viewSup}>
                <Image 
                    source={img}
                    height={54}
                />
            </View>

            <View style={styles.textContainer}>

                <Text style={styles.mainText}>
                    O Índice de rendimento acadêmico (IRA) é a média ponderada das notas obtidas pelo aluno em todas as disciplinas 
                    cursadas por ele enquanto esteve matriculado em determinado curso, em que o peso é a carga horária das 
                    disciplinas.
                </Text>

                <Text style={styles.mainText}>
                    Disciplinas com uma carga horária maior têm maior influência no IRA do que disciplinas com uma carga horária 
                    menor. Disciplinas nas quais o aluno foi REPROVADO POR INFREQUÊNCIA entram no cálculo como se fossem nota zero. 
                    Por isso, é importante que o aluno sempre TRANQUE A DISCIPLINA, quando souber antecipadamente que não poderá 
                    frequentar a disciplina naquele semestre, por qualquer motivo, ou que TRANQUE O CURSO quando tiver que se 
                    ausentar de todas as disciplinas durante determinado semestre, ao invés de abandonar a aula e ser reprovado 
                    por infrequência.
                </Text>

                <Text style={styles.mainText}>
                    Para consultar a sua nota no IRA basta apenas entrar com o seu login e senha no sigaa e consultar a coluna
                    direita da página inicial, dentro do tópico 'Dados Institucionais', como mostra a imagem abaixo:
                </Text>

                <View style={styles.viewSup}>
                    <Image 
                        source={img}
                        height={54}
                    />
                </View>

                <View style={{borderBottomWidth: 1, borderColor: '#c2c2c2', marginBottom: 20}} ></View>

            </View>
        </ScrollView>
</>
    );
}