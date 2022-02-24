import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Colors from '../assets/Colors';

const windowWidth = Dimensions.get('window').width;

const QuestionsScreen3 = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={{marginBottom: 20}}>What's your budget?</Text>
            <TouchableOpacity style={styles.btnAnswer} onPress={() => navigation.navigate("QuestionsScreen4")}><Text style={styles.btnText}>$25</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnAnswer} onPress={() => navigation.navigate("QuestionsScreen4")}><Text style={styles.btnText}>$100</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnAnswer} onPress={() => navigation.navigate("QuestionsScreen4")}><Text style={styles.btnText}>$250</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnAnswer} onPress={() => navigation.navigate("QuestionsScreen4")}><Text style={styles.btnText}>$500</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnAnswer} onPress={() => navigation.navigate("QuestionsScreen4")}><Text style={styles.btnText}>ALL</Text></TouchableOpacity>
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

export default QuestionsScreen3;