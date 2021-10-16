import React from "react";
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const TourGuideScreen = ({navigation}) => {
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
            TOUR GUIDE RESULTS
          </Text>

          <TouchableOpacity style={styles.item}
                            onPress={() => {
                              navigation.navigate("ProfileScreen")
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
                fontSize: 18
              }}>
                MUDIYANSELAGE JAYATILAKA
              </Text>
              <Text style={{
                marginVertical: 3,
                fontSize: 15,
                color: "red"
              }}>
                Rating: 5.0
              </Text>
              <Text style={{
                marginVertical: 3,
                fontSize: 16,
                color: "blue"
              }}>
                Language : English
              </Text>
              <Text style={{
                marginVertical: 3,
                fontSize: 16,
                color: "blue"
              }}>
                Reg. No : N-o460
              </Text>
              <View style={[
                styles.button,
                {
                  borderColor: "white",
                },
              ]}>
                <Text style={[
                  styles.textSign,
                  {
                    color: "#1f65b5",
                  },
                ]}>
                  View Profile
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}
                            onPress={() => {
                              navigation.navigate("ProfileScreen1")
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
                fontSize: 18
              }}>
                NIMAL WEERASINGHE
              </Text>
              <Text style={{
                marginVertical: 3,
                fontSize: 15,
                color: "red"
              }}>
                Rating: 5.0
              </Text>
              <Text style={{
                marginVertical: 3,
                fontSize: 16,
                color: "blue"
              }}>
                Language : German
              </Text>
              <Text style={{
                marginVertical: 3,
                fontSize: 16,
                color: "blue"
              }}>
                Reg. No : N-0015
              </Text>
              <View style={[
                styles.button,
                {
                  borderColor: "white",
                },
              ]}>
                <Text style={[
                  styles.textSign,
                  {
                    color: "#1f65b5",
                  },
                ]}>
                  View Profile
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
                            onPress={() => {
                              navigation.navigate("ProfileScreen2")
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
                fontSize: 18
              }}>
                SARATH SILVA
              </Text>
              <Text style={{
                marginVertical: 3,
                fontSize: 15,
                color: "red"
              }}>
                Rating: 5.0
              </Text>
              <Text style={{
                marginVertical: 3,
                fontSize: 16,
                color: "blue"
              }}>
                Language : English
              </Text>
              <Text style={{
                marginVertical: 3,
                fontSize: 16,
                color: "blue"
              }}>
                Reg. No : N-0003
              </Text>
              <View style={[
                styles.button,
                {
                  borderColor: "white",
                },
              ]}>
                <Text style={[
                  styles.textSign,
                  {
                    color: "#1f65b5",
                  },
                ]}>
                  View Profile
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
                            onPress={() => {
                              navigation.navigate("ProfileScreen3")
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
                fontSize: 18
              }}>
                VITHANEGE HEMACHANDRA
              </Text>
              <Text style={{
                marginVertical: 3,
                fontSize: 15,
                color: "red"
              }}>
                Rating: 4.0
              </Text>
              <Text style={{
                marginVertical: 3,
                fontSize: 16,
                color: "blue"
              }}>
                Language : English
              </Text>
              <Text style={{
                marginVertical: 3,
                fontSize: 16,
                color: "blue"
              }}>
                Reg. No : N-0446
              </Text>
              <View style={[
                styles.button,
                {
                  borderColor: "white",
                },
              ]}>
                <Text style={[
                  styles.textSign,
                  {
                    color: "#1f65b5",
                  },
                ]}>
                  View Profile
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
                            onPress={() => {
                              navigation.navigate("ProfileScreen")
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
                fontSize: 18
              }}>
                UDAYA SANTHA
              </Text>
              <Text style={{
                marginVertical: 3,
                fontSize: 15,
                color: "red"
              }}>
                Rating: 4.0
              </Text>
              <Text style={{
                marginVertical: 3,
                fontSize: 16,
                color: "blue"
              }}>
                Language : English
              </Text>
              <Text style={{
                marginVertical: 3,
                fontSize: 16,
                color: "blue"
              }}>
                Reg. No : N-o460
              </Text>
              <View style={[
                styles.button,
                {
                  borderColor: "white",
                },
              ]}>
                <Text style={[
                  styles.textSign,
                  {
                    color: "#1f65b5",
                  },
                ]}>
                  View Profile
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
                            onPress={() => {
                              navigation.navigate("ProfileScreen")
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
                fontSize: 18
              }}>
                WEERASIRI PEIRIS
              </Text>
              <Text style={{
                marginVertical: 3,
                fontSize: 15,
                color: "red"
              }}>
                Rating: 3.0
              </Text>
              <Text style={{
                marginVertical: 3,
                fontSize: 16,
                color: "blue"
              }}>
                Language : German
              </Text>
              <Text style={{
                marginVertical: 3,
                fontSize: 16,
                color: "blue"
              }}>
                Reg. No : N-0023
              </Text>
              <View style={[
                styles.button,
                {
                  borderColor: "white",
                },
              ]}>
                <Text style={[
                  styles.textSign,
                  {
                    color: "#1f65b5",
                  },
                ]}>
                  View Profile
                </Text>
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

export default TourGuideScreen;
