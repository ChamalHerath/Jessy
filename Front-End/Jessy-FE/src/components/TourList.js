import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";

const TourList = ({navigation, route}) => {
  const {data} = route.params;
  const [searchData, setSearchData] = useState();
  const [query, setQuery] = useState();


  return (
    <View style={styles.container}>
      <Text>Tour List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TourList;
