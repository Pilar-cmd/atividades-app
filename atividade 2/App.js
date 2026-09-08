//Exemplo 1


// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';


// export default function App() {
//   return (
//     <View style={s.container}>
//       <Text style={s.titulo}>Título da Seção</Text>
//     </View>
//   );
// }


// const s = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#0F172A',
//   },
//   titulo: {
//     fontSize: 20, // dp (número simples)
//     fontWeight: '600', // string
//     color: '#E8EDF5',
//     marginBottom: 8,
//     paddingHorizontal: 16,
//     textTransform: 'uppercase', // transforma o texto em caixa alta
//   },
// });


//Exemplo 2


// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';


// export default function App() {
//   return (
//     <View style={s.container}>
//       <Text style={s.titulo}>Título de Exemplo</Text>
//     </View>
//   );
// }


// const s = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#0F172A',
//   },
//   titulo: {
//     fontSize: 20, // dp[cite: 1]
//     fontWeight: '600', // string[cite: 1]
//     color: '#E8EDF5',[cite: 1]
//     marginBottom: 8,[cite: 1]
//     paddingHorizontal: 16,[cite: 1]
//     textTransform: 'uppercase',[cite: 1]
//   },
// });


//Exemplo 3


// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';


// export default function Card() {
//   return (
//     <View style={s.container}>
//       {/* Inline */}
//       <View
//         style={{
//           padding: 16,
//           backgroundColor: '#1B2130',
//           borderRadius: 12,
//         }}
//       >
//         <Text style={{ color: '#fff' }}>Oi</Text>
//       </View>


//       {/* StyleSheet */}
//       <View style={s.card}>
//         <Text style={s.texto}>Oi</Text>
//       </View>
//     </View>
//   );
// }


// const s = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#0F172A',
//     gap: 16,
//   },
//   card: {
//     padding: 16,
//     backgroundColor: '#1B2130',
//     borderRadius: 12,
//   },
//   texto: {
//     color: '#fff',
//   },
// });


//Exemplo 4


// import React from 'react';
// import { View, StyleSheet, FlatList } from 'react-native';


// const dadosExemplo = [{ id: '1' }, { id: '2' }, { id: '3' }];


// export default function App() {
//   return (
//     <View style={s.container}>
//       {/* Prefira: mesma referência de estilo sempre[cite: 1] */}
//       <FlatList
//         data={dadosExemplo}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => <View style={s.item} />}
//       />
//     </View>
//   );
// }


// const s = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0F172A',
//     paddingTop: 40,
//   },
//   item: {
//     flex: 1,
//     padding: 16,
//     marginBottom: 8,
//     backgroundColor: '#1B2130',
//     borderRadius: 8,
//   },
// });


//Exemplo 5


// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';


// export default function App() {
//   const ativo = true;
//   const topo = 20;
//   const erro = false;


//   return (
//     <View style={s.container}>
//       <View style={[s.card, s.destaque]}>
//         <Text style={s.textoCard}>Array de estilos (Destaque)</Text>
//       </View>


//       <View style={[s.card, ativo && s.ativo]}>
//         <Text style={s.textoCard}>Condicional (Ativo)</Text>
//       </View>


//       <View style={[s.card, { marginTop: topo }]}>
//         <Text style={s.textoCard}>Inline Dinâmico (MarginTop)</Text>
//       </View>


//       <Text style={[s.base, erro ? s.erro : s.ok]}>
//         Texto Ternário: {erro ? 'Erro' : 'Sucesso'}
//       </Text>
//     </View>
//   );
// }


// const s = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#0F172A',
//     gap: 12,
//     padding: 16,
//   },
//   card: {
//     width: '100%',
//     padding: 16,
//     borderRadius: 8,
//     backgroundColor: '#1B2130',
//   },
//   textoCard: {
//     color: '#FFFFFF',
//     fontSize: 14,
//     textAlign: 'center',
//   },
//   destaque: {
//     backgroundColor: '#61DAFB',
//   },
//   ativo: {
//     borderWidth: 2,
//     borderColor: '#4ADE80',
//   },
//   base: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginTop: 12,
//   },
//   erro: {
//     color: '#EF4444',
//   },
//   ok: {
//     color: '#22C55E',
//   },
// });


