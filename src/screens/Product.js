import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  Button,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Image,
} from 'react-native';

import ItemProduct from '../components/ItemProduct';
import ModalProduct from '../components/ModalProduct';

import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

const Product = (props) => {
  const [products, setProducts] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  console.log('navigation', props)

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    firestore()
      .collection('products')
      .onSnapshot(async fProducts => {
        let tempProducts = [];
        let promiseImages = [];
        fProducts.forEach(fProduct => {
          tempProducts.push({...fProduct.data(), firebaseId: fProduct.id});
          promiseImages.push(
            storage().ref(fProduct.data().image).getDownloadURL(),
          );
          //console.log('products', fProduct.data())
        });

        const resultPromises = await Promise.all(promiseImages);

        resultPromises.forEach((url, index) => {
          tempProducts[index].image = url;
        });

        console.log('tempProducts', tempProducts)

        setProducts(tempProducts);
      });
  };

  const handleModal = () => {
    setIsVisible(true);
  };

  const handleOnClose = () => {
    setIsVisible(false)
  }

  return (
    <View>
      <FlatList
        style={{height: '95%'}}
        data={products}
        renderItem={ItemProduct}
        keyExtractor={item => item.id}
      />
      <Button
        style={{height: '5%'}}
        title="Agregar Producto"
        onPress={handleModal}
      />
      {isVisible && <ModalProduct onClose={handleOnClose} />}
    </View>
  );
};

export default Product;
