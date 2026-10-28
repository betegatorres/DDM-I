import { ScrollView, Text, Button, View } from 'react-native';

import styles from './Estilo';

export default function Home({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.conteudo}>
                <Text style={styles.sobretitulo}>GUIA AUTOBOT</Text>
                <Text style={styles.titulo}>Optimus Prime</Text>
                <Text style={styles.texto}>
                    Conheça o líder dos Autobots e os valores que guiam sua luta pelo futuro de Cybertron.
                </Text>

                <View style={[styles.aula, styles.aulaVermelha]}>
                    <Text style={styles.numero}>01</Text>
                    <Text style={styles.tituloAula}>O líder dos Autobots</Text>
                    <Text style={styles.textoAula}>
                        Descubra quem é Optimus Prime e por que ele inspira seus companheiros.
                    </Text>
                    <Button title="Conhecer Optimus" color="#b52d36" onPress={() => navigation.navigate('Pag3')} />
                </View>

                <View style={[styles.aula, styles.aulaAzul]}>
                    <Text style={styles.numero}>02</Text>
                    <Text style={styles.tituloAula}>Coragem e liderança</Text>
                    <Text style={styles.textoAula}>
                        Veja como responsabilidade, coragem e empatia definem suas decisões.
                    </Text>
                    <Button title="Ver seus valores" color="#1a659e" onPress={() => navigation.navigate('Pag4')} />
                </View>

                <View style={[styles.aula, styles.aulaDourada]}>
                    <Text style={styles.numero}>03</Text>
                    <Text style={styles.tituloAula}>O futuro de Cybertron</Text>
                    <Text style={styles.textoAula}>
                        Explore o conflito entre Autobots e Decepticons e o legado de Optimus.
                    </Text>
                    <Button title="Explorar a história" color="#9a6a0a" onPress={() => navigation.navigate('Pag5')} />
                </View>
            </View>
        </ScrollView>
    );
}