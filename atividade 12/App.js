//Exemplo 1
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   Switch,
//   StyleSheet
// } from 'react-native';

// function useToggle(valorInicial = false) {
//   const [valor, setValor] = useState(valorInicial);

//   const alternar = () => setValor(v => !v);

//   return [valor, alternar];
// }

// export default function Configuracoes() {
//   const [notificacoes, alternarNotificacoes] = useToggle(true);
//   const [modoAviao, alternarModoAviao] = useToggle();

//   return (
//     <View style={styles.container}>
//       <View style={styles.linha}>
//         <Text style={styles.texto}>
//           Notificações: {notificacoes ? 'ON' : 'OFF'}
//         </Text>

//         <Switch
//           value={notificacoes}
//           onValueChange={alternarNotificacoes}
//         />
//       </View>

//       <View style={styles.linha}>
//         <Text style={styles.texto}>
//           Modo avião: {modoAviao ? 'ON' : 'OFF'}
//         </Text>

//         <Switch
//           value={modoAviao}
//           onValueChange={alternarModoAviao}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     paddingTop: 80
//   },
//   linha: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 12
//   },
//   texto: {
//     fontSize: 18
//   }
// });



//Exemplo 2
// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   ActivityIndicator,
//   StyleSheet
// } from 'react-native';

// const usuarios = [
//   { id: 1, nome: 'Ana' },
//   { id: 2, nome: 'Bruno' },
//   { id: 3, nome: 'Carla' },
//   { id: 4, nome: 'Diego' },
//   { id: 5, nome: 'Elisa' }
// ];

// const posts = Array.from({ length: 30 }, (_, i) => ({
//   id: i + 1,
//   titulo: `Post número ${i + 1}`
// }));

// function fakeFetch(url) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       if (url === '/posts') {
//         resolve({
//           ok: true,
//           json: async () => posts
//         });
//       } else if (url === '/usuarios') {
//         resolve({
//           ok: true,
//           json: async () => usuarios
//         });
//       } else {
//         resolve({
//           ok: false,
//           status: 404
//         });
//       }
//     }, 1000);
//   });
// }

// function useFetch(url) {
//   const [dados, setDados] = useState(null);
//   const [carregando, setCarregando] = useState(true);
//   const [erro, setErro] = useState(null);

//   useEffect(() => {
//     let cancelado = false;

//     async function carregar() {
//       setCarregando(true);
//       setErro(null);

//       try {
//         const resposta = await fakeFetch(url);

//         if (!resposta.ok) {
//           throw new Error(`Erro ${resposta.status}`);
//         }

//         const json = await resposta.json();

//         if (!cancelado) {
//           setDados(json);
//         }
//       } catch (e) {
//         if (!cancelado) {
//           setErro(e.message);
//         }
//       } finally {
//         if (!cancelado) {
//           setCarregando(false);
//         }
//       }
//     }

//     carregar();

//     return () => {
//       cancelado = true;
//     };
//   }, [url]);

//   return { dados, carregando, erro };
// }

// function Posts() {
//   const { dados, carregando, erro } = useFetch('/posts');

//   if (carregando) return <ActivityIndicator />;
//   if (erro) return <Text style={styles.erro}>{erro}</Text>;

//   return (
//     <Text style={styles.texto}>
//       {dados.length} posts carregados
//     </Text>
//   );
// }

// function Usuarios() {
//   const { dados, carregando, erro } = useFetch('/usuarios');

//   if (carregando) return <ActivityIndicator />;
//   if (erro) return <Text style={styles.erro}>{erro}</Text>;

//   return dados.map(u => (
//     <Text key={u.id} style={styles.texto}>
//       {u.nome}
//     </Text>
//   ));
// }

// function Inexistente() {
//   const { carregando, erro } = useFetch('/nada');

//   if (carregando) return <ActivityIndicator />;
//   if (erro) return <Text style={styles.erro}>{erro}</Text>;

//   return null;
// }

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.titulo}>Posts</Text>
//       <Posts />

//       <Text style={styles.titulo}>Usuários</Text>
//       <Usuarios />

//       <Text style={styles.titulo}>Endereço errado</Text>
//       <Inexistente />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     paddingTop: 60,
//     gap: 4
//   },
//   titulo: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginTop: 12
//   },
//   texto: {
//     fontSize: 18
//   },
//   erro: {
//     fontSize: 18,
//     color: 'red'
//   }
// });



//Exemplo 3
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   Alert,
//   StyleSheet
// } from 'react-native';

// function useForm(valoresIniciais, validar) {
//   const [valores, setValores] = useState(valoresIniciais);
//   const [erros, setErros] = useState({});

//   function alterar(campo, valor) {
//     setValores(ant => ({
//       ...ant,
//       [campo]: valor
//     }));
//   }

//   function enviar(aoEnviar) {
//     const novosErros = validar(valores);

//     setErros(novosErros);

//     if (Object.keys(novosErros).length === 0) {
//       aoEnviar(valores);
//     }
//   }

//   function limpar() {
//     setValores(valoresIniciais);
//     setErros({});
//   }

//   return {
//     valores,
//     erros,
//     alterar,
//     enviar,
//     limpar
//   };
// }

// function validarLogin(v) {
//   const e = {};

//   if (!v.email.includes('@')) {
//     e.email = 'E-mail inválido';
//   }

//   if (v.senha.length < 6) {
//     e.senha = 'Mínimo de 6 caracteres';
//   }

//   return e;
// }

// function fazerLogin(v) {
//   Alert.alert(
//     'Sucesso',
//     `Bem-vindo, ${v.email}`
//   );
// }

// export default function Login() {
//   const {
//     valores,
//     erros,
//     alterar,
//     enviar,
//     limpar
//   } = useForm(
//     { email: '', senha: '' },
//     validarLogin
//   );

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.campo}
//         placeholder="E-mail"
//         autoCapitalize="none"
//         value={valores.email}
//         onChangeText={t => alterar('email', t)}
//       />

//       {erros.email && (
//         <Text style={styles.erro}>
//           {erros.email}
//         </Text>
//       )}

//       <TextInput
//         style={styles.campo}
//         placeholder="Senha"
//         secureTextEntry
//         value={valores.senha}
//         onChangeText={t => alterar('senha', t)}
//       />

//       {erros.senha && (
//         <Text style={styles.erro}>
//           {erros.senha}
//         </Text>
//       )}

//       <Button
//         title="Entrar"
//         onPress={() => enviar(fazerLogin)}
//       />

//       <Button
//         title="Limpar"
//         color="#999"
//         onPress={limpar}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//     gap: 8
//   },
//   campo: {
//     borderWidth: 1,
//     borderColor: '#999',
//     borderRadius: 8,
//     padding: 10
//   },
//   erro: {
//     color: 'red'
//   }
// });