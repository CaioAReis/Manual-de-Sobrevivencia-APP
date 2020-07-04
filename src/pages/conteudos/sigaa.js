import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';

import styles from './styles';
import CustomHeaderBack from '../../components/customHeaderBack';
import img from '../../assets/imgHome.png';

export default function Sigaa({ navigation }) {
    return(
<>
        <CustomHeaderBack title='SIGAA' navigation={navigation} />
        <ScrollView style={styles.container}>

            <View style={styles.viewSup}>
                <Image 
                    source={img}
                    height={54}
                />
            </View>

            <View style={styles.textContainer}>

                <View style={{borderBottomWidth: 1, borderColor: '#c2c2c2', marginBottom: 20}} ></View>

                <View style={{alignSelf: 'stretch', alignItems: 'center', marginBottom: 10, borderBottomWidth: 1, borderColor: '#c2c2c2',}}>
                    <Text style={styles.subTitle} >O que é?</Text>
                </View>

                <Text style={styles.mainText}>
                    O novo Sistema Integrado de Gestão de Atividades Acadêmicas (SIGAA), é uma grande plataforma que permitirá 
                    gerenciar as atividades de ensino, pesquisa, extensão, inovação, assistência estudantil, avaliação institucional, 
                    processo seletivo, estágios, monitoria, entre outras de forma simples, objetiva e integrada. O novo sistema 
                    acadêmico integrado, SIGAA, permitirá que os estudantes recebam notificações instantâneas enviadas pelos 
                    professores através da Turma Virtual, incluindo informações sobre notícias, tarefas, questionários, agendamento 
                    de avaliações, chats e fóruns de discussão postados por cada professor.
                </Text>

                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.mainText2}>
                        Mais detalhes e informações: 
                    </Text>
                    <TouchableOpacity onPress={() => Linking.openURL('https://aplicacoes.ifs.edu.br/academico/bem-vindo/')}>
                        <Text style={styles.textLink}>  Clique Aqui.</Text>
                    </TouchableOpacity>
                </View>

                <View style={{borderBottomWidth: 1, borderColor: '#c2c2c2', marginBottom: 20}} ></View>

                <View style={{alignSelf: 'stretch', alignItems: 'center', marginBottom: 10, borderBottomWidth: 1, borderColor: '#c2c2c2',}}>
                    <Text style={styles.subTitle}>Como se cadastrar?</Text>
                </View>


                <Text style={styles.mainText}>
                    Para cadastrar-se no SIGAA é necessário preencher um formulário. O cadastro só será validado se os dados 
                    digitados forem iguais aos dados informados no processo seletivo.
                </Text>

                <View style={{}}>
                    <Text style={styles.mainText2}>
                        Para saber mais sobre como se cadastrar no sigaa é so clicar no link a seguir: 
                    </Text>
                    <TouchableOpacity onPress={() => Linking.openURL('https://sigaa.ifs.edu.br/sigaa/public/cadastro/discente.jsf')}>
                        <Text style={styles.textLink}>  Clique Aqui.</Text>
                    </TouchableOpacity>
                </View>

                <View style={{}}>
                    <Text style={styles.mainText2}>
                        Caso esteja em duvidas sobre o seu cadastro é só clicar no link a seguir, que você se deparará com um video 
                        no YouTube explicando passo a passo: 
                    </Text>
                    <TouchableOpacity onPress={() => Linking.openURL('https://youtu.be/CJrfmsOi6Hk')}>
                        <Text style={styles.textLink}>  Clique Aqui.</Text>
                    </TouchableOpacity>
                </View>

                <View style={{borderBottomWidth: 1, borderColor: '#c2c2c2', marginBottom: 20}} ></View>

            </View>
        </ScrollView>
</>
    );
}