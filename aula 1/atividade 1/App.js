//1
// import { Text, View } from 'react-native';
// export default function App() {
// return (
// <View>
// <Text>Olá, mundo!</Text>
// </View>
// );
// }

//2
// import { View, Text } from 'react-native';
// export default function App() {
// return (
// <View style={{ padding: 20 }}>
// <Text style={{ fontSize: 24 }}>
// Bem-vindo!
// </Text>
// </View>
// );
// }

//3
// import { View, Text } from 'react-native';

// export default function App() {
// return (
// <View style={styles.box}>
// <Text>Texto no app</Text>
// <Image source={logo} />
// </View>

// );
// }

//4
// import { StyleSheet, Text } from 'react-native';

//  export default function App() {
//  return (
// <Text style={styles.titulo}>Título</Text>
//  ); }

// const styles = StyleSheet.create({
// titulo: { fontSize: 22, color: 'tomato' },
// });

//5
// import { Image } from 'react-native';

// <Image
// source={{ uri: 'https://site.com/foto.png' }}
// style={{ width: 100, height: 100 }}
// />

// <Image source={require('./logo.png')} />

//6
// import { View, Button, TouchableOpacity, Text } from 'react-native';

// export default function App() {

// return ( 
// <View>
// <Button title="Clique" onPress={() => alert('Oi!')} />
// <TouchableOpacity onPress={() => alert('Toque!')}>
// <Text>Botão personalizado</Text>
// </TouchableOpacity> </View>

// );
// }

//7
// import { useState } from 'react';
// import { TextInput } from 'react-native';
// import { View } from 'react-native';

// export default function App() {
//   const [nome, setNome] = useState('');


// return ( 
// <View>
// <TextInput
// value={nome}
// onChangeText={setNome}
// placeholder="Digite seu nome"
// /> 
// </View>
// );
// }

//8
// import { ScrollView, Text } from 'react-native';
// import { View } from 'react-native';

// export default function App() {

// return (
// <View>
// <ScrollView>
// <Text>Item 1</Text>
// <Text>Item 2</Text>
// <Text>Item 3</Text>
// {/* ...e muitos outros */}
// </ScrollView>
// </View>
// );
// }

//9
// import { View, Text } from 'react-native';

// function Saudacao({ nome }) {

// return ( <Text>Olá, {nome}!</Text> );
// }

// export default function App() {

//  return (
//   <View>
// <Saudacao nome="Ana" />
// <Saudacao nome="Beto" />
// </View>
// );
// }