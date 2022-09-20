

import React, { useEffect, useState } from 'react'

import { View, Text, Image, StyleSheet } from 'react-native'

import { getProductById, getProductByIdA } from '../services/service'

const ProductDetail = ({ navigation, route }) => {

  const [product, setProduct] = useState({})

  const { firestoreId, image } = route.params

  console.log('params', image)

  useEffect(() => {
    getProduct()
  }, [])

  const getProduct = async () => {
    const result = await getProductByIdA(firestoreId)
    setProduct(result.data.fields)
    console.log('result', result)
  }

  return (
    <View>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.contentInformation}>
        <Text style={styles.title}>{product?.name?.stringValue}</Text>
        <Text style={styles.price}>{product?.price?.stringValue}Bs.</Text>
      </View>
      <Text style={styles.description}>
        {
          product?.description?.stringValue
        }
      </Text>
    </View>
  )

}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '50%',
    resizeMode: 'cover'
  },
  contentInformation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10
  },
  title: {
    fontSize: 25,
    color: '#000'
  },
  price: {
    fontSize: 15,
    color: '#FFF',
    backgroundColor: '#666',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10
  },
  description: {
    fontSize: 15,
    textAlign: 'justify',
    marginHorizontal: 10,
    marginTop: 10
  }
})

export default ProductDetail