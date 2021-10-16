import React, {useState} from 'react'
import {Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import axios from 'axios'

const ProfileScreenKandy = ({navigation}) => {
  const [title, setTitle] = useState('')
  const [rating, setRating] = useState(5)
  const [dummy, setDummy] = useState([
    {name: 'Danny Jonson', comment: 'One of the Best Tour guide I have ever met.'}
  ])

  const onChangeText = text => {
    setTitle(text)
  }

  const evaluate = () => {
    const data = {
      comment: title.trim()
    }
    axios.post('https://seentiment-jessy.herokuapp.com/api/SentimentAnalysis', data).then(response => {
      setRating(response.data.prediction)
      setDummy([...dummy,{name: 'Chamal Janadara', comment: data.comment}])
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={{
            color: 'red',
            fontSize: 20,
            marginBottom: 15
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
                       source={require('./user.png')}
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
                  KUMARA DHARMARATNE
                </Text>
                <Text style={{
                  marginVertical: 1,
                  fontSize: 18
                }}>
                  Rating: {rating}.0
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
                    500 USD / Tour
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
            Tour guides lead visitors, individually or in groups, on tours less than a day in length. Tour guides ensure that itineraries are met and that customers are being informed in an entertaining manner the location they are touring. They are also responsible for ensuring the safety of the group and ensuring that tour groups remain together.
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
                     onChangeText={title => onChangeText(title)}
                     value={title}
                     numberOfLines={25}/>
          <TouchableOpacity onPress={evaluate}
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
          {dummy.reverse().map(x => (
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
                    {x.name}
                  </Text>
                  <Text style={{
                    marginVertical: 1,
                    fontSize: 15
                  }}>
                    {x.comment}
                  </Text>
                </View>
              </View>
            </View>
          ))}
          <View style={{
            flexDirection: 'row',
            marginTop: 20
          }}>
            <TouchableOpacity onPress={() => {
              navigation.navigate('QuizScreen')
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
    marginVertical: 20,
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

export default ProfileScreenKandy
