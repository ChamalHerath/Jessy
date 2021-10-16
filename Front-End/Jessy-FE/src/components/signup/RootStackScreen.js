import React from "react";

import {createStackNavigator} from "@react-navigation/stack";

import SplashScreen from "./SignupLogin";
import SignInScreen from "./SignIn";
import SignUpScreen from "./SignUp";
import HomeScreen from "../HomeScreen";
import QuizScreen from "../QuizScreen";
import TourGuideScreen from "../TourGuideScreen";
import TourGuideScreenKandy from "../TourGuideScreenKandy";
import TourGuideScreenGampaha from "../TourGuideScreenGampaha";
import ProfileScreen from "../ProfileScreen";
import ProfileScreen1 from "../ProfileScreen1";
import ProfileScreen2 from "../ProfileScreen2";
import ProfileScreen3 from "../ProfileScreen3";
import ProfileScreenKandy from "../ProfileScreenKandy";
import ProfileScreenGampaha from "../ProfileScreenGampaha";
import Categories from "../Categories";
import TourList from "../TourList";
import SignInGuide from "./SignInGuide";
import SignUpGuide from "./SignUpGuide";

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
    <RootStack.Screen name="ProfileScreen1" component={ProfileScreen1}/>
    <RootStack.Screen name="ProfileScreen2" component={ProfileScreen2}/>
    <RootStack.Screen name="ProfileScreen3" component={ProfileScreen3}/>
    <RootStack.Screen name="ProfileScreenKandy" component={ProfileScreenKandy}/>
    <RootStack.Screen name="ProfileScreenGampaha" component={ProfileScreenGampaha}/>
    <RootStack.Screen name="TourGuideScreenKandy" component={TourGuideScreenKandy}/>
    <RootStack.Screen name="TourGuideScreenGampaha" component={TourGuideScreenGampaha}/>
    <RootStack.Screen name="Categories" component={Categories}/>
    <RootStack.Screen name="TourList" component={TourList}/>
    <RootStack.Screen name="SignInGuide" component={SignInGuide}/>
    <RootStack.Screen name="SignUpGuide" component={SignUpGuide}/>
  </RootStack.Navigator>
);

export default RootStackScreen;
