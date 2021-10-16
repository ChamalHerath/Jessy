import React from "react";
import {Dimensions, StyleSheet, Text, TouchableOpacity, View,} from "react-native";
import * as Animatable from "react-native-animatable";
// import LinearGradient from "react-native-linear-gradient";
import {LinearGradient} from 'expo-linear-gradient';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {useTheme} from "@react-navigation/native";

const {height} = Dimensions.get("screen");
const height_logo = height * 0.2;

const SignupLogin = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duration={1500}
          source={require("./Group258.png")}
          style={styles.logo}
          resizeMethod="auto"
        />
      </View>

      <Animatable.View
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}
        animation="fadeInUpBig"
      >
        <Text style={styles.title}>TRAVEL SAFE & SMART</Text>
        <Text style={styles.text}>Sign in with your Account</Text>
        <Text style={styles.rp}>Powered by 2021_014</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
            <LinearGradient
              colors={["#0831d4", "#0131ab"]}
              style={styles.signIn}
            >
              <Text style={styles.textSign}>Get started</Text>
              <MaterialIcons name="navigate-next" color="#fff" size={20}/>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {},

  imageContainer: {
    alignItems: "center",
    alignSelf: "center",
    flex: 1,
    textAlign: "center",
  },

  container: {
    flex: 1,
    backgroundColor: "#1f65b5",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },

  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "grey",
    marginTop: 5,
  },
  rp: {
    color: "#1f65b5",
    marginTop: 10,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
});

export default SignupLogin;
