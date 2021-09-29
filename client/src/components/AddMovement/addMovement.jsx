import { useState } from 'react'
import { toastCustom } from '../common/toastify'
import AddMovementView from './addMovement.view'
import { apiAddMovement, apiGetBalance, apiGetLastMovements, apiGetAllMovements } from '../../functions/apiFunctions'

const AddMovement = ({ addModalShow, handleClose, categories, setBalance, view, setList }) => {
  const [form, setForm] = useState({
    concept: '',
    date: '',
    category: 'House',
    amount: 0,
    type: 'Outcome'
  })

  const handleChange = (eventName, eventValue) => {
    setForm(prev => ({ ...prev, [eventName]: eventValue }))
  }

  const submit = async () => {
    await apiAddMovement(form)
    setTimeout(async () => {
      view === 'last' ? setList(await apiGetLastMovements()) : setList(await apiGetAllMovements())
      setBalance(await apiGetBalance())
    }, 2000)
    handleClose()
    toastCustom('Movement added', 'success', 4000, 'bottom-right')
  }

  return (
    <AddMovementView
      addModalShow={addModalShow}
      handleClose={handleClose}
      handleChange={handleChange}
      submit={submit}
      categories={categories}
    />

  )
}

export default AddMovement