//Exemplo 6


// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';


// export default function App() {
//   return (
//     <View style={s.container}>
//       {/* View não passa nada para os filhos[cite: 1] */}
//       <View style={{ color: 'red' }}>
//         <Text style={{ color: '#fff' }}>Este texto continua branco</Text>
//       </View>


//       {/* Text dentro de Text herda[cite: 1] */}
//       <Text style={{ color: '#61DAFB', marginTop: 12 }}>
//         Ciano com <Text style={{ fontWeight: 'bold' }}>negrito</Text>
//       </Text>
//     </View>
//   );
// }


// const s = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#0F172A',
//   },
// });


//Exemplo 7


// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';


// export default function App() {
//   return (
//     <View style={s.container}>
//       <View style={s.caixaHex}>
//         <Text style={s.texto}>Hex 6 dígitos (#61DAFB)</Text>
//       </View>
//       <View style={s.caixaAlpha}>
//         <Text style={s.texto}>Hex com alpha (#61DAFB40)</Text>
//       </View>
//       <View style={s.caixaRgba}>
//         <Text style={s.texto}>rgba(97,218,251,0.15)</Text>
//       </View>
//       <View style={s.caixaTomato}>
//         <Text style={s.texto}>Nome CSS (tomato)</Text>
//       </View>
//     </View>
//   );
// }


// const s = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#0F172A',
//     gap: 12,
//   },
//   texto: {
//     color: '#E8EDF5',
//   },
//   caixaHex: {
//     padding: 12,
//     backgroundColor: '#61DAFB',
//     borderRadius: 8,
//   },
//   caixaAlpha: {
//     padding: 12,
//     backgroundColor: '#61DAFB40',
//     borderRadius: 8,
//   },
//   caixaRgba: {
//     padding: 12,
//     backgroundColor: 'rgba(97,218,251,0.15)',
//     borderColor: '#323D54',
//     borderWidth: 1,
//     borderRadius: 8,
//   },
//   caixaTomato: {
//     padding: 12,
//     backgroundColor: 'tomato',
//     opacity: 0.6,
//     borderRadius: 8,
//   },
// });


//Exemplo 8 

// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function App() {
//   return (
//     <View style={s.container}>
//       <Text style={s.titulo}>Título da seção</Text>
//       <Text style={s.corpo} numberOfLines={2} ellipsizeMode="tail">
//         Texto de apoio com lineHeight confortável, cor secundária e alinhamento
//         à esquerda. Repare no respiro entre as linhas.
//       </Text>
//     </View>
//   );
// }

// const s = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 24,
//     backgroundColor: '#0F172A',
//   },
//   titulo: {
//     fontSize: 22,
//     fontWeight: '700',
//     lineHeight: 28,
//     letterSpacing: 0.4,
//     color: '#E8EDF5',
//     marginBottom: 8,
//   },
//   corpo: {
//     fontSize: 15,
//     lineHeight: 22,
//     color: '#97A3B8',
//     textAlign: 'left',
//   },
// });

//Exemplo 9

// import React from 'react';
// import { View, StyleSheet, useWindowDimensions } from 'react-native';

// export default function Grade() {
//   const { width } = useWindowDimensions();
//   const colunas = width > 600 ? 3 : 2;

//   return (
//     <View style={s.container}>
//       <View style={{ width: width / colunas - 16, height: 100, backgroundColor: '#61DAFB' }} />
//       <View style={{ width: width / colunas - 16, height: 100, backgroundColor: '#61DAFB' }} />
//     </View>
//   );
// }

// const s = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     gap: 8,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#0F172A',
//   },
// });

