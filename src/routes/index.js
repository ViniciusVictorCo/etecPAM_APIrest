import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Stack from './stack'
import About from '../screens/About'
import Listar from '../screens/Listar'
import Cadastrar from '../screens/Cadastrar'
import Apagar from '../screens/Apagar'
import Atualizar from '../screens/Ataualizar'


export default function Routes(){
    const Drawer = createDrawerNavigator();
    return(

        <Drawer.Navigator>


            <Drawer.Screen name ='Inicio' component = {Stack}/>
            <Drawer.Screen name ='Sobre nós' component = {About} />
            <Drawer.Screen name ='Cadastrar' component = {Cadastrar} />
            <Drawer.Screen name ='Listar' component = {Listar} />
            <Drawer.Screen name ='Editar' component = {Atualizar} />
            <Drawer.Screen name ='Excluir' component = {Apagar} />



        </Drawer.Navigator>

    )
}