import React, { useState } from 'react';
import { View, Text, Animated, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';

import Biblioteca from '../../pages/conteudos/biblioteca';
import Discentes from '../../pages/conteudos/discentes';
import Docentes from '../../pages/conteudos/docentes';
import Historia from '../../pages/conteudos/historia';
import IRA from '../../pages/conteudos/ira';
import MEC from '../../pages/conteudos/mec';
import PPC from '../../pages/conteudos/ppc';
import ROD from '../../pages/conteudos/rod';
import SIGAA from '../../pages/conteudos/sigaa';

export default function HeaderCustom({ navigation, title, icon }) {

    const alt = new Animated.Value(58);
    let key = false;

    const [search, setSearch] = useState('');

    const list = [
        {
            keys: ['história', 'instituto federal', 'ifs', 'campus lagarto', 'curso', 'cbsi', 'sistemas de informação'], 
            name: "História do ifs", 
            component: Historia
        },
        {
            keys: ['biblioteca', 'livro', 'livros', 'regras da biblioteca', 'biblioteca virtual', 'pearson', 'pergamum'], 
            name: "Biblioteca", 
            component: Biblioteca
        },
        {
            keys: ['docentes', 'professor', 'professores', 'coordenação', 'coordenação do ifs'], 
            name: 'Docentes', 
            component: Docentes
        },
        {
            keys: ['sigaa', 'sistema integrado', 'atividades acadêmicas', 'cadastrar-se no sigaa'], 
            name: 'Sigaa', 
            component: SIGAA
        },
        {
            keys: ['discentes', 'aluno', 'alunos', 'monitoria', 'média', 'frequência', 'jubilamento', 'empresa júnior'], 
            name: 'Discentes', 
            component: Discentes
        },
        {
            keys: ['ministério da educação', 'ministério', 'educação', 'mec', 'inep'], 
            name: 'MEC', 
            component: MEC
        },
        {
            keys: ['regulamento da organização didática', 'rod', 'regulamento', 'organização', 'didática'], 
            name: 'Regulamento da Organização Didática', 
            component: ROD
        },
        {
            keys: ['Índice de rendimento acadêmico', 'ira', 'rendimento acadêmico'], 
            name: 'Índice de rendimento acadêmico', 
            component: IRA
        },
        {
            keys: ['projeto pedagógico de curso', 'ppc', 'matriz curricular', 'atividades complementares', 'estágio', 'estágio currícular', 'trabalho de conclusão de curso', 'trabalho de conclusão', 'tcc', 'disciplinas optativas'], 
            name: 'Projeto Pedagógico de Curso', 
            component: PPC
        },
    ];

    function searchFilter(text) {
        if (search === '') return[];
        return list.filter(item => item.keys.find(str => {
                return str.toLowerCase().includes(text.toLowerCase());
            })
        )
    }

    return(
    <Animated.View style={[{height: alt}, styles.searchHeader]}>    
        <View style={styles.customHeader}>
            <Icon.Button 
                name='bars' 
                size={30} color={'#FFF'}
                backgroundColor="#099e4f" 
                onPress={() => navigation.openDrawer()}
                style={{paddingLeft: 20}}
            />
            
            <Text style={styles.customHeaderText}>{title}</Text>

            <Icon.Button 
                activeOpacity={0.95} 
                name={icon} 
                size={30} 
                color={'#FFF'}
                backgroundColor="#099e4f"
                style={{width: 60}}
                onPress={() => {
                    key = !key;
                    if (key) Animated.timing(alt,{toValue: 283, duration: 200 }).start();
                    else Animated.timing(alt,{toValue: 58, duration: 200 }).start();}}
            />
            
        </View>

        <View style={styles.inputView}>
            <TextInput style={styles.input} 
                value={search} 
                onChangeText={e => setSearch(e)} 
                placeholder='Pesquisar ...' 
                placeholderTextColor='rgba(0, 0, 0, 0.50)' 
            />

            {searchFilter(search).map((listItem, index) => (
                <Text 
                    key={index}
                    style={styles.searchItems}
                    onPress={() => navigation.navigate(listItem.component)}>
                        {listItem.name} : {search}
                </Text>
            ))}
        </View>
    </Animated.View>
    );
} 