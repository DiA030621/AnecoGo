import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WelcomeScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>¡Bienvenido!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default WelcomeScreen;
