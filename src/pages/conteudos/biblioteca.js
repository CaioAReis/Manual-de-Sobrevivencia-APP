import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';

import { Paragraph } from 'react-native-paper';

import styles from './styles';
import CustomHeaderBack from '../../components/customHeaderBack';
import library from '../../assets/library2.png';

export default function Biblioteca({ navigation }) {
    return(
    <>
        <CustomHeaderBack title='Biblioteca' navigation={navigation} />
        <ScrollView style={styles.container}>

            <View style={styles.viewSup}>
                <Image source={library} height={54}/>
            </View>

            <View style={styles.textContainer}>

                <Text style={styles.subTitle}>Cadastro</Text>

                <Text style={styles.mainText}>
                    Para a realizaçao do cadastro é necessário que o aluno compareça pessoalmente na biblioteca, levando consigo um
                    documento com foto, cpf, e o numero da matricula, desta forma só entregar tais dados para o bibliotecário que ele 
                    irá realizar o seu cadastro, e para finalizar o seu cadastro ele irá pedir para que digite uma senha de num minimo 
                    quatro números, sendo que esta senha você terá que lembrar, pois só será possível pegar algum livro se souber a 
                    sua senha.
                </Text>

                <View style={styles.line}></View>

                <Text style={styles.subTitle}>Regras</Text>

                <Text style={styles.mainText}>Algumas coisas que são importantes saber sobre a biblioteca:</Text>

                <View style={styles.libraryItems}>
                    <Text style={styles.itemText}>
                        <Text style={{color: 'red'}}>!</Text> A biblioteca pode emprestar até um limite de dois livros por aluno;
                    </Text>

                    <Text style={styles.itemText}>
                        <Text style={{color: 'red'}}>!</Text> Ao pegar um livro, o aluno terá 7 dias corridos para devolvê-lo;
                    </Text>

                    <Text style={styles.itemText}>
                        <Text style={{color: 'red'}}>!</Text> Um livro que já foi pego, poderá ser renovado por mais 7 dias, porém existe 
                        um limite de apenas 2 renovações por livro;
                    </Text>

                    <Text style={styles.itemText}>
                        <Text style={{color: 'red'}}>!</Text> Se alguém ja houver reservado o livro no pergamum, você não poderá renovar o livro, 
                        pois o livro ja terá sido reservado para outra pessoa, para que todos tenham o acesso ao livro;
                    </Text>

                    <Text style={styles.itemText}>
                        <Text style={{color: 'red'}}>!</Text> Renovações e requerimentos de livros poderam ser feitos através da biblioteca virtual Pergamum;
                    </Text>

                    <Text style={styles.itemText}>
                        <Text style={{color: 'red'}}>!</Text> Através da biblioteca virtual também é possivel ver o acervo de livros disponíveis no campus.
                    </Text>
                </View>
                
                <Text style={styles.mainText}>No Ambiente físico:</Text>

                <View style={{backgroundColor: '#c2c2c2', borderRadius: 15, padding: 10, marginBottom: 15}}>

                    <Text style={styles.itemText}>
                        <Text style={{color: 'red'}}>!</Text> O aluno poderá pegar e ler quantos livros quiser, enquanto estiver na biblioteca, contanto que ao 
                        final de seus estudos, os livros que foram pegos sejam devidamente guardados em seus respectivos lugares;
                    </Text>

                    <Text style={styles.itemText}>
                        <Text style={{color: 'red'}}>!</Text> Não é permitido comer quais quer tipos alimento na biblioteca;
                    </Text>

                    <Text style={styles.itemText}>
                        <Text style={{color: 'red'}}>!</Text> E por último mas não menos importante, a biblioteca é um lugar de demanda SILÊNCIO, então respeite isso!!
                    </Text>
                </View>

                <View style={styles.line}></View>

                <Text style={styles.subTitle}>Pergamum</Text>

                <Text style={styles.mainText}>
                    O PERGAMUM é um sistema informatizado de gerenciamento de dados, direcionado aos diversos tipos de Centros de 
                    Informação. O Sistema funciona de forma integrada, com o objetivo de facilitar a gestão dos centros de informação, 
                    melhorando a rotina diária comos seus usuários.
                </Text>

                <Text style={styles.mainText}>
                    Por meio desse sistema, é possivel realizar consultas ao acervo da biblioteca para para verificar sua disponibilidade 
                    e localizar uma obra, fazer a renovação dos materiais emprestados, efetuar reserva de materiais, conferir materiais 
                    pendentes, realizar consultas às multas, entre outros serviços.
                </Text>

                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.mainText2}>
                        Mais detalhes e informações: 
                    </Text>
                    <TouchableOpacity onPress={() => Linking.openURL('http://pergamum.ifs.edu.br/pergamum/biblioteca/')}>
                        <Text style={styles.textLink}>  Clique Aqui.</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.line}></View>

                <Text style={styles.subTitle}>Pearson</Text>

                <Text style={styles.mainText}>
                    A Biblioteca Virtual Pearson, é um acervo digital composto por milhares de títulos, que abordam diversas áreas 
                    de conhecimento; onde surgiu atraves da necessidade de se tornar mais fácil e rápido o acesso de alunos 
                    universitários ao conteúdo que precisam para os estudos.
                </Text>

                <Text style={styles.mainText}>
                    Atualmente a Biblioteca Virtual está disponível em mais de 300 instituições de ensino, com mais de 7000 livros 
                    e mais de 2,5 milhões de usuários ativos. A plataforma é intuitiva e ágil e pode ser acessada por computadores, 
                    tablets e smartphones, de qualquer lugar e a qualquer hora.
                </Text>

                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.mainText2}>
                        Mais detalhes e informações: 
                    </Text>
                    <TouchableOpacity onPress={() => Linking.openURL('https://br.pearson.com/ensino-superior/solucoes-digitais/biblioteca-virtual-3-0.html')} >
                        <Text style={styles.textLink}>  Clique Aqui.</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.line}></View>
            </View>
        </ScrollView>
    </>
    );
}