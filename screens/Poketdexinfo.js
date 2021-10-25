import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import Screen from '../components/Screen';
import styleSheet from '../components/styles';
import CONSTANST from '../confi/constans';

const Pokedexinfo = () =>{
const [pokemons, setPokenons] = useState( [] );

const getPokemons = async () =>{
    try{
        const response = await axios.get(`${CONSTANST.BASE_API_URL}?limit=150`);
        setPokenons(response.data.results);
    } catch(error){
     console.error(error);
    }
}
useEffect(()=>{
    getPokemons();
}, [])

getPokemons();

 return (
 <Screen>
<Text style={styleSheet.title}>POKEMONS</Text>
<ScrollView>
    {pokemons.map(pokemon =>(
         <View style={styleSheet.row}>
           <Text>{pokemon.name}</Text>
           </View>))}
</ScrollView>
 </Screen>)
}
export default Pokedexinfo;