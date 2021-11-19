import { Axios } from "axios";
import React from "react";
import { StyleSheet } from 'react-native';


const styles ={
    container:{
        flex:1,
        marginTop:40,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'#EF8277'
    },
    row:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'flex-end',
        paddingHorizontal: 8,
        paddingVertical:5,
        backgroundColor:'#87CEFA',
        paddingLeft:5,
        borderWidth:10,
        borderColor:'#6495ED',
        
        borderRadius:10,
     },
     row1:{
         
        padding: 20,
        backgroundColor:'green',
        paddingLeft:5,
        borderWidth:10,
        borderColor:'#6495ED',
        width:200
     },
     title:{
         color:'white',
         fontSize:60
     },
     typePokemon:{
         padding: 8,
         borderRadius: 8,
         backgroundColor:'#eb3453'
     },
     name:{
        padding: 8,
        borderRadius: 8,
        backgroundColor:'green'
     },
     imag:{
         width:50,
         height:50
     },
     namePokemon:{
        alignItems: 'center',
        
        
        fontWeight:'bold' ,
        
        padding:5
     },
     poima:{
        width:150,
        height:100,
        alignItems: 'center',
        paddingLeft:25,
     },
     
}

const styleSheet = StyleSheet.create(styles);
export default styleSheet;
