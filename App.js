/**
 * Author: Cadence, SAO I KUAN
 * Student# 301204757
 * Date: 27 Sept 2022
 */

import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Button, Switch, TouchableHighlight} from 'react-native'

class Inputs extends Component { //create class
  
  constructor() {
    super();
    this.state = {
      weight: 0,
      height: 0,
      bmi: ' ',
      currentMode: 'metric', 
    };
  }

    handleWgt = (text) =>{
        this.setState({weight: +text})
    }

    handleHgt = (text) => {
        this.setState({height: +text})
    }

  calBMI = (weight, height, currentMode) => { // BMI func create, 3 variables
    const rslt = currentMode === 'metric' ? weight / (height / 100) ** 2 // if metric mode 
         : weight / (height * height) * 703; // if imperial mode
         const convertedBmi = rslt.toFixed(1); // round result .1 digit
      const resultInfo = rslt < 18.5 ? "Underweight" : (rslt => 18.5 && rslt <= 24.9) ? "Normal" : (rslt > 25 && rslt <= 29.9) ? "Overweight" : "Obese" //show body notice
      console.log("rslt", rslt) 
      console.log("convertedBmi", convertedBmi)
        this.setState({bmi: convertedBmi, result: resultInfo}) 
    }


  
    render() { //render to app
      return (
        <View style={styles.container}>
            
            <Text //title setup
              name='title' 
              style={[styles.title]}>BMI Calculator 
            </Text>

          
          <View style={styles.switchContainer}> 
            <TouchableHighlight //metric mode calling
              style={this.state.currentMode === 'metric' ? styles.itemActive : styles.item} //shift color
              onPress={() => this.setState({ currentMode: 'metric' })} // choose mode
            >
              <Text style={this.state.currentMode === 'metric' ? styles.activeText : styles.inactiveText}>Metric</Text> 
            </TouchableHighlight>   

            <TouchableHighlight // call imperial mode
              style={this.state.currentMode === 'imperial' ? styles.itemActive : styles.item}
              onPress={() => this.setState({ currentMode: 'imperial' })}
            >
              <Text style={this.state.currentMode === 'imperial' ? styles.activeText : styles.inactiveText}>Imperial</Text>
            </TouchableHighlight>

          </View>
            <Text  //weight title
              name='titleWeight' 
              style={[styles.title]}> {/*change weight text once button clicked*/}
              {this.state.currentMode === 'metric' ? 'Weight (kg)' : 'Weight (lbs)'}
            </Text>

            <TextInput // weight input
            style={styles.textbox} 
            value={this.state.weight} 
              onChangeText={(text) => this.setState({ weight: text })}
           />

            <Text  // height title
            name='titleHeight' 
            style={[styles.title]}> {/*change height text once button clicked*/}
            {this.state.currentMode === 'metric' ? 'Height (CM)' : 'Height (IN)'}
            </Text>
           
            <TextInput // height input
              style={styles.textbox} 
              onChangeText = {(text) => this.setState({height: +text})}
              />

            <Text 
            name='titleResult' 
            style={[styles.title]}>
              Result: 
          </Text>
            <Text> {/* bmi title */}
              {this.state.bmi}
            </Text>
            <Text>    
              {this.state.result}
            </Text>

          <Button //button switch call calBMI func
            title='Calculate'
            onPress={ 
              () => this.calBMI(this.state.weight, this.state.height, this.state.currentMode)}>
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
  },
  itemActive:{
    borderColor: 'black', 
    padding: 4,
    borderWidth: '2px',
    alignItems: "center" ,
    backgroundColor:'red'
  },
  item:{
    borderColor: 'black', 
    padding: 4,
    borderWidth: '2px',
    alignItems: "center" ,
    backgroundColor:'grey'
  }
});


// ref: https://medium.com/@hansanapushpakumara/simple-bmi-calculator-using-react-native-with-expo-ac20ee7467cc