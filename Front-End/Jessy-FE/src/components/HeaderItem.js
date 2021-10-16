import React from "react";
import {Header, Icon,} from "react-native-elements";

const HeaderItem = () => {
  return (
    <Header
      statusBarProps={{barStyle: "light-content"}}
      barStyle="light-content"
      leftComponent={
        <Icon
          name="navicon"
          type="font-awesome"
          color="#1970E6"
          onPress={() => {
            alert("Item Clicked");
          }}
        />
      }
      centerComponent={{
        text: "",
        style: {
          color: "#1970E6",
          fontSize: 18,
        },
      }}
      rightComponent={
        <Icon
          name="bell"
          type="font-awesome"
          color="#1970E6"
          onPress={() => {
            alert("Item Clicked");
          }}
        />
      }
      containerStyle={{
        backgroundColor: "#FFF",
        justifyContent: "space-around",
      }}
    />
  );
};

export default HeaderItem;
