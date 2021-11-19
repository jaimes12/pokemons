import { Axios } from "axios";
import React from "react";
import { StyleSheet, Dimensions } from 'react-native';

const {height,width}=Dimensions.get('window');

const styles ={
    container:{
        flex:1,
        padding:60,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'#eb3458'
    },
    row:{
        padding: 20,
        backgroundColor:'#87CEFA',
        paddingLeft:5,
        borderWidth:10,
        borderColor:'#6495ED',
          
        borderRadius:15,
        height:100
     },
     
     title:{
         color:'white',
         fontSize:60
     },
     imagen:{
         backgroundColor:'blue',
         marginTop:40,
         color:'white',
         borderRadius:15
        
     },
     image:{
        height:300, width: 400, borderRadius:10, marginTop:10
     },
     border:{
         flex:1,
         borderColor:'#000',
         borderWidth:15,
        backgroundColor:'blue',
        borderRadius:15,
       width: width * 0.8
      },
      muestaPokemon:{
        flex:1,
        backgroundColor:'#ccf6ff'
      },
      pokeScreen:{
          backgroundColor:'#ccf6ff',
      height:height*0.4,
      alignItems:'center'
      },
      rowContainer:{
      padding:8,
      backgroundColor:'transparent',
      shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,

    },
    imagPokemon:{
        width:200,
        height:200,
        marginTop:10,
        
        
        
    },
    abilities:{
        alignItems:'center',
     justifyContent:'flex-end',
     
        
    },
    namePokemon:{
        fontWeight:'bold' ,
        paddingLeft:15,
        paddingRight:15,
        borderRadius:5,
        fontSize:20,
        backgroundColor:'#F9665C',
        marginLeft:110,
        marginBottom:30,
        justifyContent:'flex-end',
    },
    typePokemon:{
        fontWeight:'bold' ,
       
        paddingLeft:15,
        paddingRight:15,
        borderRadius:5,
        backgroundColor:'#F9A1A1',
        fontSize:20,
    },
    typePokemonGrass:{
        fontWeight:'bold' ,
       
        paddingLeft:15,
        paddingRight:15,
        borderRadius:5,
        backgroundColor:'#F9A1A1',
        fontSize:20,
    },
    id:{
      backgroundColor:'#F9665C',
      textAlign: 'center',
      borderRadius:5,
    },
    imagScreen:{
        
        
    }
     
}

const styleSheet = StyleSheet.create(styles);
export default styleSheet;
