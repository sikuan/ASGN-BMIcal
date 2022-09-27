import { StyleSheet, Text, View, Image, TextInput, ScrollView, Switch, Button } from 'react-native';
import React, {useState} from "react";

export default function App() {
  
  const bmi = (kg=157, cm=45) => {
    bmi_result = (kg / ((cm / 100) ^ 2)).toFixed(2);
    return bmi_result;
  };

  const bmiHandler = () =>{
    let bmiOutput = new bmi()
    return bmiOutput;
  }

  const [text, setText] = useState("BMI is ...");
  const onPressHandler = event => setText({bmiHandler});

  return (
    <View style={styles.container}>
      <Text name='title' style={[styles.title]}>BMI Calculator</Text>

      <Text name='titleHeight' style={[styles.title]}>Height:</Text>
      <TextInput name='Height' style={styles.textbox}>157</TextInput>

      <Text name='titleWeight' style={[styles.title]}>Weight: </Text>
      <TextInput name='Weight' style={styles.textbox}>45</TextInput>

      <Text name='titleResult' style={[styles.title]}>Result</Text>
      <Text name='result' 
            style={styles.title}
            onChangeText = {bmiHandler}
            >{text}</Text>

      <Button title='Calculate'onPress={onPressHandler}></Button>
      <Switch></Switch>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:'red'
  },
  textbox: { 
    borderColor: 'black', 
    padding: 4,
    borderWidth: '2px',
    alignItems: "center" 
  },
  title: {
    fontWeight: 'bold',
    alignItems: 'center'
  }
});
