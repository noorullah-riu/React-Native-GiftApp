import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Colors from '../assets/Colors';

const windowWidth = Dimensions.get('window').width;

const StartScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnStart} onPress={() => navigation.navigate("QuestionsScreen")}> 
 {/*     <TouchableOpacity style={styles.btnStart} onPress={() => navigation.navigate("BottomNavigator")}> */}
        <Text style={{textAlign: 'center'}}>START QUIZZ</Text>
      </TouchableOpacity>
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
  btnStart: {
        width: 150,
        padding: 10,
        borderWidth: 1,
        borderRadius: 6,
        backgroundColor: Colors.orange,
  }
});

export default StartScreen;