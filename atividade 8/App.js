// useState

//1
// import React, { useState } from 'react';
// import { View, Button, Text, StyleSheet } from 'react-native';

// export default function App() {
//   const [valor, setValor] = useState(0);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.numero}>{valor}</Text>

//       <Button
//         title="Aumentar"
//         onPress={() => setValor(valor + 1)}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   numero: {
//     fontSize: 30,
//     marginBottom: 20,
//   },
// });



//2
// import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// export default function App() {
//   const [contador, setContador] = useState(0);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.numero}>{contador}</Text>

//       <Button
//         title="+1"
//         onPress={() => setContador(contador + 1)}
//       />

//       <Button
//         title="-1"
//         onPress={() => setContador(contador - 1)}
//       />

//       <Button
//         title="Zerar"
//         onPress={() => setContador(0)}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: 10,
//   },
//   numero: {
//     fontSize: 40,
//     marginBottom: 20,
//   },
// });



//3
// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet } from 'react-native';

// export default function App() {
//   const [nome, setNome] = useState('');

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Digite seu nome"
//         value={nome}
//         onChangeText={setNome}
//       />

//       <Text style={styles.texto}>
//         {nome ? `Olá, ${nome}!` : 'Digite algo acima'}
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#999',
//     padding: 10,
//     marginBottom: 20,
//     borderRadius: 5,
//   },
//   texto: {
//     fontSize: 20,
//   },
// });



//4
// import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// export default function App() {
//   const [contador, setContador] = useState(0);

//   function somarTres() {
//     setContador(anterior => anterior + 1);
//     setContador(anterior => anterior + 1);
//     setContador(anterior => anterior + 1);
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.numero}>{contador}</Text>

//       <Button
//         title="Somar 3"
//         onPress={somarTres}
//       />

//       <Button
//         title="Zerar"
//         onPress={() => setContador(0)}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: 15,
//   },
//   numero: {
//     fontSize: 40,
//   },
// });



//5
// import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// export default function App() {
//   const [contador, setContador] = useState(0);

//   function somaUm(anterior) {
//     return anterior + 1;
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.numero}>{contador}</Text>

//       <Button
//         title="Somar 1"
//         onPress={() => setContador(somaUm)}
//       />

//       <Button
//         title="Zerar"
//         onPress={() => setContador(0)}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: 15,
//   },
//   numero: {
//     fontSize: 40,
//   },
// });



//6
// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// export default function App() {
//   const [usuario, setUsuario] = useState({
//     nome: '',
//     email: '',
//     idade: 0,
//   });

//   function atualizar(campo, valor) {
//     setUsuario(anterior => ({
//       ...anterior,
//       [campo]: valor,
//     }));
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.titulo}>Cadastro de usuário</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Nome"
//         value={usuario.nome}
//         onChangeText={valor => atualizar('nome', valor)}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={usuario.email}
//         onChangeText={valor => atualizar('email', valor)}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Idade"
//         keyboardType="numeric"
//         value={usuario.idade === 0 ? '' : String(usuario.idade)}
//         onChangeText={valor => atualizar('idade', Number(valor) || 0)}
//       />

//       <Text style={styles.resultado}>Nome: {usuario.nome}</Text>
//       <Text style={styles.resultado}>Email: {usuario.email}</Text>
//       <Text style={styles.resultado}>Idade: {usuario.idade}</Text>

//       <Button
//         title="Limpar"
//         onPress={() => setUsuario({
//           nome: '',
//           email: '',
//           idade: 0,
//         })}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//   },
//   titulo: {
//     fontSize: 25,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#999',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//   },
//   resultado: {
//     fontSize: 16,
//     marginBottom: 8,
//   },
// });



//7
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native';

// export default function App() {
//   const [tarefas, setTarefas] = useState([]);
//   const [texto, setTexto] = useState('');

//   const adicionar = () => {
//     if (texto.trim() === '') return;

//     setTarefas(anterior => [
//       ...anterior,
//       {
//         id: Date.now().toString(),
//         texto: texto,
//         feita: false,
//       },
//     ]);

//     setTexto('');
//   };

//   const remover = (id) => {
//     setTarefas(anterior =>
//       anterior.filter(t => t.id !== id)
//     );
//   };

//   const alternar = (id) => {
//     setTarefas(anterior =>
//       anterior.map(t =>
//         t.id === id
//           ? { ...t, feita: !t.feita }
//           : t
//       )
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.titulo}>Lista de tarefas</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Digite uma tarefa"
//         value={texto}
//         onChangeText={setTexto}
//       />

//       <Button
//         title="Adicionar tarefa"
//         onPress={adicionar}
//       />

//       <FlatList
//         data={tarefas}
//         keyExtractor={item => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.tarefa}>
//             <TouchableOpacity
//               style={styles.textoTarefa}
//               onPress={() => alternar(item.id)}
//             >
//               <Text
//                 style={{
//                   fontSize: 16,
//                   textDecorationLine: item.feita
//                     ? 'line-through'
//                     : 'none',
//                 }}
//               >
//                 {item.feita ? '✓ ' : '○ '}
//                 {item.texto}
//               </Text>
//             </TouchableOpacity>

