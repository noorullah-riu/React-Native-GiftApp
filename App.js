import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaProvider,
  Text,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
//import Navigator from "./navigation/Navigator";
import { useContext } from "react";
import EcomContext from "./Babelprovider";
import { EcomProvider } from "./Babelprovider";
import { Ionicons } from "@expo/vector-icons";
//import RootStackScreen from "./screens/RootStackScreen";

import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import QuestionsScreen from "./screens/QuestionsScreen";
import QuestionsScreen2 from "./screens/QuestionsScreen2";
import QuestionsScreen3 from "./screens/QuestionsScreen3";
import QuestionsScreen4 from "./screens/QuestionsScreen4";
import QuestionsScreen5 from "./screens/QuestionsScreen5";
import QuestionsScreen6 from "./screens/QuestionsScreen6";
import QuestionsScreen7 from "./screens/QuestionsScreen7";
import QuestionsScreen8 from "./screens/QuestionsScreen8";
import QuestionsScreen9 from "./screens/QuestionsScreen9";
import QuestionsScreen10 from "./screens/QuestionsScreen10";
import QuestionsScreen11 from "./screens/QuestionsScreen11";

import QuestionRandom from "./screens/QuestionRandom";
import ResultsScreen from "./screens/ResultsScreen";
import StartScreen from "./screens/StartScreen";
import CallApiScreen from "./screens/CallApiScreen";

import ContactScreen from "./screens/ContactScreen";
import LikedGiftsScreen from "./screens/LikedGiftsScreen";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import PDetailsScreen from "./screens/PDetailsScreen";



import WelcomeScreen from './screens/WelcomeScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import ForgotPassScreen from './screens/ForgotPass';

const RootStack = createStackNavigator();

const RootStackScreen = () => (
  <RootStack.Navigator screenOptions={{headerShown: false}}>
    <RootStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    <RootStack.Screen name="SignInScreen" component={SignInScreen} />
    <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
    <RootStack.Screen name="ForgotPassScreen" component={ForgotPassScreen} />
  </RootStack.Navigator>
);


const StartStack = createStackNavigator();

const StartStackScreen = () => {
  return (
    <StartStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <StartStack.Screen name="StartScreen" component={StartScreen} />
      <StartStack.Screen
        name="QuestionsScreen"
        component={QuestionsScreen}
        options={{ title: "Quizz" }}
      />
  {/*     <StartStack.Screen
        name="QuestionsScreen2"
        component={QuestionsScreen2}
        options={{ title: "QuestionsScreen2" }}
      />
      <StartStack.Screen
        name="QuestionsScreen3"
        component={QuestionsScreen3}
        options={{ title: "QuestionsScreen3" }}
      />
      <StartStack.Screen
        name="QuestionsScreen4"
        component={QuestionsScreen4}
        options={{ title: "QuestionsScreen4" }}
      />
      <StartStack.Screen
        name="QuestionsScreen5"
        component={QuestionsScreen5}
        options={{ title: "QuestionsScreen5" }}
      />
      <StartStack.Screen
        name="QuestionsScreen6"
        component={QuestionsScreen6}
        options={{ title: "QuestionsScreen6" }}
      />
      <StartStack.Screen
        name="QuestionsScreen7"
        component={QuestionsScreen7}
        options={{ title: "QuestionsScreen7" }}
      />
      <StartStack.Screen
        name="QuestionsScreen8"
        component={QuestionsScreen8}
        options={{ title: "QuestionsScreen8" }}
      />
      <StartStack.Screen
        name="QuestionsScreen9"
        component={QuestionsScreen9}
        options={{ title: "QuestionsScreen9" }}
      />
      <StartStack.Screen
        name="QuestionsScreen10"
        component={QuestionsScreen10}
        options={{ title: "QuestionsScreen10" }}
      />
      */}
      <StartStack.Screen
        name="QuestionRandomScreen"
        component={QuestionRandom}
        options={{ title: "QuestionRandom" }}
      /> 
      <StartStack.Screen
        name="ResultsScreen"
        component={ResultsScreen}
        options={{ title: "ResultsScreen" }}
      />
      <StartStack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
        options={{ title: "ProductDetailsScreen" }}
      />
      <StartStack.Screen
        name="PDetailsScreen"
        component={PDetailsScreen}
        options={{ title: "PDetailsScreen" }}
      />
      <StartStack.Screen
        name="CallApiScreen"
        component={CallApiScreen}
        options={{ title: "CallApiScreen" }}
      />
    </StartStack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="LikedGiftsStack"
      activeColor="orange"
      inactiveColor="gray"
      shifting={true}
      barStyle={{
        position: "absolute",
        backgroundColor: "white",
        //borderRadius: 75,
        //overflow: "hidden",
        //height: 90,
        //...styles.shadow,
      }}
    >
      <Tab.Screen
        name="LikedGiftsStack"
        component={LikedGiftsScreen}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
            <Text>
              <Ionicons name="heart-outline" color={color} size={24} />
            </Text>
          ),
        }}
      />

      <Tab.Screen
        name="ContactStack"
        component={ContactScreen}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="mail-outline" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};


const AppFlowAsync = createStackNavigator();
const AppFlowAsyncStackScreen = () => {
  return (
    <AppFlowAsync.Navigator
    initialRouteName="StartStackScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppFlowAsync.Screen name="StartStackScreen" component={StartStackScreen} />
      <AppFlowAsync.Screen name="BottomNavigator" component={BottomNavigator} />
       <AppFlowAsync.Screen name="RootStackScreen" component={RootStackScreen} /> 
    </AppFlowAsync.Navigator>
  );
};

const AppFlowNew = createStackNavigator();

const AppFlowNewStackScreen = () => {
  return (
    <AppFlowNew.Navigator
    initialRouteName="RootStackScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppFlowNew.Screen name="RootStackScreen" component={RootStackScreen} />
      <AppFlowNew.Screen name="StartStackScreen" component={StartStackScreen} />
      <AppFlowNew.Screen name="BottomNavigator" component={BottomNavigator} />
    </AppFlowNew.Navigator>
  );
};

const AppFlow = createStackNavigator();

const AppFlowStackScreen = () => {
  const { TokenUserAsyncS } = useContext(EcomContext);

  return (
    <NavigationContainer independent="true">
      <AppFlow.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
    {(() => {
        if (TokenUserAsyncS === "") {
            return (
            <AppFlow.Screen
            name="AppFlowNewStackScreen"
            component={AppFlowNewStackScreen}
            />
            )
        } else {
          return (
            <AppFlow.Screen
            name="AppFlowAsyncStackScreen"
            component={AppFlowAsyncStackScreen}
          />
          );
        }
      })()}


{/*         {TokenUserAsyncS ? (
          <AppFlow.Screen
            name="AppFlowAsyncStackScreen"
            component={AppFlowAsyncStackScreen}
          />
        ) : (
          <AppFlow.Screen
          name="AppFlowNewStackScreen"
          component={AppFlowNewStackScreen}
          />
        )} */}
      </AppFlow.Navigator>
    </NavigationContainer>
  );
};

/* 
const App = () => {
  const {
    Login_resdy
  } = useContext(EcomContext);

  useEffect(() => {
    //  LogBox.ignoreLogs(["Setting a timer"]);
   // a();
    }, [Login_resdy]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.screen}>
        <NavigationContainer>
          {Login_resdy ? 
          <RootStackScreen /> :
          <Navigator />
        }
        </NavigationContainer>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
 */

export default () => {
  return (
    <EcomProvider>
      <AppFlowStackScreen />
    </EcomProvider>
  );
};
