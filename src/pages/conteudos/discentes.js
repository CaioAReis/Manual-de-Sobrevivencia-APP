import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';

import styles from './styles';
import CustomHeaderBack from '../../components/customHeaderBack';
import img from '../../assets/imgHome.png';

export default function Discentes({ navigation }) {
    return(
<>
        <CustomHeaderBack title='Discentes' navigation={navigation} />
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
                    <Text style={styles.subTitle}>Conceito</Text>
                </View>

                <Text style={styles.mainText}>
                    Discente é aquele que aprende, é relativo ao aluno que frequenta cursos, escolas, universidades, ou qualquer 
                    outro estabelecimento que se propõe a ensinar. A palavra discente é um adjetivo de dois gêneros, com origem 
                    do latim “discente”, que significa “aluno”.
                </Text>

                <View style={{borderBottomWidth: 1, borderColor: '#c2c2c2', marginBottom: 20}} ></View>

                <View style={{alignSelf: 'stretch', alignItems: 'center', marginBottom: 10, borderBottomWidth: 1, borderColor: '#c2c2c2',}}>
                    <Text style={styles.subTitle}>Direitos e deveres</Text>
                </View>

                <Text style={styles.mainText}>
                    Para a visualização dos Direitos do Discente é possível através da ROD.
                </Text>

                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.mainText2}>
                        Para saber mais sobre os direitos e deveres do discente é so clicar no link a seguir, apartir da página 46: 
                    </Text>
                    <TouchableOpacity onPress={() => Linking.openURL('http://www.ifs.edu.br/proen/images/Documentos/2016/CS_35_-_Aprova_a_reformula%C3%A7%C3%A3o_do_regulamento_da_Organiza%C3%A7%C3%A3o_Did%C3%A1tica.pdf')}>
                        <Text style={styles.textLink}>  Clique Aqui.</Text>
                    </TouchableOpacity>
                </View>

                <View style={{borderBottomWidth: 1, borderColor: '#c2c2c2', marginBottom: 20}} ></View>

                <View style={{alignSelf: 'stretch', alignItems: 'center', marginBottom: 10, borderBottomWidth: 1, borderColor: '#c2c2c2',}}>
                    <Text style={styles.subTitle}>Monitoria</Text>
                </View>

                <Text style={styles.mainText}>
                    A monitoria é entendida como instrumento para a melhoria do ensino técnico e de graduação, por meio do 
                    estabelecimento de novas práticas e experiências pedagógicas que visem fortalecer a articulação entre teoria 
                    e prática e a integração curricular em seus diferentes aspectos, e tem a finalidade de promover a cooperação 
                    mútua entre estudantes e professores e, a vivência com o professor e com as suas atividades técnico-didáticas.
                </Text>

                <View style={{}}>
                    <Text style={styles.mainText2}>
                        Para saber mais sobre monitoria é so clicar no link a seguir, apartir da página 32:
                    </Text>
                    <TouchableOpacity onPress={() => Linking.openURL('http://www.ifs.edu.br/proen/images/Documentos/2016/CS_35_-_Aprova_a_reformula%C3%A7%C3%A3o_do_regulamento_da_Organiza%C3%A7%C3%A3o_Did%C3%A1tica.pdf')}>
                        <Text style={styles.textLink}>  Clique Aqui.</Text>
                    </TouchableOpacity>
                </View>

                <View style={{borderBottomWidth: 1, borderColor: '#c2c2c2', marginBottom: 20}} ></View>

                <View style={{alignSelf: 'stretch', alignItems: 'center', marginBottom: 10, borderBottomWidth: 1, borderColor: '#c2c2c2',}}>
                    <Text style={styles.subTitle}>Média e frequência</Text>
                </View>

                <Text style={styles.mainText}>
                    Será considerado aprovado o estudante que, ao final da série/período/disciplina, obtiver média aritmética, entre 
                    as médias dos bimestres, igual ou superior a seis por disciplina e possuir frequência igual ou superior a 75% 
                    do total da carga horária da série/período/disciplina.
                </Text>

                <View style={{}}>
                    <Text style={styles.mainText2}>
                        Para saber mais sobre media e frequência é so clicar no link a seguir, apartir da página 26:
                    </Text>
                    <TouchableOpacity onPress={() => Linking.openURL('http://www.ifs.edu.br/proen/images/Documentos/2016/CS_35_-_Aprova_a_reformula%C3%A7%C3%A3o_do_regulamento_da_Organiza%C3%A7%C3%A3o_Did%C3%A1tica.pdf')}>
                        <Text style={styles.textLink}>  Clique Aqui.</Text>
                    </TouchableOpacity>
                </View>

                <View style={{borderBottomWidth: 1, borderColor: '#c2c2c2', marginBottom: 20}} ></View>

                <View style={{alignSelf: 'stretch', alignItems: 'center', marginBottom: 10, borderBottomWidth: 1, borderColor: '#c2c2c2',}}>
                    <Text style={styles.subTitle}>Jubilamento</Text>
                </View>

                <Text style={styles.mainText}>
                    Jubilamento é o desligamento de alunos dos cursos de Graduação que ultrapassarem o prazo máximo de tempo para 
                    a conclusão de seus cursos. Para a Graduação, o tempo máximo para jubilamento consiste em 50% 
                    (cinquenta porcento) do tempo mínimo previsto no Projeto Pedagógico de Curso (PPC).
                </Text>

                <View style={{}}>
                    <Text style={styles.mainText2}>
                        Para saber mais sobre jubilamento é so clicar no link a seguir, apartir da página 41:
                    </Text>
                    <TouchableOpacity onPress={() => Linking.openURL('http://www.ifs.edu.br/proen/images/Documentos/2016/CS_35_-_Aprova_a_reformula%C3%A7%C3%A3o_do_regulamento_da_Organiza%C3%A7%C3%A3o_Did%C3%A1tica.pdf')}>
                        <Text style={styles.textLink}>  Clique Aqui.</Text>
                    </TouchableOpacity>
                </View>

                <View style={{borderBottomWidth: 1, borderColor: '#c2c2c2', marginBottom: 20}} ></View>

                <View style={{alignSelf: 'stretch', alignItems: 'center', marginBottom: 10, borderBottomWidth: 1, borderColor: '#c2c2c2',}}>
                    <Text style={styles.subTitle}>Exame Nacional de Desempenho de Estudantes (Enade)</Text>
                </View>

                <Text style={styles.mainText}>
                    Criado em 2004, para substituir o Exame Nacional de Cursos, conhecido também como Provão, o Exame Nacional de 
                    Desempenho de Estudantes (Enade) avalia o rendimento dos alunos dos cursos de graduação, ingressantes e 
                    concluintes, em relação aos conteúdos programáticos dos cursos em que estão matriculados. É obrigatório aos 
                    estudantes que forem selecionados, sendo indispensável a sua realização para garantia da emissão do histórico 
                    escolar.
                </Text>

                <View style={{}}>
                    <Text style={styles.mainText2}>
                        Para saber mais sobre ENADE é so clicar no link a seguir, apartir da página 41:
                    </Text>
                    <TouchableOpacity onPress={() => Linking.openURL('http://www.ifs.edu.br/proen/images/Documentos/2016/CS_35_-_Aprova_a_reformula%C3%A7%C3%A3o_do_regulamento_da_Organiza%C3%A7%C3%A3o_Did%C3%A1tica.pdf')}>
                        <Text style={styles.textLink}>  Clique Aqui.</Text>
                    </TouchableOpacity>
                </View>

                <View style={{}}>
                    <Text style={styles.mainText2}>
                        Informações extras sobre o Exame Nacional de Desempenho de Estudantes (Enade) é so clicar no link a seguir:
                    </Text>
                    <TouchableOpacity onPress={() => Linking.openURL('https://vestibular.mundoeducacao.bol.uol.com.br/universidade-para-todos/enade.htm')}>
                        <Text style={styles.textLink}>  Clique Aqui.</Text>
                    </TouchableOpacity>
                </View>

                <View style={{borderBottomWidth: 1, borderColor: '#c2c2c2', marginBottom: 20}} ></View>

                <View style={{alignSelf: 'stretch', alignItems: 'center', marginBottom: 10, borderBottomWidth: 1, borderColor: '#c2c2c2',}}>
                    <Text style={styles.subTitle}>Empresa Júnior</Text>
                </View>

                <Text style={styles.mainText}>
                    Empresa Júnior é uma associação civil sem fins lucrativos, formada e gerida por alunos de um curso superior, 
                    cujos principais objetivos são: fomentar o aprendizado prático do universitário em sua área de atuação; 
                    aproximar o mercado de trabalho das academias e os próprios, além de uma gestão autônoma em relação à direção 
                    da faculdade ou centro acadêmico. Com a elaboração de projetos de consultoria na área de formação dos alunos.
                </Text>

                <View style={{}}>
                    <Text style={styles.mainText2}>
                        Para saber mais sobre Empresa Júnior é so clicar no link a seguir:
                    </Text>
                    <TouchableOpacity onPress={() => Linking.openURL('http://facer.edu.br/anexos/anexo_09102013195909.pdf')}>
                        <Text style={styles.textLink}>  Clique Aqui.</Text>
                    </TouchableOpacity>
                </View>

                <View style={{borderBottomWidth: 1, borderColor: '#c2c2c2', marginBottom: 20}}></View>

            </View>
        </ScrollView>
</>
    );
}