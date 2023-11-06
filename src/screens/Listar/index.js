import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";
import style from './style';

export default function Listar() {

    const [username, setUsername] = useState('');
    const [cpf, setCpf] = useState('');
    const [rendimento, setRendimento] = useState('');
    const [data, setData] = useState([]);

    const handleRegister = () => {
        const newData = {
            id: new Date().getTime(),
            username: username,
            cpf: cpf,
            rendimento: rendimento,
        };
        setData([...data, newData]);
        setUsername('');
        setCpf('');
        setRendimento('');
    };


    return (

        <View style={style.container}>
            <Text style={style.label}>Nome:</Text>
            <TextInput style={style.input} 
            value={username}
            onChangeText={(text) => setUsername(text)} />

            <Text style={style.label}>CPF:</Text>
            <TextInput style={style.input} 
            value={cpf}
            onChangeText={(text) => setCpf(text)}
            keyboardType="cpf"  />

            <Text style={style.label}>Rendimento:</Text>
            <TextInput style={style.input} 
            value={rendimento}
            onChangeText={(text) => setRendimento(text)} />

            <Button title="Registre-se" onPress={handleRegister} />

            <Text style={style.label}>Usuario ja registrados:</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={style.item}>
                        <Text>Username: {item.username}</Text>
                        <Text>Email: {item.email}</Text>
                        <Text>Password: {item.password}</Text>
                    </View>
                )}
            />
        </View>
    );
};