// //Exemplo 10

// import React from 'react';
// import { View, Text, StyleSheet, Platform } from 'react-native';

// export default function App() {
//   return (
//     <View style={s.container}>
//       <View style={s.card}>
//         <Text style={{ color: '#fff' }}>Card com sombra</Text>
//       </View>
//     </View>
//   );
// }

// const s = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#0F172A',
//   },
//   card: {
//     backgroundColor: '#1B2130',
//     borderRadius: 12,
//     padding: 16,
//     ...Platform.select({
//       ios: {
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.25,
//         shadowRadius: 6,
//       },
//       android: { elevation: 4 },
//     }),
//   },
// });

//Exemplo 11

// import React from 'react';
// import { View, StyleSheet } from 'react-native';

// export default function App() {
//   return (
//     <View style={s.container}>
//       <View style={s.linha}>
//         <View style={s.item} />
//         <View style={s.item} />
//         <View style={s.item} />
//       </View>
//     </View>
//   );
// }

// const s = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#0F172A',
//     padding: 16,
//   },
//   linha: {
//     flexDirection: 'row',
//     gap: 8,
//   },
//   item: {
//     width: 40,
//     height: 40,
//     backgroundColor: '#61DAFB',
//   },
// });

//Exemplo 12

// import React from 'react';
// import { View, StyleSheet } from 'react-native';

// export default function App() {
//   return (
//     <View style={s.container}>
//       <View style={s.linha}>
//         <View style={s.item} />
//         <View style={[s.item, { alignSelf: 'flex-end', backgroundColor: '#FFB86C' }]} />
//         <View style={s.item} />
//       </View>
//     </View>
//   );
// }

// const s = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#0F172A',
//     padding: 16,
//   },
//   linha: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     height: 120,
//     backgroundColor: '#1E293B',
//     gap: 8,
//   },
//   item: {
//     width: 40,
//     height: 40,
//     backgroundColor: '#61DAFB',
//   },
// });

//Exemplo 13

// import React from 'react';
// import { View } from 'react-native';

// export default function App() {
//   return (
//     <View style={{ flex: 1, flexDirection: 'row' }}>
//       <View style={{ flex: 2, backgroundColor: '#61DAFB' }} />
//       <View style={{ flex: 1, backgroundColor: '#FFB86C' }} />
//     </View>
//   );
// }

//Exemplo 14

// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function App() {
//   return (
//     <View style={s.container}>
//       <View style={s.grade}>
//         {['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'].map((item, index) => (
//           <View key={index} style={s.chip}>
//             <Text style={{ color: '#fff' }}>{item}</Text>
//           </View>
//         ))}
//       </View>
//     </View>
//   );
// }

// const s = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 16,
//     backgroundColor: '#0F172A',
//   },
//   grade: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     gap: 12,
//     rowGap: 8,
//     columnGap: 16,
//   },
//   chip: {
//     paddingHorizontal: 14,
//     paddingVertical: 8,
//     borderRadius: 999,
//     backgroundColor: '#1E293B',
//   },
// });

//Exemplo 15

// import React from 'react';
// import { View, Text, StyleSheet, Image } from 'react-native';

// export default function App() {
//   return (
//     <View style={s.container}>
//       <View style={s.card}>
//         <Image style={s.foto} source={{ uri: 'https://via.placeholder.com/150' }} />
//         <View style={s.selo}>
//           <Text style={s.seloTexto}>NOVO</Text>
//         </View>
//       </View>
//     </View>
//   );
// }

// const s = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#0F172A',
//   },
//   card: {
//     position: 'relative',
//     width: 200,
//     height: 120,
//     backgroundColor: '#1E293B',
//     borderRadius: 8,
//   },
//   foto: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 8,
//   },
//   selo: {
//     position: 'absolute',
//     top: 8,
//     right: 8,
//     zIndex: 2,
//     backgroundColor: '#61DAFB',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 4,
//   },
//   seloTexto: {
//     fontSize: 10,
//     fontWeight: 'bold',
//     color: '#000',
//   },
// });

