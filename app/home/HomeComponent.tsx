import React, { useEffect, useState } from "react";

import { View, Text, Button, ImageBackground, StyleSheet } from "react-native";

export default function HomeComponent({navigation}) {
  const [contador, setContador] = useState(1); //ESTADO

  useEffect(() => {
    //se dispara cuando se monta el componete
    //hooks gancho
  }, []);
  const sumar = () => {
    setContador(contador + 1);
  }
  const cambiarPantalla = ()=>{
    navigation.navigate('Principal')
  }
  return (
    <View style={styles.container}>
        <ImageBackground
            source={{
            uri: require("../../assets/fondo.jpg"),
            }}
            style={styles.img}
        >
            <Text>{contador}</Text>
            {contador < 5 && (
                <Button title="Sumar" color="#841584" onPress={() => sumar()} />
            )}
            <Button 
              title="Ingresar"
              color="#841584"
              onPress={()=> cambiarPantalla() }
            />
        </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection:'column'
    }, 
    img: {
        flex: 1,
        justifyContent: "center",
        resizeMode: "cover",
    },
});
