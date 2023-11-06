import React, {useState} from "react";
import {  View, Text, TextInput, Button } from "react-native";
import style from './style';

export default function Cadastrar(){

    return(
    <View style={style.container}>
         <Text style={style.label}>Nome:</Text>
         <TextInput style={style.input} />

         <Text style={style.label}>CPF:</Text>
         <TextInput style={style.input} />

         <Text style={style.label}>Rendimento:</Text>
         <TextInput style={style.input} />

         <Button title="Registre-se" />
    </View>

    )
       

}