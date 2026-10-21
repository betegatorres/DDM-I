import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

import styles from './Estilo';

export default function Login({ navigation }) {

    return (

        <View style={styles.container}>

        <Button
        title='Home'
        onPress={() => navigation.navigate('Home')}>
        </Button>
            
        </View>
    );
}