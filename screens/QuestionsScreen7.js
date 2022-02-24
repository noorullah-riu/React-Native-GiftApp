import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Colors from '../assets/Colors';

const windowWidth = Dimensions.get('window').width;

const QuestionsScreen7 = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={{marginBottom: 20}}>Does this person enjoy driving?</Text>
            <TouchableOpacity style={styles.btnAnswer} onPress={() => navigation.navigate("QuestionsScreen8")}><Text style={styles.btnText}>Yes</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnAnswer} onPress={() => navigation.navigate("QuestionsScreen8")}><Text style={styles.btnText}>No</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnAnswer} onPress={() => navigation.navigate("QuestionsScreen8")}><Text style={styles.btnText}>I don't know</Text></TouchableOpacity>
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

export default QuestionsScreen7;