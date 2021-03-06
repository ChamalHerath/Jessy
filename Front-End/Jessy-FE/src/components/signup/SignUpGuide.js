import React from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";
import * as Animatable from "react-native-animatable";
// import LinearGradient from "react-native-linear-gradient";
import {LinearGradient} from 'expo-linear-gradient';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import axios from "axios";

const SignUpGuide = ({ navigation }) => {
  const [data, setData] = React.useState({
    username: "",
    password: "",
    name: "",
    gender: "",
    category: "",
    registrationNo: "",
    confirm_password: "",
    languages: "",
    mobileNumber: "",
    location: "",
    twitterHandle: "",
    description: "",
    check_textInputChange: false,
    check_textInputChange2: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        name: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        name: val,
        check_textInputChange: false,
      });
    }
  };

  const textEmailChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange2: true,
      });
    } else {
      setData({
        ...data,
        username: "",
        check_textInputChange: false,
      });
    }
  };

  const textCategoryChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        category: val,
      });
    } else {
      setData({
        ...data,
        category: "",
      });
    }
  };

  const handleGenderChange = (val) => {
    setData({
      ...data,
      gender: val,
    });
  };

  const handleRegNo = (val) => {
    setData({
      ...data,
      registrationNo: val,
    });
  };

  const handleLanguageChange = (val) => {
    setData({
      ...data,
      registrationNo: val,
    });
  };

  const handleMobileNumberChange = (val) => {
    setData({
      ...data,
      mobileNumber: val,
    });
  };

  const handleLocationChange = (val) => {
    setData({
      ...data,
      location: val,
    });
  };

  const handleTwitterChange = (val) => {
    setData({
      ...data,
      twitterHandle: val,
    });
  };

  const handleDescription = (val) => {
    setData({
      ...data,
      description: val,
    });
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const handleConfirmPasswordChange = (val) => {
    setData({
      ...data,
      confirm_password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  const handleAPICll = () => {
    var url = "http://localhost:3000/guides/${data}";
    axios
      .post(url)
      .then((response) => {
        const results = response.guide;
        console.log(result.JSON());
      })
      .catch((error) => {
        console.log(error.JSON());
        handleMessage("Error Ocurred Check you Internet Connection");
      });
    handleNavigate();
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>
          <Text style={styles.text_footer}>Name</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Name"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => textInputChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text style={[styles.text_footer, { marginTop: 35 }]}>Email</Text>
          <View style={styles.action}>
            <FontAwesome name="envelope-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Email"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => textEmailChange(val)}
            />
            {data.check_textInputChange2 ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text style={[styles.text_footer, { marginTop: 35 }]}>Category</Text>
          <View style={styles.action}>
            <FontAwesome name="bookmark-o" color="#05375a" size={20} />
            <TextInput
              placeholder="National, Chauffeur"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => textCategoryChange(val)}
            />
          </View>

          <Text style={[styles.text_footer, { marginTop: 35 }]}>Gender</Text>
          <View style={styles.action}>
            <FontAwesome name="venus-mars" color="#05375a" size={20} />
            <TextInput
              placeholder="Male, Female"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handleGenderChange(val)}
            />
          </View>

          <Text style={[styles.text_footer, { marginTop: 35 }]}>
            Tour Guide Reg. No.
          </Text>
          <View style={styles.action}>
            <FontAwesome name="registered" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Registration No."
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handleRegNo(val)}
            />
          </View>

          <Text style={[styles.text_footer, { marginTop: 35 }]}>Languages</Text>
          <View style={styles.action}>
            <FontAwesome name="globe" color="#05375a" size={20} />
            <TextInput
              placeholder="English, French, German"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handleLanguageChange(val)}
            />
          </View>

          <Text style={[styles.text_footer, { marginTop: 35 }]}>Tel. No.</Text>
          <View style={styles.action}>
            <FontAwesome name="phone-square" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Mobile No."
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handleMobileNumberChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text style={[styles.text_footer, { marginTop: 35 }]}>Location</Text>
          <View style={styles.action}>
            <FontAwesome name="map-marker" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Location"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handleLocationChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text style={[styles.text_footer, { marginTop: 35 }]}>
            Twitter Username
          </Text>
          <View style={styles.action}>
            <FontAwesome name="twitter" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Twitter Username"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handleTwitterChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text style={[styles.text_footer, { marginTop: 35 }]}>
            Description
          </Text>
          <View style={styles.action}>
            <FontAwesome name="file-o" color="#05375a" size={20} />
            <TextInput
              placeholder="About You"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handleDescription(val)}
            />
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Password"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Confirm Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Confirm Your Password"
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handleConfirmPasswordChange(val)}
            />
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              By signing up you agree to our
            </Text>
            <Text style={[styles.color_textPrivate, { fontWeight: "bold" }]}>
              {" "}
              Terms of service
            </Text>
            <Text style={styles.color_textPrivate}> and</Text>
            <Text style={[styles.color_textPrivate, { fontWeight: "bold" }]}>
              {" "}
              Privacy policy
            </Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity style={styles.signIn} onPress={() => {}}>
              <LinearGradient
                colors={["#1f65b5", "#89b9f0"]}
                style={styles.signIn}
              >
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: "#fff",
                    },
                  ]}
                >
                  Sign Up
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={[
                styles.signIn,
                {
                  borderColor: "#1f65b5",
                  borderWidth: 1,
                  marginTop: 15,
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
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f65b5",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: Platform.OS === "ios" ? 3 : 5,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#1f65b5",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#1f65b5",
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  color_textPrivate: {
    color: "grey",
  },
});

export default SignUpGuide;