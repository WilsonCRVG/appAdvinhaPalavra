import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet,Text, TextInput, TouchableOpacity, View } from "react-native";
//import { SafeAreaView } from "react-native-safe-area-context";

export default function Home({navigation}){
    const [nome , setNome] = useState('')
    const [dica , setDica] = useState('')


    
    return<>
        <View style={estilos.containner}>
                <Text style={estilos.textos}>Digite um Nome e uma Dica </Text>   
                
                <TextInput style={estilos.textInput} placeholder={"Digite o nome do que você quer esconder ..."}
                autoCapitalize="characters" onChangeText={nome=>setNome(nome)}/>

                <TextInput style={estilos.textInput} placeholder={"Agora digite uma dica ..."}
                autoCapitalize="characters" onChangeText={dica=>setDica(dica)}/>      
                
                <TouchableOpacity style={estilos.botao} onPress={()=> navigation.navigate("Resposta",{nome:nome,dica:dica})}>
                    <Text style={{color:"white"}}>Vamos Lá ...</Text>
                </TouchableOpacity>
        </View>
    </>
}

const estilos = StyleSheet.create({ 
    containner:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#6e1f9c",
        padding:20
    },
    textos:{
        color:"white",
        fontSize:28,
        paddingBottom:100,
        textAlign:"center"
    },
    textInput:{
        width:'95%',
        height:60,
        backgroundColor:"white",
        borderRadius:20,
        paddingLeft:10,
        marginBottom:20
    },
    botao:{
        backgroundColor:"#fc03ba",
        width:"100%",
        height:50,
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center"
    },
});