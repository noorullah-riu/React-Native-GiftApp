import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Colors from '../assets/Colors';

const windowWidth = Dimensions.get('window').width;

const QuestionsScreen5 = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={{marginBottom: 20}}>What's the occasion?</Text>
            <TouchableOpacity style={styles.btnAnswer} onPress={() => navigation.navigate("QuestionsScreen6")}><Text style={styles.btnText}>Birthday</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnAnswer} onPress={() => navigation.navigate("QuestionsScreen6")}><Text style={styles.btnText}>Christmas</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnAnswer} onPress={() => navigation.navigate("QuestionsScreen6")}><Text style={styles.btnText}>Romantic</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnAnswer} onPress={() => navigation.navigate("QuestionsScreen6")}><Text style={styles.btnText}>Mother's Day</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnAnswer} onPress={() => navigation.navigate("QuestionsScreen6")}><Text style={styles.btnText}>Father's Day</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnAnswer} onPress={() => navigation.navigate("QuestionsScreen6")}><Text style={styles.btnText}>Other</Text></TouchableOpacity>
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

export default QuestionsScreen5;