import { Axios } from "axios";
import React from "react";
import { StyleSheet } from 'react-native';


const styles ={
    container:{
        flex:1,
        marginTop:40,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'red'
    },
    row:{
        padding: 20,
        backgroundColor:'#87CEFA',
        paddingLeft:5,
        borderWidth:10,
        borderColor:'#6495ED',
        width:200
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
     type:{
         padding: 8,
         borderRadius: 8,
         backgroundColor:'green'
     },
     name:{
        padding: 8,
        borderRadius: 8,
        backgroundColor:'green'
     }
}

const styleSheet = StyleSheet.create(styles);
export default styleSheet;
