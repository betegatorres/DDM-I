import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

import styles from './Estilo';

export default function Login({ navigation }) {

    return (

        <View style={styles.container}>

        <Button
        title='pag3'
        onPress={() => navigation.navigate('Pag3')}>
        </Button>
            
        </View>
    );
}