import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Button, Switch} from 'react-native'

class Inputs extends Component {
  
    Ustatus = {
        weight:'',
        height:'',
        bmi:'',
    }

    handleWgt = (text) =>{
        this.setState({weight: text})
    }

    handleHgt = (text) => {
        this.setState({height: text})
    }

    calBMI = (weight, height) => {
        var rslt = (parseFloat(weight))/((parseFloat(height)*100)^2);
        rslt = rslt.toFixed(2);
        this.setState({bmi: rslt})
    }


  
    render() {
      return (
        <View style={styles.container}>
            
            <Text 
            name='title' 
            style={[styles.title]}>BMI Calculator
            </Text>

            <Text 
            name='titleWeight' 
            style={[styles.title]}>
              Weight: 
            </Text>

            <TextInput 
            name='Weight' 
            style={styles.textbox} 
            placeholder = "kg" 
            onChangeText = {this.handleWgt}>
            </TextInput>

            <Text 
            name='titleHeight' 
            style={[styles.title]}>
              Height:
            </Text>

            <TextInput 
            name='Height' 
            style={styles.textbox} 
            placeholder = "cm" 
            onChangeText = {this.handleHgt}>
            </TextInput>

            <Text 
            name='titleResult' 
            style={[styles.title]}>
              Result:
            </Text>

            <Text 
            name='output'
            style = {styles.textbox}>
              {this.Ustatus.bmi}
            </Text>

            <Button
            title='Calculate'
            onPress={
              () => this.calBMI(this.Ustatus.weight, this.Ustatus.height)}>
            </Button>
        </View>
        )
    }
}
  export default Inputs

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


// ref: https://medium.com/@hansanapushpakumara/simple-bmi-calculator-using-react-native-with-expo-ac20ee7467cc