import React from "react";
import {TextInput, View, TouchableOpacity} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import style from "./style";

export default function SearchBar(){
    return(

        <View style = {style.containerSearch}>
            <FontAwesome style = {style.iconSearch} name="search" size={24} color="#263238" />
            <TextInput 
                placeholder="Digite um de nossos serviços"
                style = {style.inputSearch}
            />
        </View>

    )
}