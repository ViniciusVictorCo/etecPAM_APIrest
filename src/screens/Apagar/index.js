import React, {useState} from "react";
import {  View, Text, TextInput, Button } from "react-native";
import style from './style';

export default function Apagar(){

    return(
    <View style={style.container}>
         <Text style={style.label}>Username:</Text>
         <TextInput style={style.input} />

         <Text style={style.label}>Email:</Text>
         <TextInput style={style.input} />

         <Text style={style.label}>Senha:</Text>
         <TextInput style={style.input} />

         <Button title="Registre-se" />
    </View>

    )
       

}