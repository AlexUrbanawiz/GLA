/**
 * Sample React Native App in plain JS
 * https://reactnative.dev/docs/getting-started
 */

import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, Button, View, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const App = () => {
  const [count, setCount] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.content}>
        <Text style={styles.title}>Hello, React Native!</Text>
        <Text style={styles.counter}>Count: {count}</Text>
        <Button title="Increase" onPress={() => setCount(count + 1)} />

        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  counter: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default App;
