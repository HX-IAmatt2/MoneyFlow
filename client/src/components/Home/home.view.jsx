import Header from './modules/header'
import Main from './modules/main'
import Footer from './modules/footer'
// import { Container } from 'react-bootstrap'
import style from './home.module.css'

const HomeView = ({
  view,
  filtredList,
  balance,
  deleteMovement,
  showAll,
  showLast,
  setAddModalShow,
  handleFilterChange,
  categories,
  handleSubmitEdit,
  handleChangeEdit,
  editMode,
  setEditMode
}) => {
  return (
    <>
      <div id={style.mainBox}>
        <Header
          view={view}
          showAll={showAll}
          showLast={showLast}
          setAddModalShow={setAddModalShow}
          handleFilterChange={handleFilterChange}
          categories={categories}
        />
        <Main
          filtredList={filtredList}
          deleteMovement={deleteMovement}
          handleSubmitEdit={handleSubmitEdit}
          handleChangeEdit={handleChangeEdit}
          editMode={editMode}
          setEditMode={setEditMode}
          categories={categories}
          view={view}
        />
        <Footer balance={balance} />
      </div>
    </>
  )
}

export default HomeView
