import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';

// You can import from local files
import AssetExample from './AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

import TaskList from './src/components/TaskList';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.paragraph}>
//         Change code in the editor and watch it change on your phone! Save to get a shareable url.
//       </Text>
//       <Card>
//         <AssetExample />
//       </Card>
//     </View>
//   );
// }

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TaskList />
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
