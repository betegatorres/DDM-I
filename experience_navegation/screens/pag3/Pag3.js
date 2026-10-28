import { ScrollView, Text, Button, View } from 'react-native';

import styles from './Estilo';

export default function Pag3({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.conteudo}>
                <Text style={styles.sobretitulo}>PERFIL AUTOBOT · 01</Text>
                <Text style={styles.titulo}>O líder dos Autobots</Text>
                <Text style={styles.texto}>
                    Optimus Prime é o comandante dos Autobots. Em meio à guerra em Cybertron, ele defende a liberdade e a proteção de todos os seres vivos.
                </Text>

                <Text style={styles.tituloSecao}>O que o define</Text>
                <Text style={[styles.item, styles.itemVermelho]}>Liderança: inspira os Autobots pelo exemplo e pela confiança.</Text>
                <Text style={[styles.item, styles.itemAzul]}>Coragem: enfrenta grandes desafios sem abandonar seus princípios.</Text>
                <Text style={[styles.item, styles.itemDourado]}>Companheirismo: valoriza a equipe e protege quem precisa.</Text>

                <Text style={styles.tituloSecao}>Sua missão</Text>
                <Text style={styles.exemplo}>
                    Unir forças para impedir que a guerra destrua outros mundos e ameace a liberdade.
                </Text>

                <Button title="Próximo: seus valores" color="#b52d36" onPress={() => navigation.navigate('Pag4')} />
                <Button title="Voltar ao guia" color="#17304b" onPress={() => navigation.navigate('Home')} />
            </View>
        </ScrollView>
    );
}