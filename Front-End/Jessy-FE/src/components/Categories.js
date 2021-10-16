import React, {useState} from "react";
import {Platform, StyleSheet, Text, TouchableOpacity, View,} from "react-native";
import axios from "axios";

const Categories = ({navigation}) => {
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
        handleMessage("Error Occurred Check you Internet Connection");
      });
  };

  const handleMessage = (message) => {
    alert(message);
  };

  return (
    <View style={styles.container}>
      {/*<Image*/}
      {/*  source={{*/}
      {/*    uri: "../assets/images/Group259.png",*/}
      {/*  }}*/}
      {/*  size={100}*/}
      {/*/>*/}

      <Text style={{
        textTransform: 'uppercase',
        marginBottom: 100,
        fontSize: 25,
        color: 'blue'
      }}>
        Travel safe with Jessy
      </Text>

      <Text style={{
          textTransform: 'uppercase',
        marginBottom: 30,
        fontSize: 20,
        color: 'black'
      }}>
        Group Id : 2021_014
      </Text>

      <TouchableOpacity
        // onPress={() =>
        //   navigation.navigate("tour-list", {
        //     data: HomeScreen.data,
        //   })
        // }
        onPress={() => {
          // collectingData();
          navigation.navigate("SignInScreen")
        }}
        style={[
          styles.button,
          {
            borderColor: "#1f65b5",
            borderWidth: 1,
            marginTop: 5,
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
          TOURIST
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        // onPress={() =>
        //   navigation.navigate("tour-list", {
        //     data: HomeScreen.data,
        //   })
        // }
        onPress={() => {
          // collectingData();
          navigation.navigate("SignInGuide")
        }}
        style={[
          styles.button,
          {
            borderColor: "#1f65b5",
            borderWidth: 1,
            marginTop: 5,
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
          TOUR GUIDE
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
});

export default Categories;
