import React, {useState} from "react";
import {Platform, StyleSheet, Text, TouchableOpacity, View,} from "react-native";
import axios from "axios";
import * as Animatable from "react-native-animatable";

const AllCategories = ({navigation}) => {

  return (
    <View style={styles.container}>
        <Animatable.Image
        animation="bounceIn"
        duration={1500}
        source={require("./Group258.png")}
        style={styles.logo}
        resizeMethod="auto"
      />

    <TouchableOpacity

        onPress={() => {
        // collectingData();
        navigation.navigate("")
        }}
        style={[
        styles.button,
        {
            borderColor: "#1f65b5",
            borderWidth: 1,
            marginTop: 20,
        },
        ]}
        >
        <Text
        style={[
            styles.textSign,
            {
            color: "#1f65b5",
            },
        ]}
        >
        VIRTUAL TOUR GUIDE
        </Text>
    </TouchableOpacity>

    <TouchableOpacity

        onPress={() => {
        // collectingData();
        navigation.navigate("")
        }}
        style={[
        styles.button,
        {
            borderColor: "#1f65b5",
            borderWidth: 1,
            marginTop: 20,
        },
        ]}
        >
        <Text
        style={[
            styles.textSign,
            {
            color: "#1f65b5",
            },
        ]}
        >
        DAYOUT PLANNER
        </Text>
    </TouchableOpacity>

    <TouchableOpacity

        onPress={() => {
        // collectingData();
        navigation.navigate("HomeScreen")
        }}
        style={[
        styles.button,
        {
            borderColor: "#1f65b5",
            borderWidth: 1,
            marginTop: 20,
        },
        ]}
        >
        <Text
        style={[
            styles.textSign,
            {
            color: "#1f65b5",
            },
        ]}
        >
        TOUR GUIDE PERSON
        </Text>
    </TouchableOpacity>

        <TouchableOpacity

        onPress={() => {
        // collectingData();
        navigation.navigate("")
        }}
        style={[
        styles.button,
        {
            borderColor: "#1f65b5",
            borderWidth: 1,
            marginTop: 20,
        },
        ]}
        >
        <Text
        style={[
            styles.textSign,
            {
            color: "#1f65b5",
            },
        ]}
        >
        CONVERSATIONAL BOT
        </Text>
    </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20
  },

  button: {
    width: "60%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  textSign: {
    fontSize: 14,
    fontWeight: "bold",
  },

  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#1f65b5",
  },

  tTextStyle: {
    textTransform: 'uppercase',
    color: 'blue',
    fontSize: 20,
    marginBottom: 10
  }
});

export default AllCategories;
