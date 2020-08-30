import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';

import styles from './styles';
import CustomHeaderBack from '../../components/customHeaderBack';
import docentes from '../../assets/docentes.png';

export default function Docentes({ navigation }) {
    return(
<>
        <CustomHeaderBack title='Docentes' navigation={navigation} />
        <ScrollView style={styles.container}>

            <View style={styles.viewSup}>
                <Image 
                    source={docentes}
                    height={54}
                />
            </View>

            <View style={styles.textContainer}>

                <View style={{borderBottomWidth: 1, borderColor: '#c2c2c2', marginBottom: 20}} ></View>

                <View style={{alignSelf: 'stretch', alignItems: 'center', marginBottom: 10, borderBottomWidth: 1, borderColor: '#c2c2c2',}}>
                    <Text style={styles.subTitle}>Conceito</Text>
                </View>

                <Text style={styles.mainText}>
                    Docente significa a pessoa que dá aula, o professor, seja em universidades, colégios, cursos técnicos etc. 
                    Docente é um termo relativo ao ensino, é o indivíduo que ensina outros, independente do tema. Existe também o 
                    corpo docente, que é um grupo de professores que ensinam outras pessoas, e todas insituições de ensino possuem 
                    um corpo docente.
                </Text>

                <View style={{borderBottomWidth: 1, borderColor: '#c2c2c2', marginBottom: 20}} ></View>

                <View style={{alignSelf: 'stretch', alignItems: 'center', marginBottom: 10, borderBottomWidth: 1, borderColor: '#c2c2c2',}}>
                    <Text style={styles.subTitle}>Quem são?</Text>
                </View>

                <View style={{}}>
                    <Text style={styles.mainText2}>
                        Para a visualização de todos os professores (docentes) do IFS e só clicar no link a seguir:
                    </Text>
                    <TouchableOpacity onPress={() => Linking.openURL('https://sigaa.ifs.edu.br/sigaa/public/docente/busca_docentes.jsf')}>
                        <Text style={styles.textLink}>  Clique Aqui.</Text>
                    </TouchableOpacity>
                </View>

                <View style={{borderBottomWidth: 1, borderColor: '#c2c2c2', marginBottom: 20}} ></View>

                <View style={{alignSelf: 'stretch', alignItems: 'center', marginBottom: 10, borderBottomWidth: 1, borderColor: '#c2c2c2',}}>
                    <Text style={styles.subTitle}>Direitos e Deveres do docente</Text>
                </View>

                <View style={{}}>
                    <Text style={styles.mainText2}>
                        Para entender quais são os Direitos e Deveres do Docente é so clicar no link a seguir, apartir da página 42: 
                    </Text>
                    <TouchableOpacity onPress={() => Linking.openURL('http://www.ifs.edu.br/proen/images/Documentos/2016/CS_35_-_Aprova_a_reformula%C3%A7%C3%A3o_do_regulamento_da_Organiza%C3%A7%C3%A3o_Did%C3%A1tica.pdf')}>
                        <Text style={styles.textLink}>  Clique Aqui.</Text>
                    </TouchableOpacity>
                </View>

                <View style={{borderBottomWidth: 1, borderColor: '#c2c2c2', marginBottom: 20}} ></View>

                <View style={{alignSelf: 'stretch', alignItems: 'center', marginBottom: 10, borderBottomWidth: 1, borderColor: '#c2c2c2',}}>
                    <Text style={styles.subTitle}>Coordenação</Text>
                </View>

                <View style={{}}>
                    <Text style={styles.mainText2}>
                        Para saber sobre a Coordenação do IFS é so clicar no link a seguir:
                    </Text>
                    <TouchableOpacity onPress={() => Linking.openURL('http://www.ifs.edu.br/estrutura-administrativa-lagarto/coordenacoes')}>
                        <Text style={styles.textLink}>  Clique Aqui.</Text>
                    </TouchableOpacity>
                </View>

                <View style={{borderBottomWidth: 1, borderColor: '#c2c2c2', marginBottom: 20}} ></View>

            </View>
        </ScrollView>
</>
    );
}