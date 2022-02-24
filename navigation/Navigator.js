import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../assets/Colors';
import ContactScreen from '../screens/ContactScreen';
import LikedGiftsScreen from '../screens/LikedGiftsScreen';

import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import QuestionsScreen from '../screens/QuestionsScreen';
import QuestionsScreen2 from '../screens/QuestionsScreen2';
import QuestionsScreen3 from '../screens/QuestionsScreen3';
import QuestionsScreen4 from '../screens/QuestionsScreen4';
import QuestionsScreen5 from '../screens/QuestionsScreen5';
import QuestionsScreen6 from '../screens/QuestionsScreen6';
import QuestionsScreen7 from '../screens/QuestionsScreen7';
import QuestionsScreen8 from '../screens/QuestionsScreen8';
import QuestionsScreen9 from '../screens/QuestionsScreen9';
import QuestionsScreen10 from '../screens/QuestionsScreen10';
import QuestionsScreen11 from '../screens/QuestionsScreen11';
import ResultsScreen from '../screens/ResultsScreen';
import StartScreen from '../screens/StartScreen';
import PDetailsScreen from '../screens/PDetailsScreen';


const Tab = createMaterialBottomTabNavigator();
const StartStack = createStackNavigator();
const LikedGiftsStack = createStackNavigator();
const ContactStack = createStackNavigator();

const navOps = {
    title: 'GiftW',
    //font: 'chewy',
    fontSize: 25
}

export const StartStackScreen = ({ navigation }) => {

    return (
        <StartStack.Navigator>
            <StartStack.Screen name="StartScreen" component={StartScreen}
                options={({ navigation }) => ({
                    headerShown: false,
                    headerStyle: {
                        shadowOpacity: 0,
                        elevation: 0
                    },
                    headerLeft: () => <View></View>
                })} />
            <StartStack.Screen name="QuestionsScreen" component={QuestionsScreen} options={{ title: 'Quizz', headerShown: false }} />
            <StartStack.Screen name="QuestionsScreen2" component={QuestionsScreen2} options={{ title: 'QuestionsScreen2', headerShown: false}} />
            <StartStack.Screen name="QuestionsScreen3" component={QuestionsScreen3} options={{ title: 'QuestionsScreen3', headerShown: false}} />
            <StartStack.Screen name="QuestionsScreen4" component={QuestionsScreen4} options={{ title: 'QuestionsScreen4', headerShown: false}} />
            <StartStack.Screen name="QuestionsScreen5" component={QuestionsScreen5} options={{ title: 'QuestionsScreen5', headerShown: false}} />
            <StartStack.Screen name="QuestionsScreen6" component={QuestionsScreen6} options={{ title: 'QuestionsScreen6', headerShown: false}} />
            <StartStack.Screen name="QuestionsScreen7" component={QuestionsScreen7} options={{ title: 'QuestionsScreen7', headerShown: false}} />
            <StartStack.Screen name="QuestionsScreen8" component={QuestionsScreen8} options={{ title: 'QuestionsScreen8', headerShown: false}} />
            <StartStack.Screen name="QuestionsScreen9" component={QuestionsScreen9} options={{ title: 'QuestionsScreen9', headerShown: false}} />
            <StartStack.Screen name="QuestionsScreen10" component={QuestionsScreen10} options={{ title: 'QuestionsScreen10', headerShown: false}} />
            <StartStack.Screen name="QuestionsScreen11" component={QuestionsScreen11} options={{ title: 'QuestionsScreen11', headerShown: false}} />
            <StartStack.Screen name="ResultsScreen" component={ResultsScreen} options={{ title: 'ResultsScreen'}} />
            <StartStack.Screen name="PDetailsScreen" component={PDetailsScreen} options={{ title: 'PDetsail'}} />

            
            <StartStack.Screen name="ProductDetailsScreen" component={ProductDetailsScreen} options={{ title: 'ProductDetailsScreen' }} />
        </StartStack.Navigator>
    )
}

LikedGiftsStackScreen = () => {
    return (
        <LikedGiftsStack.Navigator screenOptions={{ headerTitleAlign: 'center', title: 'Gifts you liked' }}>
            <LikedGiftsStack.Screen name="LikedGiftsScreen" component={LikedGiftsScreen}
                options={({ navigation }) => ({
                    headerStyle: {
                        shadowOpacity: 0,
                        elevation: 0,
                    },
                    headerLeft: () => <View></View>
                })} />
            <StartStack.Screen name="ProductDetailsScreen" component={ProductDetailsScreen} options={{ title: 'ProductDetailsScreen' }} />
            <StartStack.Screen name="PDetailsScreen" component={PDetailsScreen} options={{ title: 'PDetailsScreen' }} />
        </LikedGiftsStack.Navigator>
    )
}

ContactStackScreen = () => {
    return (
        <ContactStack.Navigator screenOptions={{ headerTitleAlign: 'center', title: 'Contact screen' }}>
            <ContactStack.Screen name="ContactScreen" component={ContactScreen}
                options={({ navigation }) => ({
                    headerStyle: {
                        shadowOpacity: 0,
                        elevation: 0,
                    },
                    headerLeft: () => <View></View>
                })} />
        </ContactStack.Navigator>
    )
}

const BottomNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="LikedGiftsStack"
            activeColor={Colors.orange}
            inactiveColor={Colors.gray}
            shifting={true}
            barStyle={{
                position: 'absolute',
                backgroundColor: Colors.white,
                //borderRadius: 75,
                //overflow: "hidden",
                //height: 90,
                //...styles.shadow,
            }}

        >
            <Tab.Screen
                name="LikedGiftsStack"
                component={LikedGiftsStackScreen}

                options={{
                    tabBarLabel: false,
                    tabBarIcon: ({ color }) => (
                        <Text>
                            <Ionicons name="heart-outline" color={color} size={24} />
                        </Text>
                    ),
                }}
            />
      {/*       <Tab.Screen
                name="StartStack"
                component={StartStackScreen}
                options={{
                    tabBarLabel: false,
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="gift-outline" color={color} size={24} />
                    ),
                }}
            /> */}
            <Tab.Screen
                name="ContactStack"
                component={ContactStackScreen}
                options={{
                    tabBarLabel: false,
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="mail-outline" color={color} size={24} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },

});

export default BottomNavigator;