import { ScrollView, Text, Button, View } from 'react-native';

import styles from './Estilo';

export default function Pag4({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.conteudo}>
                <Text style={styles.sobretitulo}>VALORES AUTOBOT · 02</Text>
                <Text style={styles.titulo}>Coragem e liderança</Text>
                <Text style={styles.texto}>
                    Optimus Prime lidera não apenas pela força, mas também pelas escolhas que faz diante do perigo.
                </Text>

                <Text style={styles.tituloSecao}>Princípios que orientam suas decisões</Text>
                <Text style={styles.item}>
                    Responsabilidade: entende que o poder deve ser usado para proteger, não para dominar.
                </Text>
                <Text style={styles.item}>
                    Empatia: considera o impacto de suas decisões nos aliados e nos habitantes dos mundos que encontra.
                </Text>
                <Text style={styles.item}>
                    Esperança: continua buscando uma saída mesmo quando o conflito parece não ter fim.
                </Text>

                <Text style={styles.tituloSecao}>Liderar também é ouvir</Text>
                <Text style={styles.exemplo}>
                    A confiança entre Optimus e os Autobots cresce quando cada integrante pode contribuir para a missão.
                </Text>

                <Button title="Próximo: o futuro de Cybertron" color="#b52d36" onPress={() => navigation.navigate('Pag5')} />
                <Button title="Voltar ao guia" color="#17304b" onPress={() => navigation.navigate('Home')} />
            </View>
        </ScrollView>
    );
}