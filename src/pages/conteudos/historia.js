import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';

import styles from './styles';
import CustomHeaderBack from '../../components/customHeaderBack';

import history from '../../assets/history.png';
import campusLagarto from '../../assets/campusLagarto.png';
import bsi from '../../assets/bsi.png';

export default function Historia({navigation}) {
    return(
<>
        <CustomHeaderBack title='História' navigation={navigation} />
        <ScrollView style={styles.container}>

            <View style={styles.viewSup}>
                <Image 
                    source={history}
                    height={54}
                />
            </View>

            <View style={styles.textContainer}>

                <View style={{borderBottomWidth: 1, borderColor: '#c2c2c2', marginBottom: 20}} ></View>

                <View style={{alignSelf: 'stretch', alignItems: 'center', marginBottom: 10, borderBottomWidth: 1, borderColor: '#c2c2c2',}}>
                    <Text style={styles.subTitle} >Breve história geral</Text>
                </View>

                <Text style={styles.mainText}>
                    Foi a partir da publicação da lei de criação dos Institutos Federais de Educação, 
                    Ciência e Tecnologia aplicada no ano de 2008 (Lei nº 11.892/08), que se inicia a 
                    história do Instituto Federal de Sergipe - IFS.
                </Text>

                <Text style={styles.mainText}>
                    A instituição foi princinpamente formada pela junção do Centro Federal de Educação 
                    Tecnológica de Sergipe – CEFET-SE, que se encontrava no município de Lagarto - Sergipe;
                    e pela Escola Agrotécnica Federal de São Cristóvão – EAFSC.
                </Text>

                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.mainText2}>
                        Mais detalhes e informações: 
                    </Text>
                    <TouchableOpacity onPress={() => Linking.openURL('http://www.ifs.edu.br/institucional')}>
                        <Text style={styles.textLink}>  Clique Aqui.</Text>
                    </TouchableOpacity>
                </View>

                <View style={{borderBottomWidth: 1, borderColor: '#c2c2c2', marginBottom: 20}} ></View>

                <View style={{alignSelf: 'stretch', alignItems: 'center', marginBottom: 10, borderBottomWidth: 1, borderColor: '#c2c2c2',}}>
                    <Text style={styles.subTitle}>História do campus Lagarto</Text>
                </View>

                <View style={styles.viewSup}>
                    <Image 
                        source={campusLagarto}
                        height={54}
                    />
                </View>

                <Text style={styles.mainText}>
                    Tudo tem inicio em 1995, quando foi instalada na região a Unidade Descentralizada de Ensino de Lagarto 
                    (Uned- Lagarto), com o objetivo de oferecer cursos técnicos para a formação de mão de obra qualificada, 
                    para as pessoas de Lagarto e circunvizinhas nos setores de produção da região, com os cursos de 
                    Informática Industrial, Construção Civil e Eletromecânica.
                </Text>

                <Text style={styles.mainText}>
                    Em 2004 as instituições de ensino técnico se tornaram Centros Federais de Educação Tecnológica (Cefet); e 
                    essa transformação ocorreu em todo o país. Contudo, após 4 anos houve outra mudança, quando o antigo Cefet 
                    se transformou no que atualmente é chamado de Instituto Federal de Educação, Ciência e Tecnologia de Sergipe (IFS).
                </Text>

                <Text style={styles.mainText}>
                    A partir daí a unidade de Lagarto tornou-se o Campus Lagarto do IFS e está situado no povoado Carro Quebrado, a 3 
                    quilômetros do centro comercial do município de Lagarto, na região centro-sul do Estado de Sergipe, oferecendo cursos 
                    superores nas áreas tecnológicas e de licenciatura.
                </Text>

                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.mainText2}>
                        Mais detalhes e informações: 
                    </Text>
                    <TouchableOpacity onPress={() => Linking.openURL('http://www.ifs.edu.br/sobre-o-campus-lagarto')} >
                        <Text style={styles.textLink}>  Clique Aqui.</Text>
                    </TouchableOpacity>
                </View>

                <View style={{borderBottomWidth: 1, borderColor: '#c2c2c2', marginBottom: 20}} ></View>

                <View style={{alignSelf: 'stretch', alignItems: 'center', marginBottom: 10, borderBottomWidth: 1, borderColor: '#c2c2c2',}}>
                    <Text style={styles.subTitle}>Sobre o curso Bacharelado em Sistemas de Informação</Text>
                </View>

                <View style={styles.viewSup}>
                    <Image 
                        source={bsi}
                        height={54}
                    />
                </View>

                <Text style={styles.mainText}>
                    Uma das principais áreas em que um profissional de Sistemas de Informação atua, é no desenvolvimento e no manejamento
                    de softwares de armazenamento e compartilhamento de dados. É o responsavel por desenvolver sistemas que suprem as 
                    necessidades dos usuários, além de organizar e garantir acesso à informação para todos os departamentos de uma empresa. 
                    Este profissional também cuida das funcionalidades de sites, garantindo que as informações possam ser acessadas de forma 
                    correta e segura.
                </Text>

                <Text style={styles.mainText}>
                    O curso tem 4 anos de duração, e cálculos matemáticos acompanham o estudante durante todo esse tempo. Sobre as demais 
                    disciplinas se destacam as de: linguagem de programação, banco de dados, engenharia de software, arquitetura e redes 
                    de computadores, segurança da informação e inteligência artificial. E a participação do estudante em projetos e em estágios 
                    são obrigatórios para a conclusão do curso.
                </Text>

                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.mainText2}>
                        Mais detalhes e informações: 
                    </Text>
                    <TouchableOpacity onPress={() => Linking.openURL('http://www.ifs.edu.br/processoseletivo/cursos/item/74-sistemas-de-informacao')} >
                        <Text style={styles.textLink}>  Clique Aqui.</Text>
                    </TouchableOpacity>
                </View>

                <View style={{borderBottomWidth: 1, borderColor: '#c2c2c2', marginBottom: 20}} ></View>

            </View>
        </ScrollView>
</>
    );
}