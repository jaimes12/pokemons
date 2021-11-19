import { StatusBar } from 'expo-status-bar';
import React, { Component, useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import Screen from '../components/screen';
import styleSheet from '../components/screen/styles';
import CONSTANST from '../confi/constans';
import Pokemon, {setpokemonTodo} from '../components/pokemon';
import imagenn from '../assets/pokebola.png';
import COLORS from '../confi/colors';

const Pokedexinfo = () =>{
const [pokemons, setPokenons] = useState( [] );
//arreglo de los pokemones para la pantallita
const [[pokemon, pokemonType],setPokemon]=useState([])
const getPokemons = async () =>{
    try{
        const res= await axios.get(`${CONSTANST.BASE_API_URL}?limit=200`);
        setPokenons(res.data.results);
       
    } catch(error){
     console.error(error);
    } 
}

//=====================para el boton chido=========================

/*const handlerPressPokemon=(pokemon, pokemonType)=>{
    setPokemon([pokemon,pokemonType])
    console.log(pokemon,pokemonType);
}*/

//cmabiar colores del type

const handlerPressPokemon = (pokemon, pokemonType)=>{
    setPokemon([pokemon,pokemonType])
    
    if(pokemonType.types[0].type.name === "grass"){
        console.log('alooo')
        const colorType={
            backgroundColor:'yellow'
        }
    }
}

//adjwiauhfjiasnduiadwdwad=====================================
useEffect(()=>{
    getPokemons();
}, [])



 return (
 <Screen bgColor={COLORS.RED}>

<View style={styleSheet.border}>
<View style={styleSheet.pokeScreen}>
    <View style={styleSheet.imagScreen}>
    {pokemonType &&(
 <Text style={styleSheet.id}>{"ID: "+pokemonType.id}</Text>
    )}
{pokemonType &&(
 <Image source={{uri: pokemonType.sprites.front_default}} style={styleSheet.imagPokemon} />
    )}
    </View>
    <View style={styleSheet.abilities}>
    {pokemon &&(
 <Text style={styleSheet.namePokemon}>{pokemon.name}</Text>
    )}
    
    {pokemonType &&(
 <Text style={styleSheet.typePokemon}  >{pokemonType.types[0].type.name}</Text>
    )}
    </View>
</View>
<ScrollView key={pokemons.name} style={styleSheet.muestaPokemon}>


{pokemons.map((pokemon) =>(
    <View key={pokemon.name} style={styleSheet.rowContainer}>
    <Pokemon onPressPokemon={handlerPressPokemon} pokemon={pokemon}/>
  </View>   
  ))}   

</ScrollView>
</View>
 </Screen>)
}

export default Pokedexinfo;