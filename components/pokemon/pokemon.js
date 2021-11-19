import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import styleSheet from "./styles";
import { FlatListProps } from "react-native";
import CONSTANST from "../../confi/constans";
import imagenn from '../../assets/pokebola.png';
const Pokemon = (props) =>{
  const {pokemon,onPressPokemon} = props;

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
  //Alert.alert(pokemon.name +"\n"+ pokemonType?.types[0].type?.name)
  //<Text>{pokemon.name}</Text>
          //<Text>{pokemonType?.types[0].type?.name}</Text>
          //<Text>{pokemonType?.species?.name}</Text>
//<Text style={styleSheet.type}>Tipo: {pokemonType?.types[0].type?.name}</Text>
      //<Text style={styleSheet.type}>Species: {pokemonType?.species?.name}</Text>
    
        /*  PARA EL BOTON DESAPARECE --- const [selectpo,setpok]=useState(false);
      const setpokemonTodo= async()=>{
        setpok(!selectpo)}
        <Text>{selectpo? "Nombre: " + pokemon.name +"\n"+"Tipo: " + pokemonType?.types[0].type?.name +"\n"+ "ID: "+pokemonType?.id : ""}</Text>
<Image style={styleSheet.poima} source={{uri:(selectpo? pokemonType?.sprites?.front_default : "")}}/>
 <Image style={styleSheet.poima} source={imagenn}/>
      */
       const handlerPressPokemon =() =>{
         onPressPokemon(pokemon, pokemonType);
       }
      
      
      
    return(
      
      <TouchableOpacity  style={styleSheet.row} onPress={handlerPressPokemon}>
           
<Text style={styleSheet.namePokemon}>{pokemon.name }</Text>
<Text>  </Text>
<Text style={styleSheet.typePokemon}>{pokemonType?.types[0].type?.name}</Text>
           
      </TouchableOpacity>
      
    )
};
export function setpokemonTodo(){ };
export default Pokemon;
