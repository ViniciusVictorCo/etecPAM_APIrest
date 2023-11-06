import React, {useState} from "react";
import {  View, Text, TextInput, Button } from "react-native";
import style from './style';

export default function Atualizar(){

    return(
    <View style={style.container}>
         <Text style={style.label}>Username:</Text>
         <TextInput style={style.input} />

         <Text style={style.label}>Email:</Text>
         <TextInput style={style.input} />

         <Text style={style.label}>Senha:</Text>
         <TextInput style={style.input} />

         <Button title="Registre-se" />

         <Text style={style.label}>Usuario ja registrados:</Text>
            {/* <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={style.item}>
                        <Text>Username: {item.username}</Text>
                        <Text>Email: {item.email}</Text>
                        <Text>Password: {item.password}</Text>
                    </View>
                )}
            /> */}
    </View>

    )
       

}