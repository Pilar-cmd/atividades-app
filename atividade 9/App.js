//Exemplo 1
// import React, { useState, useEffect } from 'react';
// import { View, Text, Button } from 'react-native';

// export default function App() {
//   const [contador, setContador] = useState(0);

//   useEffect(() => {
//     console.log('montou!');
//   }, []);

//   useEffect(() => {
//     console.log('contador mudou para:', contador);
//   }, [contador]);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Contador: {contador}</Text>
//       <Button
//         title="Aumentar"
//         onPress={() => setContador(contador + 1)}
//       />
//     </View>
//   );
// }



//Exemplo 2
// import React, { useState, useEffect } from 'react';
// import { View, Text } from 'react-native';

// export default function App() {
//   const [segundos, setSegundos] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => {
//       console.log('tick');
//       setSegundos(valor => valor + 1);
//     }, 1000);

//     return () => clearInterval(id);
//   }, []);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Segundos: {segundos}</Text>
//     </View>
//   );
// }



//Exemplo 3
// import React, { useState, useEffect } from 'react';
// import { View, Text, Button } from 'react-native';

// export default function App() {
//   const [id, setId] = useState(1);
//   const [usuario, setUsuario] = useState(null);

//   useEffect(() => {
//     setUsuario(null);

//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//       .then(res => res.json())
//       .then(dados => setUsuario(dados));
//   }, [id]);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Usuário {id}</Text>
//       <Text>{usuario ? usuario.name : 'Carregando...'}</Text>
//       <Button
//         title="Próximo usuário"
//         onPress={() => setId(id >= 10 ? 1 : id + 1)}
//       />
//     </View>
//   );
// }
