
import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

import FormProductVanilla from './FormProductVanilla'
import FormProductFormik from './FormProductFormik'

const ModalProduct = (props) => {


  const { onClose } = props

  return (
    <View style={styles.container}>
      <View style={styles.childContainer}>
        <View style={styles.contentTitle}>
          <Text style={styles.title}>Agregar Producto</Text>
        </View>
        <FormProductFormik onClose={onClose} />
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    backgroundColor: 'transparent',
    zIndex: 1010,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  childContainer: {
    //height: '70%',
    width: '80%',
    backgroundColor: '#FFF',
    elevation: 5,
    borderRadius: 5
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  contentTitle: {
    alignItems: 'center',
    padding: 10
  }
})

export default ModalProduct