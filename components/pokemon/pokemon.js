import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import styleSheet from "./styles";
import { FlatListProps } from "react-native";
import CONSTANST from "../../confi/constans";

const Pokemon = (props) =>{
  const {pokemon} = props;

  const [pokemonType, setPokemonType] = useState(null);

  const getPokemonType =async()=>{
    try{
      const res= await axios.get(`${CONSTANST.BASE_API_URL}/${pokemon.name}`);
      setPokemonType(res.data);
     
  } catch(error){
   console.error(error);
  } 
  };

  useEffect(()=>{
  getPokemonType();
  },[]);
//<Text style={styleSheet.type}>Tipo: {pokemonType?.types[0].type?.name}</Text>
      //<Text style={styleSheet.type}>Species: {pokemonType?.species?.name}</Text>
      
    return(
      
      <View key={pokemon.name} style={styleSheet.row}>
         <TouchableOpacity
         onPress={()=> Alert.alert("Nombre: "+ pokemon.name +'\n' +"  Tipo: "+ pokemonType?.types[0].type?.name+ ' '+"  Species: "+pokemonType?.species?.name )}
         >
         <Image style={{width:150,height:150}} source={{uri:pokemonType?.sprites?.front_default}}/>
           </TouchableOpacity>
     
      
      
      
      
      </View>
    )
};
export default Pokemon;
