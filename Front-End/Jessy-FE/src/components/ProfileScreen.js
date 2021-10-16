import React from "react";
import {Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={{
            color: 'red',
            fontSize: 20,
            marginVertical: 15
          }}>
            Tour Guide
          </Text>
          <Text style={{
            color: 'black',
            fontSize: 18,
            marginVertical: 15
          }}>
            Guide Description
          </Text>
          <Text style={{
            color: 'black',
            fontSize: 16
          }}>
            We are going to implement this schedule by creating 20 posts for facebook and 30 various video content from
            different content creators in YouTube. By analyzing the facebook posts published by the facebook page owners
            we are creating another kind of concept for version 3. Below are the content we are going to create.
          </Text>
          <Text style={{
            color: 'black',
            fontSize: 18,
            marginVertical: 15
          }}>
            Send Feedback
          </Text>
          <TouchableOpacity onPress={() => {
            Alert.alert(
              "SUCCESS",
              "Feedback sent successfully.",
              [{text: "OK"}]
            );
          }}
                            style={{
                              flex: 1,
                              paddingHorizontal: 20,
                              paddingVertical: 10,
                              backgroundColor: 'green',
                              alignItems: 'center',
                              marginHorizontal: 5
                            }}>
            <Text style={{
              color: 'white'
            }}>
              Send Feedback
            </Text>
          </TouchableOpacity>
          <Text style={{
            color: 'black',
            fontSize: 18,
            marginVertical: 15
          }}>
            Previous Feedback
          </Text>
          <View style={{
            flexDirection: 'row'
          }}>
            <TouchableOpacity onPress={() => {
              navigation.navigate("TourGuideScreen")
            }}
                              style={{
                                flex: 1,
                                paddingHorizontal: 20,
                                paddingVertical: 10,
                                backgroundColor: 'gray',
                                alignItems: 'center',
                                marginHorizontal: 5
                              }}>
              <Text style={{
                color: 'white'
              }}>
                Go Back
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              Alert.alert(
                "SUCCESS",
                "Request sent successfully.",
                [{text: "OK"}]
              );
            }}
                              style={{
                                flex: 1,
                                paddingHorizontal: 20,
                                paddingVertical: 10,
                                backgroundColor: 'green',
                                alignItems: 'center',
                                marginHorizontal: 5
                              }}>
              <Text style={{
                color: 'white'
              }}>
                Send a Request
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  container: {
    marginVertical: 25,
    paddingHorizontal: 20
  },
  item: {
    shadowColor: 'blue',
    shadowOffset: {
      height: 1,
      width: 2
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 200,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderLeftWidth: 6,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderLeftColor: 'blue',
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10
  },
  textSign: {
    fontSize: 14,
    fontWeight: "bold",
  },

});

export default ProfileScreen;
