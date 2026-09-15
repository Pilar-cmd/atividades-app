// Exercício 1


// import React from 'react';
// import { View, StyleSheet } from 'react-native';


// export default function Exercisio1() {
//   return (
//     <View style={styles.container}>
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#3498db',
//   },
// });


// Exercício 2


// import React from 'react';
// import { View, StyleSheet } from 'react-native';


// export default function Exercisio2() {
//   return (
//     <View style={styles.container}>
//       <View style={[styles.box, { backgroundColor: 'red' }]} />
//       <View style={[styles.box, { backgroundColor: 'green' }]} />
//       <View style={[styles.box, { backgroundColor: 'blue' }]} />
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//   },
//   box: {
//     width: 100,
//     height: 100,
//   },
// });


// Exercício 3


// import React from 'react';
// import { View, StyleSheet } from 'react-native';


// export default function Exercisio3() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.box} />
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   box: {
//     width: 150,
//     height: 150,
//     backgroundColor: 'red',
//   },
// });


// Exercício 4


// import React from 'react';
// import { View, StyleSheet } from 'react-native';


// export default function Exercisio4() {
//   return (
//     <View style={styles.container}>
//       <View style={[styles.box, { backgroundColor: 'purple' }]} />
//       <View style={[styles.box, { backgroundColor: 'orange' }]} />
//       <View style={[styles.box, { backgroundColor: 'teal' }]} />
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   box: {
//     width: 80,
//     height: 80,
//   },
// });


// Exercício 5


// import React from 'react';
// import { View, StyleSheet } from 'react-native';


// export default function Exercisio5() {
//   return (
//     <View style={styles.container}>
//       <View style={[styles.box, { height: 50, backgroundColor: '#e74c3c' }]} />
//       <View style={[styles.box, { height: 100, backgroundColor: '#2ecc71' }]} />
//       <View style={[styles.box, { height: 75, backgroundColor: '#f1c40f' }]} />
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//   },
//   box: {
//     width: 100,
//   },
// });


// Exercício 6


// import React from 'react';
// import { View, StyleSheet } from 'react-native';


// export default function Exercisio6() {
//   return (
//     <View style={styles.container}>
//       <View style={[styles.box, { backgroundColor: '#34495e' }]} />
//       <View style={[styles.box, { backgroundColor: '#9b59b6' }]} />
//       <View style={[styles.box, { backgroundColor: '#34495e' }]} />
//       <View style={[styles.box, { backgroundColor: '#9b59b6' }]} />
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   box: {
//     width: 80,
//     height: 80,
//     marginVertical: 5,
//   },
// });


// Exercício 7


// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


// export default function Exercisio7() {
//   return (
//     <View style={styles.menu}>
//       <TouchableOpacity style={styles.item}><Text>Início</Text></TouchableOpacity>
//       <TouchableOpacity style={styles.item}><Text>Busca</Text></TouchableOpacity>
//       <TouchableOpacity style={styles.item}><Text>Perfil</Text></TouchableOpacity>
//       <TouchableOpacity style={styles.item}><Text>Config</Text></TouchableOpacity>
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   menu: {
//     flexDirection: 'row',
//     width: '100%',
//     height: 60,
//     backgroundColor: '#eee',
//   },
//   item: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 0.5,
//     borderColor: '#ccc',
//   },
// });


// Exercício 8


// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';


// export default function Exercisio8() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.avatar} />
//       <Text style={styles.name}>Pilar Linda</Text>
//       <Text style={styles.bio}>Desenvolvedora React Native | Apaixonada por tecnologia.</Text>
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     paddingTop: 50,
//   },
//   avatar: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     backgroundColor: '#bdc3c7',
//     marginBottom: 15,
//   },
//   name: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   bio: {
//     fontSize: 14,
//     color: '#7f8c8d',
//     textAlign: 'center',
//     paddingHorizontal: 20,
//   },
// });


// Exercício 9


// import React from 'react';
// import { View, StyleSheet } from 'react-native';


// export default function Exercisio9() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.card} />
//       <View style={styles.card} />
//       <View style={styles.card} />
//       <View style={styles.card} />
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     padding: 10,
//   },
//   card: {
//     width: '48%',
//     height: 120,
//     backgroundColor: '#1abc9c',
//     margin: '1%',
//     borderRadius: 8,
//   },
// });


// Exercício 10


// import React from 'react';
// import { View, Text, ScrollView, StyleSheet } from 'react-native';


// export default function Exercisio10() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Header Fixo</Text>
//       </View>
//       <ScrollView style={styles.content}>
//         {Array.from({ length: 20 }).map((_, i) => (
//           <View key={i} style={styles.item}>
//             <Text>Item de Conteúdo {i + 1}</Text>
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   header: {
//     height: 60,
//     backgroundColor: '#34495e',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   headerTitle: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   content: {
//     flex: 1,
//     padding: 15,
//   },
//   item: {
//     padding: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
// });


// Exercício 11


// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';


// export default function Exercisio11() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.content} />
//       <View style={styles.bottomNav}>
//         <Text>Ícone 1</Text>
//         <Text>Ícone 2</Text>
//         <Text>Ícone 3</Text>
//       </View>
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   content: {
//     flex: 1,
//   },
//   bottomNav: {
//     height: 60,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     borderTopWidth: 1,
//     borderColor: '#e0e0e0',
//   },
// });


// Exercício 12


// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';


// export default function Exercisio12() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.card}>
//         <View style={styles.imagePlaceholder} />
//         <Text style={styles.title}>Fone de Ouvido Bluetooth</Text>
//         <Text style={styles.price}>R$ 199,90</Text>
//       </View>
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   card: {
//     width: 200,
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: '#e0e0e0',
//     overflow: 'hidden',
//     padding: 10,
//     backgroundColor: '#fff',
//   },
//   imagePlaceholder: {
//     width: '100%',
//     height: 120,
//     backgroundColor: '#3498db',
//     borderRadius: 8,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginTop: 10,
//   },
//   price: {
//     fontSize: 14,
//     color: '#2ecc71',
//     marginTop: 5,
//   },
// });


// Exercício 13


// import React from 'react';
// import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';


// export default function Exercisio13() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.logo} />
//       <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" />
//       <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.buttonText}>Entrar</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   logo: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: '#e74c3c',
//     marginBottom: 30,
//   },
//   input: {
//     width: '100%',
//     height: 45,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     marginBottom: 15,
//   },
//   button: {
//     width: '100%',
//     height: 45,
//     backgroundColor: '#3498db',
//     borderRadius: 8,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });


// Exercício 14


// import React from 'react';
// import { View, StyleSheet } from 'react-native';


// export default function Exercisio14() {
//   return (
//     <View style={styles.container}>
//       {Array.from({ length: 9 }).map((_, index) => (
//         <View key={index} style={styles.photoBox} />
//       ))}
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     width: '100%',
//   },
//   photoBox: {
//     width: '33.33%',
//     aspectRatio: 1,
//     borderWidth: 1,
//     borderColor: '#fff',
//     backgroundColor: '#95a5a6',
//   },
// });


// Exercício 15


// import React from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


// export default function Exercisio15() {
//   const fotoPerfil = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400';
//   const fotoPost = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800';


//   return (
//     <View style={styles.card}>
//       <View style={styles.header}>
//         <Image source={{ uri: fotoPerfil }} style={styles.avatar} />
//         <Text style={styles.username}>Pilarzinha</Text>
//       </View>


//       <Text style={styles.postText}>Aproveitando o dia ensolarado na praia! ☀️🌊</Text>


//       <Image source={{ uri: fotoPost }} style={styles.postImage} />


//       <View style={styles.actions}>
//         <TouchableOpacity style={styles.actionButton}>
//           <Text style={styles.actionText}>Curtir</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.actionButton}>
//           <Text style={styles.actionText}>Comentar</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.actionButton}>
//           <Text style={styles.actionText}>Compartilhar</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: '#fff',
//     padding: 15,
//     marginVertical: 10,
//     borderBottomWidth: 1,
//     borderColor: '#e0e0e0',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   avatar: {
//     width: 45,
//     height: 45,
//     borderRadius: 22.5,
//     marginRight: 10,
//   },
//   username: {
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   postText: {
//     fontSize: 14,
//     marginBottom: 10,
//     color: '#333',
//   },
//   postImage: {
//     width: '100%',
//     height: 220,
//     borderRadius: 8,
//     marginBottom: 10,
//   },
//   actions: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     borderTopWidth: 1,
//     borderTopColor: '#f0f0f0',
//     paddingTop: 10,
//   },
//   actionButton: {
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//   },
//   actionText: {
//     color: '#555',
//     fontWeight: '600',
//   },
// });


// Exercício 16


// import React from 'react';
// import { View, Text, Image, StyleSheet, FlatList } from 'react-native';


// export default function Exercisio16() {
//   // Lista com múltiplos produtos
//   const produtos = [
//     {
//       id: '1',
//       nome: 'Fone de Ouvido Bluetooth',
//       descricao: 'Cancelamento de ruído ativo',
//       preco: 'R$ 299,90',
//       foto: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200',
//     },
//     {
//       id: '2',
//       nome: 'Smartwatch Esportivo',
//       descricao: 'Monitor cardíaco e GPS',
//       preco: 'R$ 450,00',
//       foto: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200',
//     },
//     {
//       id: '3',
//       nome: 'Mochila para Notebook',
//       descricao: 'Impermeável com entrada USB',
//       preco: 'R$ 189,90',
//       foto: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200',
//     },
//     {
//       id: '4',
//       nome: 'Garrafa Térmica 1L',
//       descricao: 'Mantém gelado por 24 horas',
//       preco: 'R$ 89,90',
//       foto: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=200',
//     },
//   ];


//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={produtos}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.itemContainer}>
//             <Image source={{ uri: item.foto }} style={styles.photo} />


//             <View style={styles.infoContainer}>
//               <Text style={styles.name}>{item.nome}</Text>
//               <Text style={styles.desc}>{item.descricao}</Text>
//             </View>


//             <Text style={styles.price}>{item.preco}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   itemContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   photo: {
//     width: 60,
//     height: 60,
//     borderRadius: 8,
//   },
//   infoContainer: {
//     flex: 1,
//     marginLeft: 12,
//   },
//   name: {
//     fontSize: 15,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   desc: {
//     fontSize: 12,
//     color: '#777',
//     marginTop: 2,
//   },
//   price: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#2ecc71',
//   },
// });


// Exercício 17


// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';


// export default function Exercisio17() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.card}>
//         <Text style={styles.title}>Vendas</Text>
//         <Text style={styles.value}>1.240</Text>
//       </View>
//       <View style={styles.card}>
//         <Text style={styles.title}>Visitas</Text>
//         <Text style={styles.value}>45.2K</Text>
//       </View>
//       <View style={styles.card}>
//         <Text style={styles.title}>Conversão</Text>
//         <Text style={styles.value}>3.2%</Text>
//       </View>
//       <View style={styles.card}>
//         <Text style={styles.title}>Lucro</Text>
//         <Text style={styles.value}>R$ 8.4K</Text>
//       </View>
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     padding: 10,
//   },
//   card: {
//     width: '46%',
//     height: '46%',
//     margin: '2%',
//     backgroundColor: '#8e44ad',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 12,
//   },
//   title: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   value: {
//     color: '#fff',
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
// });


// Exercício 18


// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';


// export default function Exercisio18() {
//   return (
//     <View style={styles.container}>
//       <View style={[styles.bubble, styles.received]}>
//         <Text style={styles.sender}>João</Text>
//         <Text>Olá! Tudo bem?</Text>
//         <Text style={styles.time}>10:42</Text>
//       </View>


//       <View style={[styles.bubble, styles.sent]}>
//         <Text>Tudo ótimo! E com você?</Text>
//         <Text style={styles.time}>10:43</Text>
//       </View>
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 15,
//   },
//   bubble: {
//     maxWidth: '80%',
//     padding: 10,
//     borderRadius: 8,
//     marginVertical: 5,
//   },
//   received: {
//     alignSelf: 'flex-start',
//     backgroundColor: '#e5e5ea',
//   },
//   sent: {
//     alignSelf: 'flex-end',
//     backgroundColor: '#dcf8c6',
//   },
//   sender: {
//     fontWeight: 'bold',
//     fontSize: 12,
//     color: '#555',
//   },
//   time: {
//     fontSize: 10,
//     color: '#888',
//     alignSelf: 'flex-end',
//     marginTop: 4,
//   },
// });


// Exercício 19


// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';


// export default function Exercisio19() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.line} />


//       <View style={[styles.eventRow, { justifyContent: 'flex-start' }]}>
//         <View style={styles.contentBox}>
//           <Text style={styles.title}>Evento 1</Text>
//         </View>
//         <View style={styles.circle} />
//       </View>


//       <View style={[styles.eventRow, { justifyContent: 'flex-end' }]}>
//         <View style={styles.circle} />
//         <View style={styles.contentBox}>
//           <Text style={styles.title}>Evento 2</Text>
//         </View>
//       </View>
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingVertical: 20,
//     position: 'relative',
//   },
//   line: {
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     left: '50%',
//     width: 2,
//     backgroundColor: '#ccc',
//   },
//   eventRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 15,
//     width: '100%',
//   },
//   circle: {
//     width: 16,
//     height: 16,
//     borderRadius: 8,
//     backgroundColor: '#e74c3c',
//     zIndex: 1,
//   },
//   contentBox: {
//     width: '40%',
//     padding: 10,
//     backgroundColor: '#ecf0f1',
//     borderRadius: 6,
//     marginHorizontal: 10,
//   },
//   title: {
//     fontWeight: 'bold',
//   },
// });


// Exercício 20


// import React from 'react';
// import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';


// export default function Exercisio20() {
//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.formGroup}>
//         <View style={styles.fieldRow}>
//           <Text style={styles.label}>Nome:</Text>
//           <TextInput style={styles.input} placeholder="Digite seu nome" />
//         </View>


//         <View style={styles.fieldRow}>
//           <Text style={styles.label}>Sobrenome:</Text>
//           <TextInput style={styles.input} placeholder="Digite seu sobrenome" />
//         </View>


//         <View style={styles.fieldRow}>
//           <Text style={styles.label}>E-mail:</Text>
//           <TextInput style={styles.input} placeholder="seu@email.com" keyboardType="email-address" />
//         </View>


//         <View style={styles.fieldRow}>
//           <Text style={styles.label}>Telefone:</Text>
//           <TextInput style={styles.input} placeholder="(00) 00000-0000" keyboardType="phone-pad" />
//         </View>


//         <View style={styles.fieldRow}>
//           <Text style={styles.label}>Endereço:</Text>
//           <TextInput style={styles.input} placeholder="Rua, número e bairro" />
//         </View>


//         <View style={styles.fieldRow}>
//           <Text style={styles.label}>Mensagem:</Text>
//           <TextInput
//             style={[styles.input, styles.textArea]}
//             placeholder="Digite sua mensagem"
//             multiline
//             numberOfLines={3}
//           />
//         </View>


//         <TouchableOpacity style={styles.button}>
//           <Text style={styles.buttonText}>Enviar Formulário</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   formGroup: {
//     padding: 20,
//   },
//   fieldRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   label: {
//     width: 90,
//     textAlign: 'right',
//     marginRight: 12,
//     fontWeight: 'bold',
//     fontSize: 14,
//     color: '#333',
//   },
//   input: {
//     flex: 1,
//     height: 42,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 6,
//     paddingHorizontal: 10,
//     backgroundColor: '#fafafa',
//   },
//   textArea: {
//     height: 80,
//     textAlignVertical: 'top',
//     paddingTop: 8,
//   },
//   button: {
//     backgroundColor: '#2ecc71',
//     paddingVertical: 12,
//     borderRadius: 6,
//     alignItems: 'center',
//     marginTop: 15,
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });



