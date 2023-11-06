import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import style from './style';

import Header from '../../components/header/index';
import Search from '../../components/searchBar/index';
import BannerFilmes from '../../components/bannerFilmes/index';

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';

import titulo from '../../components/bannerFilmes/style';

import React, { useState, useEffect } from 'react';

export default function App() {

  const data = [
    { id: '1', title: 'Cadastrar', image: require('../../img/cadastrar.png') },
    { id: '2', title: 'Listar', image: require('../../img/listar.png') },
    { id: '3', title: 'Editar', image: require('../../img/editar.png') },
    { id: '4', title: 'Excluir', image: require('../../img/excluir.png') }
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={style.containerCard} onPress={() => Navigation.navigate(item.title)}>
      <Image source={item.image} style={style.imagemCard} />
      <Text style={style.tituloCard}>{item.title}</Text>
    </TouchableOpacity>
  );

  const Navigation = useNavigation();

  return (

    <View style={style.container}>

      <Header />
      <Search />
      <BannerFilmes />


      <Text style={titulo.textoBanner}>Serviços</Text>
      <View style={{ width: '90%' }}>

        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={style.containerCardSection}
          columnWrapperStyle={style.columnWrapper}
        />

      </View>

    </View>
  );
}
