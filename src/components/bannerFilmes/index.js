import React from "react";
import { Image, Text } from "react-native";
import style from "./style";

export default function BannerFilmes(){
        
    return(

       <>

            <Text style = {style.textoBanner}>Bem-Vindo ao nosso sistema de Imposto de Renda!</Text>
            <Image style = {style.imagemBanner} source = {require(`../../img/innovation.gif`)} />

       </> 

    );
}