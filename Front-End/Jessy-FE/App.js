import React, {useEffect, useState} from "react";
import {ActivityIndicator, View} from "react-native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {NavigationContainer,} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import HomeScreen from "./src/components/HomeScreen";
import DrawerScreen from "./src/components/DrawerScreen";
import CompletedTours from "./src/components/CompletedTours";
import OpeningTours from "./src/components/OpeningTours";
import FeedBack from "./src/components/FeedBack";
import Profile from "./src/components/Profile";
import TourList from "./src/components/TourList";
import TourGuide from "./src/components/TourGuide";

import RootStackScreen from "./src/components/signup/RootStackScreen";
import {DrawerContent} from "./src/components/DrawerContent";
import {AuthContext} from "./src/components/utils/context";

const Drawer = createDrawerNavigator();

const App = () => {
  const [userTokenDB, setUserTokenDB] = useState();
  const [userNameDB, setUserNameDB] = useState();

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const handleMessage = (message, type = "FAILED") => {
    setMessage(message);
    setMessageType(type);
  };

  const handleAPIRequestLogin = (credentials) => {
    const url = "http://localhost:3000/Login";
    axios
      .post(url, credentials)
      .then((response) => {
        const results = response.loginInfo;
        const {message, status, loginInfo} = results;

        setUserNameDB(loginInfo.username);
        setUserTokenDB(loginInfo.token);

        if (status !== "success") {
          handleMessage(message, status);
        } else {
          navigation.navigate("Home");
        }
      })
      .catch((error) => {
        console.log(error.JSON());
        handleMessage("Error Ocurred Check you Internet Connection");
      });
  };

  const handleAPIRequestSignUp = (credentials) => {
    const url = "http://localhost:3000/Signup";
    axios
      .post(url, credentials)
      .then((response) => {
        const results = response.loginInfo;
        const {message, status, loginInfo} = results;

        setUserNameDB(loginInfo.username);
        setUserTokenDB(loginInfo.token);

        if (status !== "success") {
          handleMessage(message, status);
        } else {
          navigation.navigate("Home", {...loginInfo[0]});
        }
      })
      .catch((error) => {
        console.log(error.JSON());
        handleMessage("Error Ocurred Check you Internet Connection");
      });
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case "REGISTER":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async () => {
        handleAPIRequestLogin(userName);

        try {
          await AsyncStorage.setItem("userToken", userNameDB);
        } catch (e) {
          console.log(e);
        }
        dispatch({type: "LOGIN", id: userNameDB, token: userTokenDB});
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem("userToken");
        } catch (e) {
          console.log(e);
        }
        dispatch({type: "LOGOUT"});
      },
      signUp: () => {
        handleAPIRequestSignUp(credentials);
      },

      toggleTheme: () => {
        setIsDarkTheme((isDarkTheme) => !isDarkTheme);
      },
    }),
    []
  );

  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({type: "RETRIEVE_TOKEN", token: userToken});
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: {backgroundColor: "#1f65b5"},
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
            drawerContent={(props) => <DrawerContent {...props} />}
          >
            <Drawer.Screen name="Home" component={HomeScreen}/>
            <Drawer.Screen name="Notifications" component={DrawerScreen}/>
            <Drawer.Screen name="Completed Tours" component={CompletedTours}/>
            <Drawer.Screen name="Ongoing Tours" component={OpeningTours}/>
            <Drawer.Screen name="Feedback" component={FeedBack}/>
            <Drawer.Screen name="Profile" component={Profile}/>
            <Drawer.Screen name="tour-list" component={TourList}/>
            <Drawer.Screen name="tour-guide" component={TourGuide}/>
          </Drawer.Navigator>
        ) : (
          <RootStackScreen/>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
