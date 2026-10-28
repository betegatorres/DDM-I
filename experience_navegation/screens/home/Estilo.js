import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        paddingHorizontal: 18,
        paddingVertical: 24,
        backgroundColor: '#e9eef2',
    },
    conteudo: {
        width: '100%',
        maxWidth: 440,
    },
    sobretitulo: {
        marginBottom: 8,
        color: '#b52d36',
        fontSize: 12,
        fontWeight: '700',
        textAlign: 'center',
    },
    titulo: {
        marginBottom: 12,
        color: '#17304b',
        fontSize: 29,
        fontWeight: '700',
        textAlign: 'center',
    },
    texto: {
        marginBottom: 24,
        color: '#425466',
        fontSize: 15,
        lineHeight: 22,
        textAlign: 'center',
    },
    aula: {
        width: '100%',
        alignSelf: 'center',
        marginBottom: 12,
        padding: 14,
        borderRadius: 6,
        backgroundColor: '#ffffff',
    },
    numero: {
        marginBottom: 6,
        color: '#b52d36',
        fontSize: 12,
        fontWeight: '700',
        textAlign: 'center',
    },
    tituloAula: {
        marginBottom: 6,
        color: '#17304b',
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
    },
    textoAula: {
        marginBottom: 10,
        color: '#425466',
        fontSize: 14,
        lineHeight: 20,
        textAlign: 'center',
    },
});
export default styles;