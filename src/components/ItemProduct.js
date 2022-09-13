import React from 'react'

import { View, Image, Text, StyleSheet } from 'react-native'


const ItemProduct = ({item}) => {
  return (
    <View style={styles.containerItem}>
      <Image source={{uri: item.image}} style={{width: 100, height: 100}} />
      <Text style={styles.itemProductName}>{item.name}</Text>
      <Text style={styles.itemProductPrice}>{item.price}Bs.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  containerItem: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    margin: 10,
    elevation: 5,
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  itemProductName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'
  },
  itemProductPrice: {
    fontWeight: 'bold',
    fontSize: 15
  }
});

export default ItemProduct