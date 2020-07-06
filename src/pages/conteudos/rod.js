import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';

import styles from './styles';
import CustomHeaderBack from '../../components/customHeaderBack';
import img from '../../assets/imgHome.png';

export default function ROD({ navigation }) {
    return(
<>
        <CustomHeaderBack title='ROD' navigation={navigation} />
        <ScrollView style={styles.container}>

            <View style={styles.viewSup}>
                <Image 
                    source={img}
                    height={54}
                />
            </View>

            <View style={styles.textContainer}>

                <Text style={styles.mainText}>
                    O Regulamento da Organização Didática (ROD) do Instituto Federal de Educação, Ciência e Tecnologia de Sergipe (IFS), 
                    tem por finalidade normatizar as atividades acadêmicas que permeiam os cursos de formação inicial e continuada, técnicos, 
                    de graduação e de pós-graduação lato sensu, ou seja, é o local onde se encontra as informações sobre os direitos e deveres
                    dos dicentes, o que é proibido, entre outras coisas.
                </Text>

                <View>
                    <Text style={styles.mainText2}>
                        Para a visualização da ROD é so clicar no link a seguir:
                    </Text>
                    <TouchableOpacity onPress={() => Linking.openURL('http://www.ifs.edu.br/proen/images/Documentos/2016/CS_35_-_Aprova_a_reformula%C3%A7%C3%A3o_do_regulamento_da_Organiza%C3%A7%C3%A3o_Did%C3%A1tica.pdf')}>
                        <Text style={styles.textLink}>  Clique Aqui.</Text>
                    </TouchableOpacity>
                </View>

                <View style={{borderBottomWidth: 1, borderColor: '#c2c2c2', marginBottom: 20}} ></View>

            </View>
        </ScrollView>
</>
    );
}