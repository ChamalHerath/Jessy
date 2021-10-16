import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

const TourGuideScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={{
        textTransform: 'uppercase',
        marginBottom: 100,
        fontSize: 30,
        color: 'blue'
      }}>
        TOUR GUIDE RESULTS
      </Text>
      <TouchableOpacity onPress={() => {
        navigation.navigate("ProfileScreen")
      }}>
        <View>
          <Text>aaaa</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    alignItems: "center",
    paddingHorizontal: 20
  }
});

export default TourGuideScreen;
