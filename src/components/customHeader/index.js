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
            keys: ['história', ' instituto federal de sergipe', ' ifs', ' campus lagarto', ' curso', ' cbsi', ' sistemas de informação'], 
            name: "História do ifs", 
            component: Historia
        },
        {
            keys: ['biblioteca', ' livros', ' regras da biblioteca', ' biblioteca virtual', ' pearson', ' pergamum'], 
            name: "Biblioteca", 
            component: Biblioteca
        },
        {
            keys: ['sigaa', ' sistema integrado', ' atividades acadêmicas', ' cadastrar-se no sigaa'], 
            name: 'Sigaa', 
            component: SIGAA
        },
        {
            keys: ['docentes', ' professores',' coordenação do ifs'], 
            name: 'Docentes', 
            component: Docentes
        },
        {
            keys: [' discentes', ' alunos', ' monitoria', ' média frequência', ' jubilamento', ' empresa júnior'], 
            name: 'Discentes', 
            component: Discentes
        },
        {
            keys: ['ministério da educação', ' mec', ' inep'], 
            name: 'MEC', 
            component: MEC
        },
        {
            keys: [' regulamento da organização didática', ' rod'], 
            name: 'ROD', 
            component: ROD
        },
        {
            keys: ['índice de rendimento acadêmico', ' ira', ' rendimento acadêmico'], 
            name: 'IRA', 
            component: IRA
        },
        {
            keys: ['projeto pedagógico do curso', ' ppc', ' matriz curricular', ' tcc', ' estágio', ' disciplinas optativas'], 
            name: 'PPC', 
            component: PPC
        },
    ];

    function searchFilter(text) {
        if (search === '' || search === ' ') return[];
        return list.filter(item => item.keys.find(str => {
                return str.includes(text.toLowerCase());
            })
        )
    }

    return(
    <Animated.View useNativeDriver={true} style={[{height: alt}, styles.searchHeader]}>    
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
                    if (key) Animated.timing(alt,{toValue: 412, duration: 200, useNativeDriver: false}).start();
                    else Animated.timing(alt,{toValue: 58, duration: 200, useNativeDriver: false}).start();}}
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
                        {listItem.name} 
                        <Text style={{ fontSize: 14, fontStyle: 'italic' }} >
                            {"\n" + listItem.keys.toString()}
                        </Text>
                </Text>
            ))}
        </View>
    </Animated.View>
    );
} 