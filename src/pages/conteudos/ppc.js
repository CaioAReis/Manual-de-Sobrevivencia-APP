import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';

import styles from './styles';
import CustomHeaderBack from '../../components/customHeaderBack';
import estagio from '../../assets/estagio.png';
import ppc from '../../assets/ppc.png';

export default function PPC({ navigation }) {
    return(
<>
        <CustomHeaderBack title='Projeto Pedagógico de Curso' navigation={navigation} />
        <ScrollView style={styles.container}>

            <View style={styles.viewSup}>
                <Image source={ppc} height={54}/>
            </View>

            <View style={styles.textContainer}>

                <Text style={styles.mainText}>
                    O Projeto Pedagógico de Curso - PPC é o mais importante instrumento de gestão utilizado pelas Coordenações de 
                    Curso e por seus Núcleos Docente Estruturantes – NDE.
                </Text>

                <Text style={styles.mainText}>
                    O PPC, na medida em que define a formação do aluno, é um projeto de vida humana pois, por meio do que nele está 
                    planejado, define-se qual o modelo de sociedade pretende-se construir; qual pessoa e qual profissional 
                    objetiva-se formar.
                </Text>

                <Text style={styles.mainText}>
                    O PPC do curso sofreu umas alterações neste ultimo período, o que levou o curso a deixar de ser apenas noturno 
                    e passou a ser noturno e vespertino, desta forma que o curso pôde se manter em 8 períodos/4 anos.
                </Text>
                
                <Text style={styles.mainText2}>
                    Para poder visualizar o NOVO PPC do curso é só clicar no link a seguir:
                    <Text style={styles.textLink} onPress={() => Linking.openURL('http://www.ifs.edu.br/images/arquivos/Proen/PPCs_-_Superiores/Lagarto/CS_66_-_Aprova_ad_referendum_a_reformulao_do_PPC_bacharelado_em_sistemas_de_in.pdf')}>  Clique Aqui.</Text>
                </Text>

                <Text style={styles.mainText2}>
                    Para poder visualizar o ANTIGO PPC do curso é só clicar no link a seguir:
                    <Text style={styles.textLink} onPress={() => Linking.openURL('http://www.ifs.edu.br/proen/images/CS_17_-_aprova_o_PPC_sistemas_de_informa%C3%A7%C3%A3o_campus_Lagarto.pdf')}>  Clique Aqui.</Text>
                </Text>

                <View style={styles.line}></View>

                <Text style={styles.subTitle}>Matriz Curricular</Text>

                <Text style={styles.mainText}>
                    A Matriz Curricular é um documento norteador da escola. É o ponto de partida de sua organização pedagógica. 
                    É a partir da matriz que se define que componentes curriculares serão ensinados na escola. A matriz curricular é 
                    parte integrante do Regimento e do Projeto Político Pedagógico (PPP) da escola e sua organização deve ser realizada 
                    a partir das disposições dos artigos 26, 27, 35 e 36 LDB 9394/96 e da Resolução 02 de janeiro de 2012 (CNE). A 
                    equipe de coordenação da Matriz Curricular é o setor da superintendência de ensino médio responsável por orientar 
                    e monitorar as subsecretarias regionais de educação, bem como as unidades escolares, quanto à elaboração e 
                    efetivação desse documento nesse nível de ensino.
                </Text>

                <Text style={styles.mainText2}>
                    Para a visualização da Matriz Curricular é so clicar no link a seguir, apartir da página 21:
                    <Text style={styles.textLink} onPress={() => Linking.openURL('http://www.ifs.edu.br/images/arquivos/Proen/PPCs_-_Superiores/Lagarto/CS_66_-_Aprova_ad_referendum_a_reformulao_do_PPC_bacharelado_em_sistemas_de_in.pdf')}>  Clique Aqui.</Text>
                </Text>

                <View style={styles.line}></View>
                
                <Text style={styles.subTitle}>Atividades Complementares</Text>

                <Text style={styles.mainText}>
                    Conforme Regulamentação das atividades complementares dos cursos de licenciaturas, tecnologias, bacharelados e 
                    engenharias do IFS, as atividades Complementares são parte integrante do currículo. As mesmas devem ser 
                    desenvolvidas dentro do prazo de conclusão do curso, sendo componente curricular obrigatório, conforme definido 
                    na matriz curricular deste projeto.
                </Text>

                <Text style={styles.mainText2}>
                    Para mais informaçoes sobre as Atividades complementares é so clicar no link a seguir, apartir da página 36:
                    <Text style={styles.textLink} onPress={() => Linking.openURL('http://www.ifs.edu.br/images/arquivos/Proen/PPCs_-_Superiores/Lagarto/CS_66_-_Aprova_ad_referendum_a_reformulao_do_PPC_bacharelado_em_sistemas_de_in.pdf')}>  Clique Aqui.</Text>
                </Text>

                <View style={styles.line}></View>

                <Text style={styles.subTitle}>Estágio Curricular Supervisionado</Text>

                <View style={styles.viewSup}>
                    <Image source={estagio} height={54} />
                </View>

                <Text style={styles.mainText}>
                    O Estágio é o ato educativo escolar supervisionado, desenvolvido em ambiente de trabalho, que visa preparar para 
                    o trabalho produtivo, educandos que estejam cursando o ensino regular em instituições de educação superior, de 
                    educação profissional, de ensino médio, da educação especial e dos anos finais do ensino fundamental, na 
                    modalidade profissional da educação de jovens e adultos, conforme lei 11.788 de 25 de setembro de 2008.
                </Text>

                <Text style={styles.mainText2}>
                    Para mais informaçoes sobre o Estágio Curricular Supervisionado é so clicar no link a seguir, apartir da página 30:
                    <Text style={styles.textLink} onPress={() => Linking.openURL('http://www.ifs.edu.br/images/arquivos/Proen/PPCs_-_Superiores/Lagarto/CS_66_-_Aprova_ad_referendum_a_reformulao_do_PPC_bacharelado_em_sistemas_de_in.pdf')}>  Clique Aqui.</Text>
                </Text>

                <View style={styles.line}></View>

                <Text style={styles.subTitle}>Trabalho de Conclusão de Curso</Text>

                <Text style={styles.mainText}>
                    O Trabalho de Conclusão de Curso - TCC é uma atividade individual, obrigatória e que seguirá as regras da 
                    normativa interna para trabalhos de conclusão de cursos do IFS vigente. Conforme a deliberação nº 01/2016/CD/IFS.
                </Text>
                
                <Text style={styles.mainText2}>
                    Para visualizar o TCC por completo é so clicar no link a seguir, apartir da página 34:
                    <Text style={styles.textLink} onPress={() => Linking.openURL('http://www.ifs.edu.br/images/arquivos/Proen/PPCs_-_Superiores/Lagarto/CS_66_-_Aprova_ad_referendum_a_reformulao_do_PPC_bacharelado_em_sistemas_de_in.pdf')}>  Clique Aqui.</Text>
                </Text>

                <View style={styles.line}></View>

                <Text style={styles.subTitle}>Disciplinas Optativas</Text>

                <Text style={styles.mainText}>
                    As disciplinas optativas são aquelas de livre escolha do aluno para compor o seu currículo de forma a atender 
                    uma formação mais personalizada do profissional que está sendo formado. Disciplinas obrigatórias e optativas 
                    são contabilizadas para compor a carga horaria mínima para habilitar o aluno a ter o título de bacharel. A 
                    carga horária nas disciplinas é constituída de créditos aula e de créditos trabalho, portanto, a integralização 
                    do curso se dará após o cumprimento das 46 disciplinas obrigatórias, disciplinas optativas, estágio e 
                    atividades complementares.
                </Text>

                <Text style={styles.mainText2}>
                    Para saber mais sobre as Disciplinas Optativas é so clicar no link a seguir, apartir da página 26:
                    <Text style={styles.textLink} onPress={() => Linking.openURL('http://www.ifs.edu.br/images/arquivos/Proen/PPCs_-_Superiores/Lagarto/CS_66_-_Aprova_ad_referendum_a_reformulao_do_PPC_bacharelado_em_sistemas_de_in.pdf')}>  Clique Aqui.</Text>
                </Text>

                <View style={styles.line}></View>
            </View>
        </ScrollView>
</>
    );
}