//Exemplo 16

// import React from 'react';
// import { View, Text, StyleSheet, Image } from 'react-native';

// export default function App() {
//   return (
//     <View style={s.container}>
//       <View style={s.card}>
//         <Image style={s.foto} source={{ uri: 'https://via.placeholder.com/150' }} />
//         <View style={s.selo}>
//           <Text style={s.seloTexto}>NOVO</Text>
//         </View>
//       </View>
//     </View>
//   );
// }

// const s = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#0F172A',
//   },
//   card: {
//     position: 'relative',
//     width: 200,
//     height: 120,
//     backgroundColor: '#1E293B',
//     borderRadius: 8,
//   },
//   foto: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 8,
//   },
//   selo: {
//     position: 'absolute',
//     top: 8,
//     right: 8,
//     zIndex: 2,
//     backgroundColor: '#61DAFB',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 4,
//   },
//   seloTexto: {
//     fontSize: 10,
//     fontWeight: 'bold',
//     color: '#000',
//   },
// });

// //Exemplo 17

// import React from 'react';
// import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

// export default function App() {
//   return (
//     <SafeAreaView style={s.tela}>
//       <View style={s.header}>
//         <Text style={s.titulo}>Conversas</Text>
//       </View>
//       <ScrollView style={s.conteudo}>
//         <Text style={{ color: '#fff' }}>Área de Conteúdo Rável</Text>
//       </ScrollView>
//       <View style={s.footer}>
//         <Text style={{ color: '#fff' }}>Nova mensagem</Text>
//       </View>
//     </SafeAreaView>
//   );
// }

// const s = StyleSheet.create({
//   tela: {
//     flex: 1,
//     backgroundColor: '#12151C',
//   },
//   header: {
//     height: 56,
//     justifyContent: 'center',
//     padding: 16,
//   },
//   titulo: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   conteudo: {
//     flex: 1,
//   },
//   footer: {
//     padding: 16,
//     borderTopWidth: 1,
//     borderColor: '#323D54',
//   },
// });

// //Exemplo 18

// import React from 'react';
// import { View, Text, StyleSheet, Image } from 'react-native';

// export default function App() {
//   const foto = { uri: 'https://via.placeholder.com/100' };

//   return (
//     <View style={s.container}>
//       <View style={s.item}>
//         <Image style={s.avatar} source={foto} />
//         <View style={s.textos}>
//           <Text style={s.nome} numberOfLines={1}>Ana Souza</Text>
//           <Text style={s.sub} numberOfLines={1}>Combinado, até amanhã!</Text>
//         </View>
//         <Text style={s.hora}>12:04</Text>
//       </View>
//     </View>
//   );
// }

// const s = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0F172A',
//     justifyContent: 'center',
//     padding: 12,
//   },
//   item: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 12,
//     padding: 12,
//   },
//   avatar: {
//     width: 44,
//     height: 44,
//     borderRadius: 22,
//   },
//   textos: {
//     flex: 1,
//   },
//   nome: {
//     color: '#FFF',
//     fontWeight: 'bold',
//   },
//   sub: {
//     color: '#97A3B8',
//   },
//   hora: {
//     color: '#97A3B8',
//     fontSize: 12,
//   },
// });

// //Exemplo 19

// import React from 'react';
// import { View, Text, StyleSheet, ScrollView } from 'react-native';

// export default function App() {
//   return (
//     <View style={s.container}>
//       <ScrollView
//         style={{ flex: 1 }}
//         contentContainerStyle={{
//           flexGrow: 1,
//           padding: 16,
//           gap: 12,
//         }}
//       >
//         <View style={s.centro}>
//           <Text style={{ color: '#fff' }}>Conteúdo Centralizado</Text>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const s = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0F172A',
//   },
//   centro: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
