import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from 'react-native';
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

    return(
      <View key={pokemon.name} style={styleSheet.row}> 
      <Text style={styleSheet.name}>{pokemon.name}</Text>
      <Text style={styleSheet.type}>{pokemonType?.types[0].type?.name}</Text>
      </View>
    )
};
export default Pokemon;
