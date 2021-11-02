import { StatusBar } from 'expo-status-bar';
import React, { Component, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import Screen from '../components/screen';
import styleSheet from '../components/screen/styles';
import CONSTANST from '../confi/constans';
import Pokemon from '../components/pokemon';

const Pokedexinfo = () =>{
const [pokemons, setPokenons] = useState( [] );

const getPokemons = async () =>{
    try{
        const res= await axios.get(`${CONSTANST.BASE_API_URL}?limit=150`);
        setPokenons(res.data.results);
       
    } catch(error){
     console.error(error);
    } 
}

//==============================================

//adjwiauhfjiasnduiadwdwad=====================================
useEffect(()=>{
    getPokemons();
}, [])


 return (
 <Screen>
<Text style={styleSheet.title}>POKEMONS</Text>
<ScrollView>
    {pokemons.map((pokemon) =>(
    <Pokemon pokemon={pokemon}/>
     ))}   
        
</ScrollView>

 </Screen>)
}

export default Pokedexinfo;