//             <Button
//               title="Excluir"
//               color="red"
//               onPress={() => remover(item.id)}
//             />
//           </View>
//         )}
//         ListEmptyComponent={
//           <Text style={styles.vazio}>
//             Nenhuma tarefa adicionada.
//           </Text>
//         }
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     paddingTop: 60,
//   },
//   titulo: {
//     fontSize: 25,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#999',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//   },
//   tarefa: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     borderBottomWidth: 1,
//     borderColor: '#ddd',
//     paddingVertical: 10,
//   },
//   textoTarefa: {
//     flex: 1,
//   },
//   vazio: {
//     marginTop: 20,
//     textAlign: 'center',
//     color: '#777',
//   },
// });







// useEffect

//1
// import React, { useEffect } from 'react';
// import { View, Text } from 'react-native';

// export default function App() {
//   useEffect(() => {
//     console.log('Tela carregada!');
//   }, []);

//   return (
//     <View>
//       <Text>Olá, React Native!</Text>
//     </View>
//   );
// }



//2
// import React, { useState, useEffect } from 'react';
// import { View, Text, Button } from 'react-native';

// export default function App() {
//   const [contador, setContador] = useState(0);

//   useEffect(() => {
//     console.log('Contador atualizado:', contador);

//     return () => {
//       console.log('Limpando efeito anterior');
//     };
//   }, [contador]);

//   return (
//     <View>
//       <Text>Contador: {contador}</Text>

//       <Button
//         title="Adicionar"
//         onPress={() => setContador(contador + 1)}
//       />
//     </View>
//   );
// }



//3
// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   ActivityIndicator,
//   FlatList
// } from 'react-native';

// export default function App() {
//   const [usuarios, setUsuarios] = useState([]);
//   const [carregando, setCarregando] = useState(true);

//   useEffect(() => {
//     async function carregar() {
//       try {
//         const resposta = await fetch(
//           'https://jsonplaceholder.typicode.com/users'
//         );

//         const dados = await resposta.json();

//         setUsuarios(dados);
//       } catch (erro) {
//         console.log('Erro ao carregar:', erro);
//       } finally {
//         setCarregando(false);
//       }
//     }

//     carregar();
//   }, []);

//   if (carregando) {
//     return <ActivityIndicator size="large" />;
//   }

//   return (
//     <View style={{ padding: 20 }}>
//       <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
//         Lista de usuários
//       </Text>

//       <FlatList
//         data={usuarios}
//         keyExtractor={(item) => String(item.id)}
//         renderItem={({ item }) => (
//           <Text style={{ padding: 10 }}>
//             {item.name}
//           </Text>
//         )}
//       />
//     </View>
//   );
// }



//4
// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   Button,
//   ActivityIndicator
// } from 'react-native';

// export default function App() {
//   const [postId, setPostId] = useState(1);
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     setPost(null);

//     async function carregarPost() {
//       try {
//         const resposta = await fetch(
//           `https://jsonplaceholder.typicode.com/posts/${postId}`
//         );

//         const dados = await resposta.json();

//         setPost(dados);
//       } catch (erro) {
//         console.log('Erro:', erro);
//       }
//     }

//     carregarPost();
//   }, [postId]);

//   if (!post) {
//     return <ActivityIndicator size="large" />;
//   }

//   return (
//     <View style={{ padding: 20 }}>
//       <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
//         {post.title}
//       </Text>

//       <Text>{post.body}</Text>

//       <Button
//         title="Próximo post"
//         onPress={() => setPostId(postId + 1)}
//       />
//     </View>
//   );
// }



//5
// import React, { useState, useEffect } from 'react';
// import { View, Text } from 'react-native';

// export default function App() {
//   const [segundos, setSegundos] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => {
//       setSegundos(s => s + 1);
//     }, 1000);

//     return () => clearInterval(id);

//   }, []);

//   return (
//     <View style={{ padding: 20 }}>
//       <Text style={{ fontSize: 25 }}>
//         Cronômetro: {segundos}s
//       </Text>
//     </View>
//   );
// }



//6
// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   FlatList,
//   ActivityIndicator
// } from 'react-native';

// export default function App() {
//   const [termo, setTermo] = useState('');
//   const [resultados, setResultados] = useState([]);
//   const [carregando, setCarregando] = useState(false);

//   useEffect(() => {
//     if (termo.length < 3) {
//       setResultados([]);
//       setCarregando(false);
//       return;
//     }

//     const timer = setTimeout(async () => {
//       setCarregando(true);

//       try {
//         const resposta = await fetch(
//           `https://dummyjson.com/products/search?q=${encodeURIComponent(termo)}`
//         );

//         const dados = await resposta.json();

//         setResultados(dados.products);
//       } catch (erro) {
//         console.log('Erro na busca:', erro);
//       } finally {
//         setCarregando(false);
//       }
//     }, 500);

//     return () => clearTimeout(timer);

//   }, [termo]);

//   return (
//     <View style={{ padding: 20 }}>
//       <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
//         Buscar produtos
//       </Text>

//       <TextInput
//         placeholder="Digite pelo menos 3 letras..."
//         value={termo}
//         onChangeText={setTermo}
//         style={{
//           borderWidth: 1,
//           borderColor: '#999',
//           padding: 10,
//           marginVertical: 15,
//           borderRadius: 8
//         }}
//       />

//       {carregando && <ActivityIndicator size="large" />}

//       <FlatList
//         data={resultados}
//         keyExtractor={(item) => String(item.id)}
//         renderItem={({ item }) => (
//           <Text style={{ padding: 10 }}>
//             {item.title}
//           </Text>
//         )}
//       />
//     </View>
//   );
// }