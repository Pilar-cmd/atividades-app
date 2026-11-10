//Exemplo 1
// import React, { createContext, useContext, useState } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// const TemaContext = createContext();

// function TemaProvider({ children }) {
//   const [tema, setTema] = useState('claro');

//   function alternarTema() {
//     setTema(tema === 'claro' ? 'escuro' : 'claro');
//   }

//   return (
//     <TemaContext.Provider value={{ tema, alternarTema }}>
//       {children}
//     </TemaContext.Provider>
//   );
// }

// function Tela() {
//   const { tema, alternarTema } = useContext(TemaContext);

//   return (
//     <View
//       style={[
//         styles.container,
//         { backgroundColor: tema === 'claro' ? '#fff' : '#222' }
//       ]}
//     >
//       <Text
//         style={{
//           color: tema === 'claro' ? '#000' : '#fff',
//           fontSize: 24
//         }}
//       >
//         Tema {tema}
//       </Text>

//       <Button
//         title="Alternar tema"
//         onPress={alternarTema}
//       />
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <TemaProvider>
//       <Tela />
//     </TemaProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// });



//Exemplo 2
// import React, { createContext, useContext, useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   StyleSheet
// } from 'react-native';

// const AuthContext = createContext();

// function AuthProvider({ children }) {
//   const [usuario, setUsuario] = useState(null);

//   function login(email, senha) {
//     if (email && senha === '123456') {
//       setUsuario(email);
//     } else {
//       alert('E-mail ou senha incorretos!');
//     }
//   }

//   function logout() {
//     setUsuario(null);
//   }

//   return (
//     <AuthContext.Provider value={{ usuario, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// function Login() {
//   const { login } = useContext(AuthContext);

//   const [email, setEmail] = useState('');
//   const [senha, setSenha] = useState('');

//   return (
//     <View style={styles.container}>
//       <Text style={styles.titulo}>Login</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Digite seu e-mail"
//         value={email}
//         onChangeText={setEmail}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Digite sua senha"
//         secureTextEntry
//         value={senha}
//         onChangeText={setSenha}
//       />

//       <Button
//         title="Entrar"
//         onPress={() => login(email, senha)}
//       />
//     </View>
//   );
// }

// function Home() {
//   const { usuario, logout } = useContext(AuthContext);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.titulo}>Bem-vindo!</Text>
//       <Text>Usuário: {usuario}</Text>

//       <Button title="Sair" onPress={logout} />
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <AuthProvider>
//       <Conteudo />
//     </AuthProvider>
//   );
// }

// function Conteudo() {
//   const { usuario } = useContext(AuthContext);

//   return usuario ? <Home /> : <Login />;
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20
//   },
//   titulo: {
//     fontSize: 26,
//     marginBottom: 20
//   },
//   input: {
//     width: '100%',
//     borderWidth: 1,
//     borderColor: '#999',
//     padding: 10,
//     marginBottom: 15,
//     borderRadius: 5
//   }
// });



//Exemplo 3
// import React, {
//   createContext,
//   useContext,
//   useState,
//   useEffect
// } from 'react';

// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   FlatList,
//   StyleSheet
// } from 'react-native';

// const produtos = [
//   { id: '1', nome: 'Celular', preco: 'R$ 1.200' },
//   { id: '2', nome: 'Notebook', preco: 'R$ 3.500' },
//   { id: '3', nome: 'Fone de ouvido', preco: 'R$ 150' },
//   { id: '4', nome: 'Teclado', preco: 'R$ 200' },
//   { id: '5', nome: 'Mouse', preco: 'R$ 80' },
//   { id: '6', nome: 'Monitor', preco: 'R$ 900' },
//   { id: '7', nome: 'Tablet', preco: 'R$ 1.000' },
//   { id: '8', nome: 'Smartwatch', preco: 'R$ 400' },
//   { id: '9', nome: 'Caixa de som', preco: 'R$ 250' },
//   { id: '10', nome: 'Carregador', preco: 'R$ 60' }
// ];

// const FavoritosContext = createContext();

// function FavoritosProvider({ children }) {
//   const [favoritos, setFavoritos] = useState([]);

//   function alternarFavorito(produto) {
//     const jaExiste = favoritos.some(
//       item => item.id === produto.id
//     );

//     if (jaExiste) {
//       setFavoritos(
//         favoritos.filter(item => item.id !== produto.id)
//       );
//     } else {
//       setFavoritos([...favoritos, produto]);
//     }
//   }

//   return (
//     <FavoritosContext.Provider
//       value={{ favoritos, alternarFavorito }}
//     >
//       {children}
//     </FavoritosContext.Provider>
//   );
// }

// function Catalogo() {
//   const { favoritos, alternarFavorito } =
//     useContext(FavoritosContext);

//   const [busca, setBusca] = useState('');
//   const [listaProdutos, setListaProdutos] = useState([]);

//   useEffect(() => {
//     setListaProdutos(produtos);
//   }, []);

//   const produtosFiltrados = listaProdutos.filter(item =>
//     item.nome.toLowerCase().includes(busca.toLowerCase())
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.titulo}>Catálogo de Produtos</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Buscar produto..."
//         value={busca}
//         onChangeText={setBusca}
//       />

//       <Text style={styles.subtitulo}>
//         Favoritos: {favoritos.length}
//       </Text>

//       <FlatList
//         data={produtosFiltrados}
//         keyExtractor={item => item.id}
//         renderItem={({ item }) => {
//           const favoritado = favoritos.some(
//             favorito => favorito.id === item.id
//           );

//           return (
//             <View style={styles.produto}>
//               <View>
//                 <Text style={styles.nome}>
//                   {item.nome}
//                 </Text>

//                 <Text>{item.preco}</Text>
//               </View>

//               <Button
//                 title={favoritado ? '★ Favorito' : '☆ Favoritar'}
//                 onPress={() => alternarFavorito(item)}
//               />
//             </View>
//           );
//         }}
//         ListEmptyComponent={
//           <Text>Nenhum produto encontrado.</Text>
//         }
//       />
//     </View>
//   );
// }

// // Aplicativo principal
// export default function App() {
//   return (
//     <FavoritosProvider>
//       <Catalogo />
//     </FavoritosProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     paddingTop: 50,
//     backgroundColor: '#fff'
//   },
//   titulo: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20
//   },
//   subtitulo: {
//     fontSize: 18,
//     marginBottom: 15
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#999',
//     padding: 10,
//     marginBottom: 15,
//     borderRadius: 5
//   },
//   produto: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd'
//   },
//   nome: {
//     fontSize: 17,
//     fontWeight: 'bold'
//   }
// });
