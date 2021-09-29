import HomeView from './home.view'
import { useState, useEffect } from 'react'
import {
  apiGetLastMovements,
  apiGetAllMovements,
  apiGetBalance,
  apiDeleteMovement,
  apiGetCategories,
  apiEditMovement
} from '../../functions/apiFunctions'
import AddMovement from '../AddMovement/addMovement.jsx'
import { toastCustom } from '../common/toastify'

const Home = () => {
  const [list, setList] = useState()
  const [filtredList, setFiltredList] = useState(list)
  const [editMode, setEditMode] = useState(false)
  const [editedMovement, setEditedMovement] = useState({})
  const [view, setView] = useState('last')
  const [balance, setBalance] = useState(0)
  const [categories, setCategories] = useState([])
  const [addModalShow, setAddModalShow] = useState(false)
  const [filters, setFilters] = useState({
    type: 'all',
    category: 'all'
  })

  useEffect(() => {
    const getData = async () => {
      setList(await apiGetLastMovements())
      setBalance(await apiGetBalance())
      setCategories(await apiGetCategories())
    }
    getData()
  }, [])

  useEffect(() => {}, [list])

  useEffect(() => {
    let filtredByType
    let filtredByCat

    if (filters.type === 'all') {
      filtredByType = list
    } else {
      filtredByType = list.filter(movement => movement.type === filters.type)
    }

    if (filters.category === 'all') {
      filtredByCat = filtredByType
    } else {
      filtredByCat = filtredByType.filter(movement => movement.category === filters.category)
    }

    setFiltredList(filtredByCat)
  }, [filters.type, filters.category, list])

  const deleteMovement = async (movementID) => {
    await apiDeleteMovement(movementID)
    const updatedList = list.filter((movement) => movement.id !== movementID)
    setTimeout(async () => {
      setList(updatedList)
      await setBalance(await apiGetBalance())
      toastCustom('Movement deleted', 'success', 4000, 'bottom-right')
    }, 1000)
  }

  const showAll = async () => {
    setFilters({
      type: 'all',
      category: 'all'
    })
    setView('all')
    setList(await apiGetAllMovements())
    setBalance(await apiGetBalance())
  }

  const showLast = async () => {
    setFilters({
      type: 'all',
      category: 'all'
    })
    setView('last')
    setList(await apiGetLastMovements())
    setBalance(await apiGetBalance())
  }

  const handleClose = () => setAddModalShow(false)

  const handleFilterChange = (eventName, eventValue) => {
    setFilters(prev => ({ ...prev, [eventName]: eventValue }))
  }

  const handleChangeEdit = (eventName, eventValue) => {
    setEditedMovement(prev => ({ ...prev, [eventName]: eventValue }))
  }

  const handleSubmitEdit = async (movementID) => {
    await apiEditMovement(movementID, editedMovement)
    setEditedMovement({})
    setTimeout(async () => {
      setBalance(await apiGetBalance())
      view === 'last' ? setList(await apiGetLastMovements()) : setList(await apiGetAllMovements())
    }, 1000)
    toastCustom('Movement edited', 'success', 4000, 'bottom-right')
    setEditMode(false)
  }

  return (
    <>
      <HomeView
        view={view}
        filtredList={filtredList}
        balance={balance}
        deleteMovement={deleteMovement}
        showAll={showAll}
        showLast={showLast}
        setAddModalShow={setAddModalShow}
        handleFilterChange={handleFilterChange}
        categories={categories}
        handleSubmitEdit={handleSubmitEdit}
        handleChangeEdit={handleChangeEdit}
        editMode={editMode}
        setEditMode={setEditMode}
      />
      <AddMovement
        addModalShow={addModalShow}
        handleClose={handleClose}
        categories={categories}
        setBalance={setBalance}
        view={view}
        setList={setList}
      />
    </>
  )
}

export default Home
