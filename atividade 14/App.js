//Exemplo 1
// import React from 'react';
// import {
//   View,
//   Text,
//   Button,
//   Linking,
//   StyleSheet,
// } from 'react-native';

// import { useCameraPermissions } from 'expo-camera';

// function ComPermissao({ children }) {
//   const [permission, requestPermission] =
//     useCameraPermissions();

//   if (!permission) return null;

//   if (permission.granted) {
//     return children;
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.texto}>
//         Precisamos da câmera para ler o QR Code.
//       </Text>

//       {permission.canAskAgain ? (
//         <Button
//           title="Permitir"
//           onPress={requestPermission}
//         />
//       ) : (
//         <Button
//           title="Abrir ajustes"
//           onPress={() => Linking.openSettings()}
//         />
//       )}
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <ComPermissao>
//       <View style={styles.container}>
//         <Text style={styles.titulo}>
//           Câmera liberada!
//         </Text>
//         <Text>Permissão concedida com sucesso.</Text>
//       </View>
//     </ComPermissao>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   titulo: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   texto: {
//     fontSize: 18,
//     textAlign: 'center',
//     marginBottom: 20,
//   },
// });



//Exemplo 2

// import React from 'react';
// import {
//   View,
//   Button,
//   Alert,
//   StyleSheet,
// } from 'react-native';

// import * as Notifications from 'expo-notifications';

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowBanner: true,
//     shouldShowList: true,
//     shouldPlaySound: true,
//     shouldSetBadge: false,
//   }),
// });

// export default function App() {

//   async function agendarLembrete() {

//     await Notifications.setNotificationChannelAsync(
//       'default',
//       {
//         name: 'Lembretes',
//         importance: Notifications.AndroidImportance.HIGH,
//       }
//     );

//     const { status } =
//       await Notifications.requestPermissionsAsync();

//     if (status !== 'granted') {
//       Alert.alert('Erro', 'Permissão negada.');
//       return;
//     }

//     await Notifications.scheduleNotificationAsync({
//       content: {
//         title: 'Hora de estudar',
//         body: 'Revise o módulo 2.',
//       },
//       trigger: {
//         type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
//         seconds: 5,
//       },
//     });

//     Alert.alert(
//       'Sucesso',
//       'Lembrete agendado para daqui a 5 segundos!'
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Button
//         title="Agendar lembrete"
//         onPress={agendarLembrete}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
// });



//Exemplo 3
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   Button,
//   Alert,
//   StyleSheet,
// } from 'react-native';

// import * as Notifications from 'expo-notifications';
// import * as Device from 'expo-device';
// import Constants from 'expo-constants';

// export default function App() {
//   const [token, setToken] = useState('');

//   async function gerarToken() {

//     if (!Device.isDevice) {
//       Alert.alert(
//         'Atenção',
//         'Utilize um aparelho físico.'
//       );
//       return;
//     }

//     const { status } =
//       await Notifications.requestPermissionsAsync();

//     if (status !== 'granted') {
//       Alert.alert('Erro', 'Permissão negada.');
//       return;
//     }

//     const projectId =
//       Constants.expoConfig?.extra?.eas?.projectId ||
//       Constants.easConfig?.projectId;

//     if (!projectId) {
//       Alert.alert(
//         'Erro',
//         'Configure o projectId do EAS.'
//       );
//       return;
//     }

//     const { data } =
//       await Notifications.getExpoPushTokenAsync({
//         projectId,
//       });

//     setToken(data);

//     Alert.alert('Sucesso', 'Token gerado!');
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.titulo}>
//         Notificação Push
//       </Text>

//       <Button
//         title="Gerar token"
//         onPress={gerarToken}
//       />

//       {token !== '' && (
//         <Text style={styles.token}>
//           {token}
//         </Text>
//       )}
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
//   titulo: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   token: {
//     marginTop: 20,
//     fontSize: 12,
//   },
// });



//Exemplo 4
// import React, { useEffect, useState } from 'react';

// import {
//   View,
//   Text,
//   Alert,
//   Linking,
//   StyleSheet,
// } from 'react-native';

// import * as Notifications from 'expo-notifications';

// export default function App() {

//   const [mensagem, setMensagem] = useState(
//     'Aguardando notificações...'
//   );

//   useEffect(() => {

//     const recebida =
//       Notifications.addNotificationReceivedListener(
//         (n) => {
//           setMensagem(
//             'Chegou: ' + n.request.content.title
//           );
//         }
//       );

//     const tocada =
//       Notifications.addNotificationResponseReceivedListener(
//         (resposta) => {

//           const { url } =
//             resposta.notification.request.content.data;

