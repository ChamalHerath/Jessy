import React from "react";

import {createStackNavigator} from "@react-navigation/stack";

import SplashScreen from "./SignupLogin";
import SignInScreen from "./SignIn";
import SignUpScreen from "./SignUp";
import HomeScreen from "../HomeScreen";
import QuizScreen from "../QuizScreen";
import TourGuideScreen from "../TourGuideScreen";
import ProfileScreen from "../ProfileScreen";

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator screenOptions={{headerShown: false}}>
    <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
    <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
    <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
    <RootStack.Screen name="HomeScreen" component={HomeScreen}/>
    <RootStack.Screen name="QuizScreen" component={QuizScreen}/>
    <RootStack.Screen name="TourGuideScreen" component={TourGuideScreen}/>
    <RootStack.Screen name="ProfileScreen" component={ProfileScreen}/>
  </RootStack.Navigator>
);

export default RootStackScreen;
