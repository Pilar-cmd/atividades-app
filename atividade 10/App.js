//Exercício 1
// import { useState } from 'react';
// import { View, Text, Button } from 'react-native';

// export default function App() {
//   const [numero, setNumero] = useState(0);

//   return (
//     <View>
//       <Text>Número: {numero}</Text>

//       <Button
//         title="+"
//         onPress={() => setNumero(numero + 1)}
//       />

//       <Button
//         title="-"
//         onPress={() => setNumero(numero - 1)}
//       />
//     </View>
//   );
// }



//Exercício 2
// import { useState } from 'react';
// import { View, Text, TextInput } from 'react-native';

// export default function App() {
//   const [nome, setNome] = useState('');

//   return (
//     <View>
//       <TextInput
//         placeholder="Digite seu nome"
//         value={nome}
//         onChangeText={setNome}
//       />

//       <Text>Olá, {nome}!</Text>
//     </View>
//   );
// }



//Exercício 3
// import { useState } from 'react';
// import { View, Text, Button } from 'react-native';

// export default function App() {
//   const [visivel, setVisivel] = useState(false);

//   return (
//     <View>
//       <Button
//         title="Mostrar / Esconder"
//         onPress={() => setVisivel(!visivel)}
//       />

//       {visivel && (
//         <Text>Você encontrou o segredo!</Text>
//       )}
//     </View>
//   );
// }



//Exercício 4
// import { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   FlatList
// } from 'react-native';

// export default function App() {
//   const [texto, setTexto] = useState('');
//   const [tarefas, setTarefas] = useState([]);

//   function adicionar() {
//     if (texto.trim() !== '') {
//       setTarefas([...tarefas, texto]);
//       setTexto('');
//     }
//   }

//   function remover(index) {
//     setTarefas(tarefas.filter((_, i) => i !== index));
//   }

//   return (
//     <View>
//       <TextInput
//         placeholder="Nova tarefa"
//         value={texto}
//         onChangeText={setTexto}
//       />

//       <Button title="Adicionar" onPress={adicionar} />

//       <FlatList
//         data={tarefas}
//         keyExtractor={(_, index) => index.toString()}
//         renderItem={({ item, index }) => (
//           <View>
//             <Text>{item}</Text>
//             <Button
//               title="Remover"
//               onPress={() => remover(index)}
//             />
//           </View>
//         )}
//       />
//     </View>
//   );
// }




//Exercício 5
// import { useState } from 'react';
// import { View, Text, Button } from 'react-native';

// export default function App() {
//   const [jogo, setJogo] = useState({
//     pontos: 0,
//     vidas: 3
//   });

//   function acertar() {
//     setJogo({
//       ...jogo,
//       pontos: jogo.pontos + 1
//     });
//   }

//   function errar() {
//     setJogo({
//       ...jogo,
//       vidas: Math.max(0, jogo.vidas - 1)
//     });
//   }

//   return (
//     <View>
//       <Text>Pontos: {jogo.pontos}</Text>
//       <Text>Vidas: {jogo.vidas}</Text>

//       <Button title="Acertar" onPress={acertar} />
//       <Button title="Errar" onPress={errar} />
//     </View>
//   );
// }



//Exercício 6
// import { useEffect } from 'react';
// import { View, Text } from 'react-native';

// export default function App() {

//   useEffect(() => {
//     console.log('Componente montado');

//     return () => {
//       console.log('Componente desmontado');
//     };
//   }, []);

//   return (
//     <View>
//       <Text>Componente funcionando!</Text>
//     </View>
//   );
// }



//Exercício 7
// import { useState, useEffect } from 'react';
// import { View, Text, Button } from 'react-native';

// export default function App() {
//   const [segundos, setSegundos] = useState(0);
//   const [rodando, setRodando] = useState(true);

//   useEffect(() => {
//     if (!rodando) return;

//     const timer = setInterval(() => {
//       setSegundos(s => s + 1);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [rodando]);

//   return (
//     <View>
//       <Text>Tempo: {segundos} segundos</Text>

//       <Button
//         title={rodando ? 'Pausar' : 'Retomar'}
//         onPress={() => setRodando(!rodando)}
//       />
//     </View>
//   );
// }



//Exercício 8
// import { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   ActivityIndicator
// } from 'react-native';

// export default function App() {
//   const [dados, setDados] = useState([]);
//   const [carregando, setCarregando] = useState(true);
//   const [erro, setErro] = useState(false);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(resposta => {
//         if (!resposta.ok) {
//           throw new Error('Erro na busca');
//         }
//         return resposta.json();
//       })
//       .then(data => {
//         setDados(data);
//       })
//       .catch(() => {
//         setErro(true);
//       })
//       .finally(() => {
//         setCarregando(false);
//       });
//   }, []);

//   if (carregando) {
//     return <ActivityIndicator size="large" />;
//   }

//   if (erro) {
//     return <Text>Erro ao carregar os dados!</Text>;
//   }

//   return (
//     <View>
//       <Text>Lista de usuários:</Text>

//       <FlatList
//         data={dados}
//         keyExtractor={item => item.id.toString()}
//         renderItem={({ item }) => (
//           <Text>{item.name}</Text>
//         )}
//       />
//     </View>
//   );
// }



//Exercício 9
// import { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   FlatList
// } from 'react-native';

// export default function App() {
//   const [texto, setTexto] = useState('');
//   const [resultados, setResultados] = useState([]);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (texto.trim() === '') {
//         setResultados([]);
//         return;
//       }

//       fetch('https://jsonplaceholder.typicode.com/users')
//         .then(resposta => resposta.json())
//         .then(data => {
//           const filtrados = data.filter(usuario =>
//             usuario.name.toLowerCase().includes(texto.toLowerCase())
//           );

//           setResultados(filtrados);
//         });
//     }, 500);

//     return () => clearTimeout(timer);
//   }, [texto]);

//   return (
//     <View>
//       <TextInput
//         placeholder="Buscar usuário"
//         value={texto}
//         onChangeText={setTexto}
//       />

//       <FlatList
//         data={resultados}
//         keyExtractor={item => item.id.toString()}
//         renderItem={({ item }) => (
//           <Text>{item.name}</Text>
//         )}
//       />
//     </View>
//   );
// }



//Exercício 10
// import { useState, useEffect } from 'react';
// import { View, Text, Button } from 'react-native';

// export default function App() {
//   const [valor, setValor] = useState(0);

//   useEffect(() => {
//     console.log('Novo valor:', valor);
//   }, [valor]);

//   const titulo = `Valor: ${valor}`;

//   return (
//     <View>
//       <Text>{titulo}</Text>

//       <Button
//         title="Somar 1"
//         onPress={() => setValor(valor + 1)}
//       />
//     </View>
//   );
// }