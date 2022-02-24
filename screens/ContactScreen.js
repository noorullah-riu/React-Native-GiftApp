import React from 'react';
import { StyleSheet, Text, View, Dimensions,TouchableOpacity } from 'react-native';
import Colors from '../assets/Colors';
import { useContext } from "react";
import EcomContext from "../Babelprovider";
import { NavigationContainer } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

const ContactScreen = ({navigation}) => {
  const { removeValueCookie } = useContext(EcomContext);
  
  const increaseByTenGet = async () => {
   // navigation.navigate("RootStackScreen");
    navigation.reset({
      index: 0,
      routes: [{ name: "RootStackScreen" }],
    });

    removeValueCookie();
  };
  return (
    <View style={styles.container}>
        <TouchableOpacity  onPress={() => increaseByTenGet()}>
          <Text style={{ ...styles.txtBody, ...{ marginTop: 20 } }}>
         Sign Out Btn Here
        </Text>
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
  }
});

export default ContactScreen;