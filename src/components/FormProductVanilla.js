
import React, { useState } from 'react'

import { View, Text, TextInput, StyleSheet, Button } from 'react-native'


const FormProductVanilla = () => {

  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)

  const [isValidName, setIsValidName] = useState(true)
  const [isValidPrice, setIsValidPrice] = useState(true)

  const handleForm = () => {
    setIsValidName(!(name === ''))
    
    setIsValidPrice(!(price === '' || price === 0))

    console.log('form values', name, price)
  }

  const handleName = (text) => {
    setName(text)
  }

  const handlePrice = (text) => {
    setPrice(text)
  }

  return (
    <View style={styles.containerForm}>
      <Text>Nombre</Text>
      <TextInput style={styles.inputText} value={name} onChangeText={handleName} placeholder="Nombre" />
      {
        !isValidName &&
        <Text style={styles.messageError}>Campo Requerido</Text>
      }
      <Text>Precio</Text>
      <TextInput keyboardType="numeric" style={styles.inputText} value={price} onChangeText={handlePrice} placeholder="Precio" />
      {
        !isValidPrice &&
        <Text style={styles.messageError}>Campo Requerido</Text>
      }
      <Button title="Guardar" onPress={handleForm} />
    </View>
  )

}

const styles = StyleSheet.create({
  inputText: {
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10
  },
  containerForm: {
    padding: 20
  },
  messageError: {
    color: 'red',
    fontSize: 10
  }
})

export default FormProductVanilla