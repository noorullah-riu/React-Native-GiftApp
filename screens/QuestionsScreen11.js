import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Colors from '../assets/Colors';

const windowWidth = Dimensions.get('window').width;

const QuestionsScreen11 = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={{marginBottom: 20}}>Is this person a fan of...</Text>
            <TouchableOpacity style={styles.btnAnswer}><Text style={styles.btnText}>Harry Potter</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnAnswer}><Text style={styles.btnText}>Star Wars</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnAnswer}><Text style={styles.btnText} onPress={() => navigation.navigate("ResultsScreen")}>Avengers</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnAnswer}><Text style={styles.btnText}>Game of Thrones</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnAnswer}><Text style={styles.btnText}>All of the above</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnAnswer}><Text style={styles.btnText}>None</Text></TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnAnswer: {
        marginTop: 10,
        width: 150,
        padding: 10,
        borderWidth: 1,
        borderRadius: 6,
        backgroundColor: Colors.orange,
    },
    btnText: {
        textAlign: 'center'
    }
});

export default QuestionsScreen11;