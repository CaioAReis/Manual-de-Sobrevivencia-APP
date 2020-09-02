import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';

import styles from './styles';
import CustomHeaderBack from '../../components/customHeaderBack';
import mec from '../../assets/mec.png';

export default function MEC({ navigation }) {
    return(
<>
        <CustomHeaderBack title='Ministério da Educação' navigation={navigation} />
        <ScrollView style={styles.container}>

            <View style={styles.viewSup}>
                <Image 
                    source={mec}
                    height={54}
                />
            </View>

            <View style={styles.textContainer}>

                <View style={{borderBottomWidth: 1, borderColor: '#c2c2c2', marginBottom: 20}} ></View>

                <View style={{alignSelf: 'stretch', alignItems: 'center', marginBottom: 10, borderBottomWidth: 1, borderColor: '#c2c2c2',}}>
                    <Text style={styles.subTitle} >O que é?</Text>
                </View>

                <Text style={styles.mainText}>
                    O Ministério da Educação (MEC), é um órgão do governo federal que trata dos assuntos relacionados à educação e 
                    cultura em todo território nacional. É o órgão superior de todas as secretarias de educação estaduais e 
                    municipais do Brasil. O ministério é responsável pela Política Nacional de Educação, relativa ao ensino infantil, 
                    fundamental, médio e profissional, de jovens e adultos, especial, além também do ensino superior e a distância.
                </Text>

                <View>
                    <Text style={styles.mainText2}>
                        Para saber mais sobre o MEC é só clicar no link a seguir :
                    </Text>
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.mec.gov.br/')}>
                        <Text style={styles.textLink}>  Clique Aqui.</Text>
                    </TouchableOpacity>
                </View>

                <View style={{borderBottomWidth: 1, borderColor: '#c2c2c2', marginBottom: 20}} ></View>

                <View style={{alignSelf: 'stretch', alignItems: 'center', marginBottom: 10, borderBottomWidth: 1, borderColor: '#c2c2c2',}}>
                    <Text style={styles.subTitle}>Avaliações de curso MEC/INEP</Text>
                </View>

                <Text style={styles.mainText}>
                    O Ministério da educação avalia os cursos superiores de acordo com critérios estabelecidos no instrumento de 
                    avaliação de cursos de graduação presencial e a distância, para esta avaliação a biblioteca tem peso (4) 
                    diluídos em indicadores como: estrutura física, recursos humanos, recursos tecnlógicos e acervo - bibliografia 
                    básica, bibliografia complementar e periódicos.
                </Text>

                <View style={{}}>
                    <Text style={styles.mainText2}>
                        Para visualização da tabela por completo dos pesos de cada matéria é so clicar no link a seguir: 
                    </Text>
                    <TouchableOpacity onPress={() => Linking.openURL('http://www.ifs.edu.br/institucional-biblioteca/avaliacao-mec-biblioteca')}>
                        <Text style={styles.textLink}>  Clique Aqui.</Text>
                    </TouchableOpacity>
                </View>

                <View style={{borderBottomWidth: 1, borderColor: '#c2c2c2', marginBottom: 20}} ></View>

            </View>
        </ScrollView>
</>
    );
}