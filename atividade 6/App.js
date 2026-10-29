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

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();

// function TelaHome() {
//   const [contador, setContador] = useState(0);

//   return (
//     <View>
//       <Text>Contador: {contador}</Text>
//       <TouchableOpacity onPress={() => setContador(contador + 1)}>
//         <Text>Incrementar</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function TelaBusca() {
//   const [texto, setTexto] = useState('');

//   return (
//     <View>
//       <TextInput
//         placeholder="Digite para buscar"
//         value={texto}
//         onChangeText={setTexto}
//       />
//       <Text>Busca: {texto}</Text>
//     </View>
//   );
// }

// function TelaPerfil() {
//   return <Text>Meu Perfil</Text>;
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={{
//           tabBarActiveTintColor: '#28a745',
//           tabBarInactiveTintColor: '#999',
//         }}
//       >
//         <Tab.Screen
//           name="Home"
//           component={TelaHome}
//           options={{
//             tabBarLabel: 'Início',
//             tabBarIcon: () => <Text>H</Text>,
//           }}
//         />

//         <Tab.Screen
//           name="Busca"
//           component={TelaBusca}
//           options={{
//             tabBarLabel: 'Busca',
//             tabBarIcon: () => <Text>B</Text>,
//           }}
//         />

//         <Tab.Screen
//           name="Perfil"
//           component={TelaPerfil}
//           options={{
//             tabBarLabel: 'Perfil',
//             tabBarIcon: () => <Text>P</Text>,
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }



// Exercicio 4

// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// const Drawer = createDrawerNavigator();

// function TelaHome({ navigation }) {
//   return (
//     <View>
//       <Text>Deslize da esquerda para abrir o menu</Text>

//       <TouchableOpacity
//         onPress={() => navigation.navigate('Config', { tema: 'escuro' })}
//       >
//         <Text>Ir para Config com tema</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function TelaConfiguracoes({ route }) {
//   const tema = route.params?.tema || 'claro';

//   return <Text>Tema selecionado: {tema}</Text>;
// }

// function TelaSobre() {
//   return <Text>Sobre o aplicativo</Text>;
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen
//           name="Home"
//           component={TelaHome}
//           options={{ title: 'Início' }}
//         />
//         <Drawer.Screen
//           name="Config"
//           component={TelaConfiguracoes}
//           options={{ title: 'Configurações' }}
//         />
//         <Drawer.Screen name="Sobre" component={TelaSobre} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }



// Exercicio 5

// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity } from 'react-native';
// import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// const filmes = [
//   { id: '1', titulo: 'Matrix', ano: 1999 },
//   { id: '2', titulo: 'Shrek', ano: 2001 },
//   { id: '3', titulo: 'Toy Story', ano: 1995 },
//   { id: '4', titulo: 'Avatar', ano: 2009 },
//   { id: '5', titulo: 'Titanic', ano: 1997 },
// ];

// function TelaLista({ navigation }) {
//   return (
//     <FlatList
//       data={filmes}
//       keyExtractor={(item) => item.id}
//       renderItem={({ item }) => (
//         <TouchableOpacity
//           onPress={() =>
//             navigation.navigate('Filme', {
//               titulo: item.titulo,
//               ano: item.ano,
//             })
//           }
//         >
//           <Text>{item.titulo} ({item.ano})</Text>
//         </TouchableOpacity>
//       )}
//     />
//   );
// }

// function TelaFilme({ route, navigation }) {
//   const { titulo, ano } = route.params;

//   return (
//     <View>
//       <Text>Filme: {titulo}</Text>
//       <Text>Ano: {ano}</Text>

//       <TouchableOpacity onPress={() => navigation.goBack()}>
//         <Text>Voltar</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function TelaNotificacoes() {
//   return <Text>Tela de notificações</Text>;
// }

// function HomeStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Lista"
//         component={TelaLista}
//         options={{ title: 'Início' }}
//       />
//       <Stack.Screen
//         name="Filme"
//         component={TelaFilme}
//         options={{ title: 'Detalhes do filme' }}
//       />
//       <Stack.Screen
//         name="Notificacoes"
//         component={TelaNotificacoes}
//       />
//     </Stack.Navigator>
//   );
// }

// function BuscaTab() {
//   return <Text>Busca</Text>;
// }

// function PerfilTab() {
//   const navigation = useNavigation();

//   return (
//     <View>
//       <Text>Perfil</Text>

//       <TouchableOpacity
//         onPress={() =>
//           navigation.navigate('HomeTab', {
//             screen: 'Filme',
//             params: { titulo: 'Matrix', ano: 1999 },
//           })
//         }
//       >
//         <Text>Ver filme favorito</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator screenOptions={{ headerShown: false }}>
//         <Tab.Screen
//           name="HomeTab"
//           component={HomeStack}
//           options={{ title: 'Início' }}
//         />
//         <Tab.Screen
//           name="BuscaTab"
//           component={BuscaTab}
//           options={{ title: 'Busca' }}
//         />
//         <Tab.Screen
//           name="PerfilTab"
//           component={PerfilTab}
//           options={{ title: 'Perfil' }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }



// Exercicio 6

// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// const receitas = [
//   {
//     id: '1',
//     nome: 'Panqueca',
//     tempo: '20 minutos',
//     ingredientes: 'Farinha, leite e ovo',
//   },
//   {
//     id: '2',
//     nome: 'Bolo de chocolate',
//     tempo: '40 minutos',
//     ingredientes: 'Farinha, açúcar, leite e chocolate',
//   },
//   {
//     id: '3',
//     nome: 'Salada',
//     tempo: '10 minutos',
//     ingredientes: 'Alface, tomate e cenoura',
//   },
// ];

// function ListaReceitas({ navigation }) {
//   return (
//     <FlatList
//       data={receitas}
//       keyExtractor={(item) => item.id}
//       renderItem={({ item }) => (
//         <TouchableOpacity
//           onPress={() => navigation.navigate('Detalhes', item)}
//         >
//           <Text>{item.nome}</Text>
//         </TouchableOpacity>
//       )}
//     />
//   );
// }

// function DetalhesReceita({ route, navigation }) {
//   const { nome, tempo, ingredientes } = route.params;

//   return (
//     <View>
//       <Text>Receita: {nome}</Text>
//       <Text>Tempo de preparo: {tempo}</Text>
//       <Text>Ingredientes: {ingredientes}</Text>

//       <TouchableOpacity onPress={() => navigation.goBack()}>
//         <Text>Voltar</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function ReceitasStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Lista"
//         component={ListaReceitas}
//         options={{ title: 'Receitas' }}
//       />
//       <Stack.Screen
//         name="Detalhes"
//         component={DetalhesReceita}
//         options={{ title: 'Detalhes da receita' }}
//       />
//     </Stack.Navigator>
//   );
// }

// function Favoritos() {
//   return (
//     <View>
//       <Text>Receita favorita: Panqueca</Text>
//       <Text>Tempo: 20 minutos</Text>
//       <Text>Ingredientes: Farinha, leite e ovo</Text>
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator screenOptions={{ headerShown: false }}>
//         <Tab.Screen name="Receitas" component={ReceitasStack} />
//         <Tab.Screen name="Favoritos" component={Favoritos} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }



// Exercicio 7

// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();
// const Stack = createNativeStackNavigator();

// const contatos = [
//   {
//     id: '1',
//     nome: 'Ana',
//     telefone: '21999990001',
//     email: 'ana@email.com',
//     favorito: true,
//   },
//   {
//     id: '2',
//     nome: 'Bruno',
//     telefone: '21999990002',
//     email: 'bruno@email.com',
//     favorito: false,
//   },
//   {
//     id: '3',
//     nome: 'Carla',
//     telefone: '21999990003',
//     email: 'carla@email.com',
//     favorito: true,
//   },
// ];

// function ListaContatos({ navigation, favoritos = false }) {
//   const lista = favoritos
//     ? contatos.filter((contato) => contato.favorito)
//     : contatos;

//   return (
//     <FlatList
//       data={lista}
//       keyExtractor={(item) => item.id}
//       renderItem={({ item }) => (
//         <TouchableOpacity
//           onPress={() =>
//             navigation.navigate('DetalheContato', {
//               nome: item.nome,
//               telefone: item.telefone,
//               email: item.email,
//             })
//           }
//         >
//           <Text>{item.nome}</Text>
//         </TouchableOpacity>
//       )}
//     />
//   );
// }

// function Todos({ navigation }) {
//   return <ListaContatos navigation={navigation} />;
// }

// function Favoritos({ navigation }) {
//   return <ListaContatos navigation={navigation} favoritos={true} />;
// }

// function ContatosDrawer() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Todos" component={Todos} />
//       <Drawer.Screen name="Favoritos" component={Favoritos} />
//     </Drawer.Navigator>
//   );
// }

// function DetalheContato({ route }) {
//   const { nome, telefone, email } = route.params;

//   return (
//     <View>
//       <Text>Nome: {nome}</Text>
//       <Text>Telefone: {telefone}</Text>
//       <Text>E-mail: {email}</Text>
//     </View>
//   );
// }

// function ContatosStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="MenuContatos"
//         component={ContatosDrawer}
//         options={{ title: 'Contatos', headerShown: false }}
//       />
//       <Stack.Screen
//         name="DetalheContato"
//         component={DetalheContato}
//         options={{ title: 'Detalhes do contato' }}
//       />
//     </Stack.Navigator>
//   );
// }

// function Sobre() {
//   return <Text>Aplicativo de contatos</Text>;
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen
//           name="Contatos"
//           component={ContatosStack}
//           options={{ headerShown: false }}
//         />
//         <Tab.Screen name="Sobre" component={Sobre} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }



// Exercicio 8

// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// function TelaA({ navigation }) {
//   return (
//     <View>
//       <TouchableOpacity
//         onPress={() => navigation.navigate('B', { nome: 'Maria' })}
//       >
//         <Text>Ir</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function TelaB({ route, navigation }) {
//   const nome = route.params?.nome || 'Nome não informado';

//   return (
//     <View>
//       <Text>{nome}</Text>

//       <TouchableOpacity onPress={() => navigation.goBack()}>
//         <Text>Voltar</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="A" component={TelaA} />
//         <Stack.Screen name="B" component={TelaB} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }