import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';

import styles from './styles';
import CustomHeaderBack from '../../components/customHeaderBack';
import sigaa from '../../assets/sigaa.png';

export default function Sigaa({ navigation }) {
    return(
<>
        <CustomHeaderBack title='SIGAA' navigation={navigation} />
        <ScrollView style={styles.container}>

            <View style={styles.viewSup}>
                <Image 
                    source={sigaa} height={54}/>
            </View>

            <View style={styles.textContainer}>

                <Text style={styles.subTitle} >O que é?</Text>

                <Text style={styles.mainText}>
                    O novo Sistema Integrado de Gestão de Atividades Acadêmicas (SIGAA), é uma grande plataforma que permitirá 
                    gerenciar as atividades de ensino, pesquisa, extensão, inovação, assistência estudantil, avaliação institucional, 
                    processo seletivo, estágios, monitoria, entre outras de forma simples, objetiva e integrada. O novo sistema 
                    acadêmico integrado, SIGAA, permitirá que os estudantes recebam notificações instantâneas enviadas pelos 
                    professores através da Turma Virtual, incluindo informações sobre notícias, tarefas, questionários, agendamento 
                    de avaliações, chats e fóruns de discussão postados por cada professor.
                </Text>

                <Text style={styles.mainText2}>
                    Mais detalhes e informações: 
                    <Text style={styles.textLink} onPress={() => Linking.openURL('https://aplicacoes.ifs.edu.br/academico/bem-vindo/')}>  Clique Aqui.</Text>
                </Text>

                <View style={styles.line}></View>

                <Text style={styles.subTitle}>Como se cadastrar?</Text>

                <Text style={styles.mainText}>
                    Para cadastrar-se no SIGAA é necessário preencher um formulário. O cadastro só será validado se os dados 
                    digitados forem iguais aos dados informados no processo seletivo.
                </Text>

                <Text style={styles.mainText2}>
                    Mais informações sobre como se cadastrar no link a seguir: 
                    <Text style={styles.textLink} onPress={() => Linking.openURL('https://sigaa.ifs.edu.br/sigaa/public/cadastro/discente.jsf')}>  Clique Aqui.</Text>
                </Text>

                <Text style={styles.mainText2}>
                    Caso esteja em duvidas sobre o seu cadastro é só clicar no link a seguir, que você se deparará com um video 
                    no YouTube explicando passo a passo:
                    <Text style={styles.textLink} onPress={() => Linking.openURL('https://youtu.be/CJrfmsOi6Hk')}>  Clique Aqui.</Text> 
                </Text>

                <View style={styles.line}></View>
            </View>
        </ScrollView>
</>
    );
}