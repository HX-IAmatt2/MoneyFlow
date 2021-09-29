import axios from 'axios'
import { ApiURL } from '../config'

export const apiGetCategories = async () => {
  const response = await axios.get(`${ApiURL}/categories`)
  return response.data
}

export const apiGetLastMovements = async () => {
  const response = await axios.get(`${ApiURL}/movements/last`)
  return response.data
}

export const apiGetAllMovements = async () => {
  const response = await axios.get(`${ApiURL}/movements/`)
  return response.data
}

export const apiGetBalance = async () => {
  const response = await axios.get(`${ApiURL}/movements/balance`)
  return response.data
}

export const apiAddMovement = (data) => {
  try {
    axios.post(`${ApiURL}/movements/`, data)
  } catch (error) { console.log(error) }
}

export const apiEditMovement = (movementID, data) => {
  try {
    axios.patch(`${ApiURL}/movements/${movementID}`, data)
  } catch (error) { console.log(error) }
}

export const apiDeleteMovement = (movementID) => {
  try {
    axios.delete(`${ApiURL}/movements/${movementID}`)
  } catch (error) { console.log(error) }
}
