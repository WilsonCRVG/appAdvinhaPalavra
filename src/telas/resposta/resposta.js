import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function Resposta({route}){
    
    //variaveis para verificação
    const nome = route.params?.nome;
    const [resposta , setResposta] = useState("")
    const [tentativa , setTentativa]=useState(10)
    const [resultado , setResultado]=useState("")

    const [desabilitarwin , setDesabilitarwin]=useState(false)
    const [desabilitarloss , setDesabilitarloss]=useState(false)

    
    function verificarResposta(){
        
    if(nome === resposta){
        setResultado("Acertou 🎉")
        setDesabilitarwin(true)
    }else if(tentativa <= 1){
        setResultado("Perdeu 🚫")
        setDesabilitarloss(true)

        //gambiarra de lei
        setTentativa(0)
        }else{
            setTentativa(tentativa => tentativa - 1)
            setResultado("Errou ❌")
        }
    };

    


    return <>
        <View style={estilos.containner}>
            <View style={estilos.view}>  
                <Text style={estilos.tentativa}>Tentativas</Text>
                <Text style={estilos.tentativaNumero}>{tentativa}</Text>
                <Text style={estilos.resultado}>Resultado: {resultado} </Text>
                <Text style={estilos.dica}>Dica 💡:  {route.params?.dica}</Text>
                
                <TextInput style={estilos.inputresposta} placeholder={"Resposta..."}
                autoCapitalize="characters" onChangeText={resposta=>setResposta(resposta)}/>      
                
                <TouchableOpacity style={[estilos.botao , desabilitarwin && estilos.botaoDesabilitadowin , desabilitarloss && estilos.botaoDesabilitadoloss]} disabled={desabilitarwin} onPress={()=>verificarResposta()}>
                    <Text style={{color:"white"}}>Verificar</Text>
                </TouchableOpacity>
            </View>
        </View>
    </>
}

const estilos = StyleSheet.create({
    containner:{
        flex:1,
        backgroundColor:"pink",
        justifyContent:'center'
    },
    view:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        padding:20
    },
    imagemTopo:{
        alignItems:"center",
        paddingTop:10
    },
    imagem:{
        width:100,
        height:100,
    },
    tentativa:{
        color:"white",
        width:110,
        backgroundColor:"#171515",
        borderRadius:20,
        lineHeight:30,
        textAlign:"center"
    },
    tentativaNumero:{
        fontSize:60,
        color:"#b04900"
    },
    resultado:{
        color:"white",
        width:"50%",
        backgroundColor:"#171515",
        borderRadius:20,
        lineHeight:30,
        marginBottom:20,
        textAlign:"center"
    },
    dica:{
        width:"95%",
        color:"white",
        backgroundColor:"#171515",
        borderRadius:20,
        lineHeight:30,
        paddingLeft:10
    },
    inputresposta:{
        width:'95%',
        height:60,
        backgroundColor:"white",
        borderRadius:20,
        paddingLeft:10,
        marginBottom:20,
        marginTop:20
    },
    botao:{
        width:"100%",
        height:50,
        backgroundColor:"#fc03ba",
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center",
    },
    botaoDesabilitadowin: {
        backgroundColor: '#00ff00'
    },
    botaoDesabilitadoloss:{
        backgroundColor:"#9e0012"
    }
})