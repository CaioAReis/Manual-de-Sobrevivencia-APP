import React, { useState } from 'react';
import { View, Text, Animated, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';

export default function HeaderCustom({ navigation, title, icon }) {

    const alt = new Animated.Value(58);
    let key = false;

    const [search, setSearch] = useState('');

    const list = [
        {keys: ['história', 'instituto federal', 'ifs', 'campus lagarto', 'curso', 'cbsi', 'sistemas de informação'], component: "História do ifs"},
        {keys: ['biblioteca', 'livro', 'livros', 'regras da biblioteca', 'biblioteca virtual', 'pearson', 'pergamum'], component: "Biblioteca"},
        {keys: ['docentes', 'professor', 'professores', 'coordenação', 'coordenação do ifs'], component: 'Docentes'},
        {keys: ['sigaa', 'sistema integrado', 'atividades acadêmicas', 'cadastrar-se no sigaa'], component: 'Sigaa'},
        {keys: ['discentes', 'aluno', 'alunos', 'monitoria', 'média', 'frequência', 'jubilamento', 'empresa júnior'], component: 'Discentes'},
        {keys: ['ministério da educação', 'ministério', 'educação', 'mec', 'inep'], component: 'MEC'},
        {keys: ['regulamento da organização didática', 'rod', 'regulamento', 'organização', 'didática'], component: 'Regulamento da Organização Didática'},
        {keys: ['Índice de rendimento acadêmico', 'ira', 'rendimento acadêmico'], component: 'Índice de rendimento acadêmico (IRA)'},
        {keys: ['projeto pedagógico de curso', 'ppc', 'matriz curricular', 'atividades complementares', 'estágio', 'estágio currícular', 'trabalho de conclusão de curso', 'trabalho de conclusão', 'tcc', 'disciplinas optativas'], component: 'Projeto Pedagógico de Curso'},
    ];

    function searchFilter(text) {
        if (search === '') return[];
        return list.filter(item => item.keys.find(str => {
                return str.toLowerCase().includes(text.toLowerCase());
            })
        )
    }

    return(
    <Animated.View style={{backgroundColor: 'orange', overflow: 'hidden',height: alt, borderWidth: 1, borderColor: 'red',position: 'absolute', zIndex: 2000, width: '100%'}}>    
        <View style={styles.customHeader}>
            <Icon.Button name='bars' size={30} color={'#FFF'}
                backgroundColor="#099e4f" onPress={() => navigation.openDrawer()}
                style={{paddingLeft: 20}}>
            </Icon.Button>

            <Text style={styles.customHeaderText}>{title}</Text>

            <Icon.Button activeOpacity={0.95} name={icon} size={30} color={'#FFF'}
                backgroundColor="#099e4f" onPress={() => {
                    key = !key;
                    if (key) Animated.timing(alt,{toValue: 327, duration: 200 }).start();
                    else Animated.timing(alt,{toValue: 58, duration: 200 }).start();}}
                style={{width: 60}}>
            </Icon.Button>
        </View>

        <View style={{display: 'flex', alignItems: 'center'}}>
            <TextInput style={{backgroundColor: '#c2c2c2', height: 50, width: '95%', borderRadius: 200, margin: 10, paddingLeft: 20}} 
                value={search} onChangeText={e => setSearch(e)} placeholder='Pesquisar ...' placeholderTextColor='#000' />
            {searchFilter(search).map((listItem, index) => (
                <Text key={index}>{listItem.component}</Text>
            ))}
        </View>
    </Animated.View>
    );
} 