import React from 'react'
import {Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'

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
          <View style={styles.item}>
            <View style={{
              flex: 1,
              flexDirection: 'row'
            }}>
              <View style={{
                marginHorizontal: 20,
                marginVertical: 10
              }}>
                <Image style={{
                  marginVertical: 15
                }}
                       source={require('./img.png')}
                       width={40}
                       height={40}
                       resizeMethod='auto'/>
              </View>
              <View style={{
                marginTop: 15
              }}>
                <Text style={{
                  marginVertical: 1,
                  fontSize: 18
                }}>
                  Saman Kumara
                </Text>
                <Text style={{
                  marginVertical: 1,
                  fontSize: 18
                }}>
                  Rating: 5.0
                </Text>
                <View style={[
                  styles.button,
                  {
                    borderColor: 'white'
                  }
                ]}>
                  <Text style={[
                    styles.textSign,
                    {
                      color: '#1f65b5',
                      marginTop: 6
                    }
                  ]}>
                    10,000 LKR / Tour
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Text style={{
            color: 'black',
            fontSize: 18,
            marginVertical: 15
          }}>
            Guide Description
          </Text>
          <Text style={{
            color: '#808080',
            fontSize: 15
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
          <TextInput style={styles.multilineTextInputStyle}
                     multiline={true}
                     numberOfLines={25}/>
          <TouchableOpacity onPress={() => {
            Alert.alert(
              'SUCCESS',
              'Feedback sent successfully.',
              [{
                text: 'OK'
              }]
            )
          }}
                            style={{
                              flex: 1,
                              paddingHorizontal: 20,
                              paddingVertical: 10,
                              backgroundColor: 'green',
                              alignItems: 'center',
                              marginHorizontal: 5,
                              borderRadius: 5,
                              marginTop: 10,
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
          <View style={styles.item1}>
            <View style={{
              flex: 1,
              flexDirection: 'row'
            }}>
              <View style={{
                marginHorizontal: 10,
                marginVertical: 5
              }}>
                <Image style={{
                  marginVertical: 15
                }}
                       source={require('./img.png')}
                       width={20}
                       height={20}
                       resizeMethod='auto'/>
              </View>
              <View style={{
                marginTop: 25
              }}>
                <Text style={{
                  marginVertical: 1,
                  fontSize: 18
                }}>
                  Saman Kumara
                </Text>
                <Text style={{
                  marginVertical: 1,
                  fontSize: 15
                }}>
                  One of the Best Tour guide I have ever met.
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.item1}>
            <View style={{
              flex: 1,
              flexDirection: 'row'
            }}>
              <View style={{
                marginHorizontal: 10,
                marginVertical: 2
              }}>
                <Image style={{
                  marginVertical: 15
                }}
                       source={require('./img.png')}
                       width={20}
                       height={20}
                       resizeMethod='auto'/>
              </View>
              <View style={{
                marginTop: 25
              }}>
                <Text style={{
                  marginVertical: 1,
                  fontSize: 18
                }}>
                  Saman Kumara
                </Text>
                <Text style={{
                  marginVertical: 1,
                  fontSize: 15
                }}>
                  One of the Best Tour guide I have ever met.
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.item1}>
            <View style={{
              flex: 1,
              flexDirection: 'row'
            }}>
              <View style={{
                marginHorizontal: 10,
                marginVertical: 5
              }}>
                <Image style={{
                  marginVertical: 15
                }}
                       source={require('./img.png')}
                       width={20}
                       height={20}
                       resizeMethod='auto'/>
              </View>
              <View style={{
                marginTop: 25
              }}>
                <Text style={{
                  marginVertical: 1,
                  fontSize: 18
                }}>
                  Saman Kumara
                </Text>
                <Text style={{
                  marginVertical: 1,
                  fontSize: 15
                }}>
                  One of the Best Tour guide I have ever met.
                </Text>
              </View>
            </View>
          </View>
          <View style={{
            flexDirection: 'row',
            marginTop: 20
          }}>
            <TouchableOpacity onPress={() => {
              navigation.navigate('TourGuideScreen')
            }}
                              style={{
                                flex: 1,
                                paddingHorizontal: 20,
                                paddingVertical: 10,
                                backgroundColor: 'gray',
                                alignItems: 'center',
                                marginHorizontal: 5,
                                borderRadius: 5
                              }}>
              <Text style={{
                color: 'white'
              }}>
                Go Back
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              Alert.alert(
                'SUCCESS',
                'Request sent successfully.',
                [{
                  text: 'OK'
                }]
              )
            }}
                              style={{
                                flex: 1,
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
                Send a Request
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    justifyContent: 'center',
    borderRadius: 10
  },
  container: {
    marginVertical: 25,
    paddingHorizontal: 20
  },
  multilineTextInputStyle: {
    textAlignVertical: 'top',
    borderColor: '#c4c4c4',
    width: '100%',
    height: 100,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    color: '#808080'
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
    flexWrap: 'wrap'
  },
  item1: {
    backgroundColor: '#eae9e9',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  textSign: {
    fontSize: 14,
    fontWeight: 'bold'
  }
})

export default ProfileScreen
