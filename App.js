import React from 'react';
import { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

export default function App() {
  
  const buttons = ['C', 'DEL', '%', '/', 7, 8, 9, "x", 4, 5, 6, '-', 1, 2, 3, '+', ',', 0, '+/-', '^','^3', '^2','=',]

  const [currentNumber, setCurrentNumber] = useState("")
  const [lastNumber, setLastNumber] = useState("")


  function calculator() {
    const splitNumbers = currentNumber.split(' ')
    const fistNumber = parseFloat(splitNumbers[0])
    const lastNumber = parseFloat(splitNumbers[2])
    const operator = splitNumbers[1]

    
    switch (operator) {
      case '+':
        setCurrentNumber((fistNumber + lastNumber).toString())
        return
      case '-':
        setCurrentNumber((fistNumber - lastNumber).toString())
        return
      case 'x':
        setCurrentNumber((fistNumber * lastNumber).toString())
        return
      case '/':
        setCurrentNumber((fistNumber / lastNumber).toString())
        return
      case '^2':
        setCurrentNumber((Math.pow(fistNumber,2)).toString())
        return
      case '^3':
      setCurrentNumber((Math.pow(fistNumber,3)).toString())
      return
      case '^':
      setCurrentNumber((Math.pow(fistNumber, lastNumber)).toString())
      return
    }
  }

  function handleInput(buttonPressed) {
    console.log(buttonPressed) 
    if (buttonPressed === '+' | buttonPressed === "-" | buttonPressed === "x" | buttonPressed === "/"
    | buttonPressed === '^2' | buttonPressed === '^3' | buttonPressed === '^' ) {
      setCurrentNumber(currentNumber + " " + buttonPressed + " ")
      return
    }
    switch (buttonPressed) {
      case 'DEL':
        setCurrentNumber(currentNumber.substring(0, (currentNumber.length - 1)))
        return
      case 'LIMPAR ': 
        setLastNumber("")
        setCurrentNumber("")
        return
      case '=':
        setLastNumber(currentNumber + " = ")
        calculator()
        return
      case '+/-':
        setCurrentNumber((-1 * currentNumber).toString())
        return
    }

    setCurrentNumber(currentNumber + buttonPressed)
  }


  return (
    <View style={styles.container}>

      {/* Area onde o resultado é exibido */}
      <View style={styles.results}>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>

      {/* Area onde os botões são exibidos*/}
      <View style={styles.buttons}>

        {buttons.map((button) =>
          button === '=' ? 
            <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[styles.button, { backgroundColor: '#330066' }]}>
              <Text style={[styles.textButton, { color: "white", fontSize: 30 }]}>{button}</Text>
            </TouchableOpacity>
            : // Mapeamento dos outros botões
            <TouchableOpacity onPress={() => handleInput(button)} key={button} style={styles.button}>
              <Text style={[styles.textButton, { color: typeof (button) === 'number' ? 'white' : 'gray' }]}>{button}</Text>
            </TouchableOpacity>
        )}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  results: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: "#000000"
  },
  resultText: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    padding: 12,
    textAlign: "right"
  },
  historyText: {
    color: "gray",
    fontSize: 20,
    marginRight: 10,
    alignSelf: 'flex-end',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: '#4B0082',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 90,
    minHeight: 90,
    flex: 2,
  },
  textButton: {
    color: "green",
    fontSize: 20,
  }
});
