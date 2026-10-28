import { ScrollView, Text, Button, View } from 'react-native';

import styles from './Estilo';

export default function Pag5({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.conteudo}>
                <Text style={styles.sobretitulo}>SAGA CYBERTRONIANA · 03</Text>
                <Text style={styles.titulo}>O futuro de Cybertron</Text>
                <Text style={styles.texto}>
                    A rivalidade entre Autobots e Decepticons transforma a busca por recursos em uma disputa pelo destino de Cybertron.
                </Text>

                <Text style={styles.tituloSecao}>Dois caminhos opostos</Text>
                <Text style={[styles.item, styles.itemVermelho]}>
                    Autobots: seguem Optimus Prime e defendem a liberdade, a cooperação e a proteção dos inocentes.
                </Text>
                <Text style={[styles.item, styles.itemAzul]}>
                    Decepticons: são liderados por Megatron e buscam impor seu poder sobre Cybertron e outros mundos.
                </Text>

                <Text style={styles.tituloSecao}>O legado de Optimus</Text>
                <Text style={styles.exemplo}>
                    Para Optimus, vencer não significa apenas derrotar um inimigo: também significa preservar a chance de um futuro melhor.
                </Text>

                <Button title="Rever o perfil de Optimus" color="#b52d36" onPress={() => navigation.navigate('Pag3')} />
                <Button title="Voltar ao guia" color="#17304b" onPress={() => navigation.navigate('Home')} />
            </View>
        </ScrollView>
    );
}