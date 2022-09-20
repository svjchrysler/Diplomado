
import axios from 'axios'

const URL = "https://firestore.googleapis.com/v1/projects/diplomado-49eba/databases/(default)/documents/products/"


export const getProductById = (firestoreId) => {
  return fetch(`${URL}${firestoreId}`).then((response) => response.json())
}

export const getProductByIdA = (firestoreId) => {
  return axios.get(`${URL}${firestoreId}`)
}