import { View, Text, TextInput, Button } from 'react-native';

import styles from './Estilo';

export default function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.painel}>
                <View style={styles.emblema}>
                    <Text style={styles.letraEmblema}>A</Text>
                </View>
                <Text style={styles.sobretitulo}>BASE AUTOBOT</Text>
                <Text style={styles.titulo}>Acesso da equipe</Text>
                <Text style={styles.descricao}>
                    Entre para acompanhar a missão de Optimus Prime.
                </Text>

                <Text style={styles.label}>E-mail</Text>

                <TextInput
                    nativeID="email"
                    placeholder="nome@autobot.org"
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <Text style={styles.label}>Código de acesso</Text>

                <TextInput
                    placeholder="Digite seu código"
                    style={styles.input}
                    secureTextEntry
                />

                <View style={styles.botao}>
                    <Button
                        title="Entrar na base"
                        onPress={() => navigation.navigate('Home')}
                        color="#b52d36"
                    />
                </View>
            </View>
        </View>
    );
}