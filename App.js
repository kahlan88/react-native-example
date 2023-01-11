// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hello Universe</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import React from 'react';
import Lottie from 'lottie-react-native';

export default function Animation() {
  // Small file size is a lot less likely to crash on iPhone.
  // Keep the animation as simple as possible
  // External images within an animation export crash on Android and shows up grey on iOS

  return <Lottie source={require('./lottie-files/Watermelon.json')} autoPlay loop={true} />;
}
