

import React, { useState, useEffect } from 'react'

import { View, Text, Button, StyleSheet } from 'react-native'


const LoginFunction = (props) => {

  const [name, setName] = useState('')


  useEffect(() => {
    console.log('Creación')
  }, [])

  useEffect(() => {
    if (name !== '') {
      console.log('Actualizado')
    }
  }, [name])

  useEffect(() => {
    return () => {
      console.log('Eliminado')
    }
  }, [])

  const handleButton = () => {
    setName('Jhon')
  }

  return (
    <View>
      <View style={style.container}>
        <Text style={[style.textColor]}>Mi nombre es: </Text>
        <Text>{name} {props.lastName}</Text>
      </View>
      <Button onPress={handleButton} title="Nombre" />
    </View>
  )
}

const style = StyleSheet.create({
  textColor: {
    color: 'black',
    fontWeight: 'bold'
  },
  container: {
    flexDirection: 'row'
  }
})

export default LoginFunction