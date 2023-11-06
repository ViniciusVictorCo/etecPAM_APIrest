import React from "react";
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import style from "./style";

export default function Header(){
    return(
        <View style = {style.viewHeader}>
            <TouchableOpacity>
                {/* <Entypo name="menu" size={24} color="black" /> */}
            </TouchableOpacity>    
                {/* <Text style = {style.textHeader}>Filmaço.com</Text> */}

        </View>
    )
}