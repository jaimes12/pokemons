import { Axios } from "axios";
import React from "react";
import { View, Text, ScrollView } from 'react-native';
import styleSheet from "./styles";
import { FlatListProps } from "react-native";

const Screen = (props) =>{
    return(
      <View style={styleSheet.container}>
         {props.children}
      </View>
    );
}
export default Screen;
