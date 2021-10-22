import React from "react";
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const TourList = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={{
            textTransform: 'uppercase',
            marginBottom: 10,
            fontSize: 30,
            color: 'blue'
          }}>
            TOUR REQUESTS
          </Text>

          <TouchableOpacity style={styles.item}
                            onPress={() => {
                              navigation.navigate("")
                            }}>
            <View style={{
              alignItems: 'center',
              flex: 1
            }}>
              <Image style={{
                marginVertical: 15
              }}
                     source={require("./user.png")}
                     width={40}
                     height={40}
                     resizeMethod="auto"
              />
              <Text style={{
                marginVertical: 3,
                fontSize: 18,
                fontWeight: "bold"
              }}>
                Chamal Janadara
              </Text>
              <Text style={{
                marginVertical: 3,
                fontSize: 16,
                color: "blue"
              }}>
                Requesting for you as his Tour Guide
              </Text>
              <View style={[
                styles.button,
                {
                  borderColor: "white",
                },
              ]}>
                <TouchableOpacity onPress={() => {
              navigation.navigate('Categories')
            }}
                              style={{
                                flex: 1,
                                margin: 20,
                                paddingHorizontal: 20,
                                paddingVertical: 10,
                                backgroundColor: 'green',
                                alignItems: 'center',
                                marginHorizontal: 5,
                                borderRadius: 5
                              }}>
              <Text style={{
                color: 'white'
              }}>
                ACCEPT
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              Alert.alert(
                'SUCCESS',
                'Contact Details Send Successfully',
                [{
                  text: 'OK'
                }]
              )
            }}
                              style={{
                                flex: 1,
                                paddingHorizontal: 20,
                                paddingVertical: 10,
                                backgroundColor: 'red',
                                alignItems: 'center',
                                marginHorizontal: 5,
                                borderRadius: 5
                              }}>
              <Text style={{
                color: 'white'
              }}>
                REJECT
              </Text>
            </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
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
    alignItems: "center",
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
    width: '100%',
    height: 250,
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
    margin: 5
  },

});

export default TourList;
