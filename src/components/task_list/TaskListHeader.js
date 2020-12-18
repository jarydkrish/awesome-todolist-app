import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';

const styles = StyleSheet.create({
  cardStyle: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    marginBottom: 10,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    fontSize: 64,
  }
});

const TaskListHeader = () => {
  return (
    <Card style={styles.cardStyle}>
      <View style={styles.container}>
        <Text style={styles.logo}>
          🚀
        </Text>
        <Text style={styles.paragraph}>
          This is a database driven ToDo app written in React Native!
        </Text>
      </View>
    </Card>
  )
}

export default TaskListHeader;
