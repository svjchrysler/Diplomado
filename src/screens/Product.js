import React, { useState, useEffect } from 'react';

import {
  SafeAreaView,
  Button,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Image
} from 'react-native';

import ItemProduct from '../components/ItemProduct'
import ModalProduct from '../components/ModalProduct'

import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    firestore()
      .collection('products')
      .get()
      .then(async fProducts => {
        let tempProducts = [];
        let promiseImages = [];
        fProducts.forEach(fProduct => {
          tempProducts.push(fProduct.data());
          promiseImages.push(
            storage().ref(fProduct.data().image).getDownloadURL(),
          );
          //console.log('products', fProduct.data())
        });

        const resultPromises = await Promise.all(promiseImages);

        resultPromises.forEach((url, index) => {
          tempProducts[index].image = url;
        });

        setProducts(tempProducts);
      });
  };

  const handleModal = () => {
    setIsVisible(true)
  }

  return (
    <View>
      <FlatList style={{ height: '95%' }} data={products} renderItem={ItemProduct} />
      <Button style={{ height: '5%' }} title="Agregar Producto" onPress={handleModal} />
      {isVisible &&
        <ModalProduct />
      }
    </View>
  );
};

export default Product