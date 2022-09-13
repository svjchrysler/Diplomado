import React from 'react';

import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

import {Formik} from 'formik';

import * as Yup from 'yup';

const FormProductFormik = () => {


  const FormProductSchema = Yup.object().shape({
    name: Yup.string().required('Campo Requerido'),
    price: Yup.number().moreThan(0, 'Ingresar un valor mayor a Cero').required('Campo Requerido')
  })


  return (
    <Formik
      initialValues={{name: '', price: 0}}
      onSubmit={values => console.log('values', values)}
      validationSchema={FormProductSchema}
      >
      {({handleChange, handleSubmit, values, errors}) => (
        <View style={styles.containerForm}>
          <Text>Nombre</Text>
          <TextInput
            style={styles.inputText}
            value={values.name}
            onChangeText={handleChange('name')}
            placeholder="Nombre"
          />
          {errors.name && (
            <Text style={styles.messageError}>{errors.name}</Text>
          )}
          <Text>Precio</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.inputText}
            value={values.price}
            onChangeText={handleChange('price')}
            placeholder="Precio"
          />
          {errors.price && (
            <Text style={styles.messageError}>{errors.price}</Text>
          )}
          <Button title="Guardar" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

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

export default FormProductFormik;
