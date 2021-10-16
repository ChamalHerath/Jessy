import React, {useState} from "react";
import {Platform, StyleSheet, Text, TouchableOpacity, View,} from "react-native";
import axios from "axios";
import * as Animatable from "react-native-animatable";

const HomeScreen = ({navigation}) => {
  const [name, setName] = useState("");
  const [locationUser, setLocationUser] = useState("");
  const [location, setLocation] = useState("");
  const [inputName, setInputName] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState("");

  const textInputChange1 = (val) => {
    setInputName(val);
  };

  const textInputChange2 = (val) => {
    setLocation(val);
  };

  const collectingData = () => {
    const url = "http://localhost:3000/Guide/guide_list";
    axios
      .get(url)
      .then((response) => {
        const results = response.data;
        const {name, location, description} = results;
        setName(name);
        setDescription(description);
        setLocationUser(location);
        setData(response.data);
      })
      .catch((error) => {
        // console.log("error");
        handleMessage("Error Ocurred Check you Internet Connection");
      });
  };

  const handleMessage = (message) => {
    alert(message);
  };

  return (
    <View style={styles.container}>
      <Animatable.Image
        animation="bounceIn"
        duration={1500}
        source={require("./Group259.png")}
        style={styles.logo}
        resizeMethod="auto"
      />
      <Text style={styles.tTextStyle}>Find Your Travel Partner</Text>

      {/*<TextInput*/}
      {/*  placeholder="Insert Name"*/}
      {/*  placeholderTextColor="#1f65b5"*/}
      {/*  style={[styles.textInput]}*/}
      {/*  autoCapitalize="none"*/}
      {/*  onChangeText={(val) => textInputChange1(val)}*/}
      {/*/>*/}

      {/*<TextInput*/}
      {/*  placeholder="Location"*/}
      {/*  placeholderTextColor="#1f65b5"*/}
      {/*  style={[styles.textInput]}*/}
      {/*  autoCapitalize="none"*/}
      {/*  onChangeText={(val) => textInputChange2(val)}*/}
      {/*/>*/}

      <TouchableOpacity
        // onPress={() =>
        //   navigation.navigate("tour-list", {
        //     data: HomeScreen.data,
        //   })
        // }
        onPress={() => {
          // collectingData();
          navigation.navigate("QuizScreen")
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
          FIND GUIDES
        </Text>
      </TouchableOpacity>

      {/*<View style={styles.container}>*/}
      {/*  <FlatList*/}
      {/*    data={data}*/}
      {/*    renderItem={({item}) => (*/}
      {/*      <Text*/}
      {/*        style={styles.item}*/}
      {/*        // onPress={() => navigation.navigate("guide-profile")}*/}
      {/*      >*/}
      {/*        {item.name}*/}
      {/*      </Text>*/}
      {/*    )}*/}
      {/*    ItemSeparatorComponent={this.renderSeparator}*/}
      {/*  />*/}
      {/*</View>*/}
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
    width: "100%",
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

export default HomeScreen;
