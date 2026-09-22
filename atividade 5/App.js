// Questão 1)
// Resposta: Letra b)

// Questão 2)
// Resposta: Letra b)

// Questão 3)
// Resposta: b)

// Questão 5)
// Resposta:
// Faltou colocar a propriedade flex: 1 no container (styles.container) pra ele expandir e ocupar a tela inteira na vertical. Como ele está sem isso, a View fica só do tamanho do próprio texto. Além disso, precisa adicionar o justifyContent: 'center' na estilização do container pra conseguir alinhar o conteúdo no meio da tela. 

// Questão 6)
// Resposta:
// Será exibido na tela o texto "Mundo!".
// O estado inicial da variável mensagem começa como "Olá!". Quando o usuário clica no botão "Atualizar", a função atualizarMensagem roda e chama o setMensagem('Mundo!'). Isso altera o estado e faz o React renderizar o componente na tela com o novo texto. 

// Questão 8)
// Resposta:
// Para o Notebook, vai aparecer o valor R$ 2975.00 em destaque, o valor antigo R$ 3500.00 cortado ao lado e o texto "⚠️ ÚLTIMAS UNIDADES" em laranja na parte de baixo.
// Para o Smartphone, vai aparecer apenas o valor R$ 2000.00 e a indicação "EM ESTOQUE" em verde.
// Para o Fone de Ouvido, o card vai ficar com o fundo vermelho, mostrando o valor de R$ 135.00, o preço antigo de R$ 150.00 cortado e o aviso "❌ SEM ESTOQUE" escrito em vermelho.

// Questão 9)
// Resposta:
// import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// export default function App() {
//   const [visivel, setVisivel] = useState(false);

//   return (
//     <View style={styles.container}>
//       <Button 
//         title={visivel ? "Ocultar" : "Mostrar"} 
//         onPress={() => setVisivel(!visivel)} 
//       />
//       {visivel && <Text style={styles.texto}>Texto Oculto Revelado!</Text>}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   texto: {
//     marginTop: 20,
//     fontSize: 18,
//   },
// });



// Questão 11)
// Resposta:
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// // Componente Card
// function Card({ titulo, corFundo = '#f0f0f0' }) {
//   return (
//     <View style={[styles.card, { backgroundColor: corFundo }]}>
//       <Text style={styles.titulo}>{titulo}</Text>
//     </View>
//   );
// }

// // Tela Principal
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Card titulo="Meu Título" corFundo="#d1e7dd" />
//       <Card titulo="Card Padrão" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'stretch',
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   card: {
//     padding: 20,
//     borderRadius: 8,
//     marginVertical: 10,
//     alignItems: 'center',
//   },
//   titulo: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });


