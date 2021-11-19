import { Axios } from "axios";
import React from "react";
import { View, Text, ScrollView } from 'react-native';
import styleSheet from "./styles";
import { FlatListProps } from "react-native";

const Screen = ({bgColor, children}) =>{
  const calculatedstyleSheet ={};
  if(bgColor){
    calculatedstyleSheet.container={
      backgroundColor: bgColor,
    };
  }
    return(
      
      <View style={styleSheet.container}>
         {children}
      </View>
    );
}
export default Screen;
