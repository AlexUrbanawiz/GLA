/**
 * Sample React Native App in plain JS
 * https://reactnative.dev/docs/getting-started
 */

import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, Button, View, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CheckBox from '@react-native-community/checkbox';



const App = () => {
  const [count, setCount] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isSelected1, setSelection1] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [isSelected3, setSelection3] = useState(false);


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.content}>
        <Text style={styles.title}>Grocery List App</Text>
        <Text style={styles.counter}>Count: {count}</Text>
        <Button title="Increase" onPress={() => setCount(count + 1)} />

        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <CheckBox
          value={isSelected1} // Binds the checkbox's current state to the 'isSelected' variable
          onValueChange={setSelection1} // Updates the 'isSelected' state when the user taps the checkbox
          style={styles.checkbox}
          // You can add color customization here if needed (e.g., tintColors={{ true: '#4630EB', false: '#000' }})
        />
        <CheckBox
          value={isSelected2} // Binds the checkbox's current state to the 'isSelected' variable
          onValueChange={setSelection2} // Updates the 'isSelected' state when the user taps the checkbox
          style={styles.checkbox}
          // You can add color customization here if needed (e.g., tintColors={{ true: '#4630EB', false: '#000' }})
        />
        <CheckBox
          value={isSelected3} // Binds the checkbox's current state to the 'isSelected' variable
          onValueChange={setSelection3} // Updates the 'isSelected' state when the user taps the checkbox
          style={styles.checkbox}
          // You can add color customization here if needed (e.g., tintColors={{ true: '#4630EB', false: '#000' }})
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
