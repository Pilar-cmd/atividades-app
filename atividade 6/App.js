// Exercicio 1

// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// function TelaInicial({ navigation }) {
//   return (
//     <View>
//       <Text>Olá, navegação!</Text>
//       <TouchableOpacity onPress={() => navigation.navigate('Detalhes')}>
//         <Text>Ir para Detalhes</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function TelaDetalhes({ navigation }) {
//   return (
//     <View>
//       <Text>Estou na tela de detalhes</Text>
//       <TouchableOpacity onPress={() => navigation.goBack()}>
//         <Text>Voltar</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Inicio">
//         <Stack.Screen
//           name="Inicio"
//           component={TelaInicial}
//           options={{ title: 'Home' }}
//         />
//         <Stack.Screen
//           name="Detalhes"
//           component={TelaDetalhes}
//           options={{ title: 'Detalhes do Item' }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }



// Exercicio 2

// import React, { useState } from 'react';
// import {
//   View, Text, TextInput, TouchableOpacity, FlatList
// } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// const produtos = [
//   { id: '1', nome: 'Caderno', preco: 18.5, descricao: 'Caderno de 100 folhas' },
//   { id: '2', nome: 'Caneta', preco: 3.5, descricao: 'Caneta azul' },
//   { id: '3', nome: 'Mochila', preco: 89.9, descricao: 'Mochila escolar' },
//   { id: '4', nome: 'Estojo', preco: 22, descricao: 'Estojo com zíper' },
// ];

// function TelaInicial({ navigation }) {
//   const [nome, setNome] = useState('');
//   const [email, setEmail] = useState('');
//   const [idade, setIdade] = useState('');

//   return (
//     <View>
//       <TextInput placeholder="Nome" value={nome} onChangeText={setNome} />
//       <TextInput placeholder="E-mail" value={email} onChangeText={setEmail} />
//       <TextInput placeholder="Idade" value={idade} onChangeText={setIdade} />

//       <TouchableOpacity
//         onPress={() => navigation.navigate('Detalhes', { nome, email, idade })}
//       >
//         <Text>Cadastrar</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => navigation.navigate('Lista')}>
//         <Text>Ver produtos</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function TelaDetalhes({ route, navigation }) {
//   const { nome, email, idade } = route.params;

//   return (
//     <View>
//       <Text>Nome: {nome}</Text>
//       <Text>E-mail: {email}</Text>
//       <Text>Idade: {idade}</Text>
//       <TouchableOpacity onPress={() => navigation.goBack()}>
//         <Text>Voltar</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function TelaLista({ navigation }) {
//   return (
//     <View>
//       <TouchableOpacity onPress={() => navigation.navigate('Notificacoes')}>
//         <Text>Notificações</Text>
//       </TouchableOpacity>

//       <FlatList
//         data={produtos}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             onPress={() =>
//               navigation.navigate('Produto', {
//                 nome: item.nome,
//                 preco: item.preco,
//                 descricao: item.descricao,
//               })
//             }
//           >
//             <Text>{item.nome} - R$ {item.preco.toFixed(2)}</Text>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// }

// function TelaProduto({ route, navigation }) {
//   const { nome, preco, descricao } = route.params;
//   const pedidoId = route.params?.pedidoId || 'N/A';

//   return (
//     <View>
//       <Text>Produto: {nome}</Text>
//       <Text>Preço: R$ {Number(preco).toFixed(2)}</Text>
//       <Text>Descrição: {descricao}</Text>
//       <Text>Pedido #{pedidoId}</Text>

//       <TouchableOpacity onPress={() => navigation.goBack()}>
//         <Text>Voltar à lista</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function Notificacoes() {
//   return <Text>Tela de notificações</Text>;
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Inicio" component={TelaInicial} />
//         <Stack.Screen name="Detalhes" component={TelaDetalhes} />
//         <Stack.Screen name="Lista" component={TelaLista} />
//         <Stack.Screen name="Produto" component={TelaProduto} />
//         <Stack.Screen name="Notificacoes" component={Notificacoes} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }



// Exercicio 3

// Exercicio 4

// Exercicio 5

// Exercicio 6

// Exercicio 7

// Exercicio 8