//           if (url) {
//             Alert.alert(
//               'Notificação tocada',
//               'Deseja abrir o endereço?',
//               [
//                 { text: 'Cancelar' },
//                 {
//                   text: 'Abrir',
//                   onPress: () => Linking.openURL(url),
//                 },
//               ]
//             );
//           }
//         }
//       );

//     return () => {
//       recebida.remove();
//       tocada.remove();
//     };

//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.titulo}>
//         Ouvintes de notificações
//       </Text>

//       <Text style={styles.texto}>
//         {mensagem}
//       </Text>
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
//   titulo: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   texto: {
//     fontSize: 17,
//     textAlign: 'center',
//   },
// });



//Exemplo 5
// import React, { useRef, useState } from 'react';

// import {
//   View,
//   Button,
//   Image,
//   StyleSheet,
// } from 'react-native';

// import {
//   CameraView,
//   useCameraPermissions,
// } from 'expo-camera';

// export default function App() {

//   const [permission, requestPermission] =
//     useCameraPermissions();

//   const [foto, setFoto] = useState(null);

//   const camera = useRef(null);

//   if (!permission) {
//     return null;
//   }

//   if (!permission.granted) {
//     return (
//       <View style={styles.container}>
//         <Button
//           title="Permitir câmera"
//           onPress={requestPermission}
//         />
//       </View>
//     );
//   }

//   async function tirarFoto() {

//     const resultado =
//       await camera.current.takePictureAsync({
//         quality: 0.7,
//       });

//     setFoto(resultado.uri);
//   }

//   return (
//     <View style={styles.container}>

//       <CameraView
//         ref={camera}
//         style={styles.camera}
//         facing="back"
//       />

//       <Button
//         title="Tirar foto"
//         onPress={tirarFoto}
//       />

//       {foto && (
//         <Image
//           source={{ uri: foto }}
//           style={styles.foto}
//         />
//       )}

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   camera: {
//     flex: 1,
//   },
//   foto: {
//     height: 160,
//     width: 160,
//     alignSelf: 'center',
//     margin: 10,
//   },
// });



//Exemplo 6
// import React, { useState } from 'react';

// import {
//   View,
//   Text,
//   Button,
//   StyleSheet,
// } from 'react-native';

// import {
//   CameraView,
//   useCameraPermissions,
// } from 'expo-camera';

// export default function App() {

//   const [permission, requestPermission] =
//     useCameraPermissions();

//   const [lido, setLido] = useState(null);

//   if (!permission) {
//     return null;
//   }

//   if (!permission.granted) {
//     return (
//       <View style={styles.container}>
//         <Button
//           title="Permitir câmera"
//           onPress={requestPermission}
//         />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>

//       <CameraView
//         style={styles.camera}
//         barcodeScannerSettings={{
//           barcodeTypes: ['qr'],
//         }}
//         onBarcodeScanned={
//           lido ? undefined : ({ data }) => setLido(data)
//         }
//       />

//       {lido && (
//         <View style={styles.resultado}>

//           <Text style={styles.texto}>
//             Conteúdo: {lido}
//           </Text>

//           <Button
//             title="Ler outro"
//             onPress={() => setLido(null)}
//           />

//         </View>
//       )}

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   camera: {
//     flex: 1,
//   },
//   resultado: {
//     padding: 20,
//     alignItems: 'center',
//   },
//   texto: {
//     fontSize: 18,
//     marginBottom: 20,
//   },
// });




//Exemplo 7
// import React, { useState, useEffect } from 'react';

// import {
//   View,
//   Text,
//   ActivityIndicator,
//   StyleSheet,
// } from 'react-native';

// import MapView, { Marker } from 'react-native-maps';
// import * as Location from 'expo-location';

// export default function App() {

//   const [posicao, setPosicao] = useState(null);

//   useEffect(() => {

//     async function buscarLocalizacao() {

//       const { status } =
//         await Location.requestForegroundPermissionsAsync();

//       if (status !== 'granted') {
//         return;
//       }

//       const { coords } =
//         await Location.getCurrentPositionAsync({});

//       setPosicao({
//         latitude: coords.latitude,
//         longitude: coords.longitude,
//       });
//     }

//     buscarLocalizacao();

//   }, []);

//   if (!posicao) {
//     return (
//       <View style={styles.carregando}>
//         <ActivityIndicator size="large" />
//         <Text>Buscando localização...</Text>
//       </View>
//     );
//   }

//   return (
//     <MapView
//       style={styles.mapa}
//       showsUserLocation={true}
//       initialRegion={{
//         ...posicao,
//         latitudeDelta: 0.01,
//         longitudeDelta: 0.01,
//       }}
//     >

//       <Marker
//         coordinate={posicao}
//         title="Você está aqui"
//       />

//     </MapView>
//   );
// }

// const styles = StyleSheet.create({
//   mapa: {
//     flex: 1,
//   },
//   carregando: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
