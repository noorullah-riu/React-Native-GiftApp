import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Colors from '../assets/Colors';

const windowWidth = Dimensions.get('window').width;

const QuestionsScreen4 = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={{marginBottom: 20}}>This person is your...</Text>
            <TouchableOpacity style={styles.btnAnswer} onPress={() => navigation.navigate("QuestionsScreen5")}><Text style={styles.btnText}>Significant other</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnAnswer}><Text style={styles.btnText}>Parent</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnAnswer}><Text style={styles.btnText} onPress={() => navigation.navigate("QuestionsScreen5")}>Friend</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnAnswer} onPress={() => navigation.navigate("QuestionsScreen5")}><Text style={styles.btnText}>Spouse</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnAnswer}><Text style={styles.btnText} onPress={() => navigation.navigate("QuestionsScreen5")}>Child</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnAnswer} onPress={() => navigation.navigate("QuestionsScreen5")}><Text style={styles.btnText}>Grandparent</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnAnswer}><Text style={styles.btnText} onPress={() => navigation.navigate("QuestionsScreen5")}>Co-worker</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnAnswer}><Text style={styles.btnText} onPress={() => navigation.navigate("QuestionsScreen5")}>Other</Text></TouchableOpacity>
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

export default QuestionsScreen4;