
import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

import MapView, { Marker, PROVIDER_GOOGLE, Circle } from 'react-native-maps'; 

const Maps = () => {
  return (
    <View style={styles.container}>
      <MapView 
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: -17.783261,
          longitude: -63.182068,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        <Marker coordinate={{
          latitude: -17.783261,
          longitude: -63.182068
        }} />
        <Marker coordinate={{
          latitude: -17.782841,
          longitude: -63.182191
        }} />
        <Marker coordinate={{
          latitude: -17.783183,
          longitude: -63.181649
        }} />

        <Circle
          center={{
            latitude: -17.782841,
            longitude: -63.182191
          }}
          radius={50}
          fillColor="rgba(0,0,0,0.3)"
        />

      </MapView>
    </View>
  )

}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
})

export default Maps