import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Colors from '../assets/Colors';

const windowWidth = Dimensions.get('window').width;

const QuestionsScreen8 = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={{marginBottom: 20}}>Does this person own a...</Text>
            <TouchableOpacity style={styles.btnAnswer} onPress={() => navigation.navigate("QuestionsScreen9")}><Text style={styles.btnText}>Cat</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnAnswer} onPress={() => navigation.navigate("QuestionsScreen9")}><Text style={styles.btnText}>Dog</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnAnswer} onPress={() => navigation.navigate("QuestionsScreen9")}><Text style={styles.btnText}>Both</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnAnswer} onPress={() => navigation.navigate("QuestionsScreen9")}><Text style={styles.btnText}>None</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnAnswer} onPress={() => navigation.navigate("QuestionsScreen9")}><Text style={styles.btnText}>I don't know</Text></TouchableOpacity>
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

export default QuestionsScreen8;