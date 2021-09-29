import { Trash, Pen, Save } from 'react-bootstrap-icons'
import { Container, Row, Col, Form } from 'react-bootstrap'
import style from '../home.module.css'

const Main = ({
  filtredList,
  deleteMovement,
  handleSubmitEdit,
  handleChangeEdit,
  editMode,
  setEditMode,
  categories,
  view
}) => {
  return (
    <Container>
      {filtredList?.length > 0
        ? (
            filtredList &&
        filtredList.map((movement) => {
          return (
            <Row
              className={style.itemBox}
              key={movement.id}
              style={{ display: 'flex', flexDirection: 'row' }}
            >
              {/* DATE */}
              <Col sm={2}>{movement.date}</Col>

              {/* CONCEPT */}
              {editMode === movement.id
                ? (
                  <Col sm={view === 'last' ? 8 : 4}>
                    <Form.Control
                      name='concept'
                      placeholder='Concept'
                      defaultValue={movement.concept}
                      onChange={(event) =>
                        handleChangeEdit(event.target.name, event.target.value)}
                    />
                  </Col>
                  )
                : (
                  <Col sm={4}> {movement.concept}</Col>
                  )}

              {/* CATEGORY */}
              {editMode === movement.id
                ? (
                  <Col sm={view === 'last' ? 2 : 1}>
                    <Form.Control
                      as='select'
                      name='category'
                      defaultValue={movement.category}
                      onChange={(event) =>
                        handleChangeEdit(event.target.name, event.target.value)}
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  )
                : (
                  <Col sm={1}> {movement.category}</Col>
                  )}

              {/* TYPE */}
              <Col
                sm={view === 'last' ? 4 : 2}
                style={
                  movement.type === 'Income'
                    ? { minWidth: '100px', color: 'green' }
                    : { minWidth: '100px', color: 'red' }
                }
              >
                {movement.type}
              </Col>

              {/* AMOUNT */}
              {editMode === movement.id
                ? (
                  <Col sm={1}>
                    <Form.Control
                      name='amount'
                      placeholder='Amount'
                      defaultValue={movement.amount}
                      onChange={(event) =>
                        handleChangeEdit(event.target.name, event.target.value)}
                    />
                  </Col>
                  )
                : (
                  <Col sm={1}> ${movement.amount}</Col>
                  )}

              {/* EDIT / SAVE ICONS */}
              {editMode === movement.id
                ? (
                  <Col
                    sm={2}
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleSubmitEdit(movement.id)}
                  >
                    {' '}
                    <Save />
                  </Col>
                  )
                : null}

              {view === 'all' && !editMode
                ? (
                  <Col
                    sm={1}
                    style={{ cursor: 'pointer' }}
                    onClick={() => setEditMode(movement.id)}
                  >
                    {' '}
                    <Pen />
                  </Col>
                  )
                : null}

              {/* DELETE ICON */}
              {view === 'all' && !editMode
                ? (
                  <Col
                    sm={1}
                    style={{ cursor: 'pointer' }}
                    onClick={() => deleteMovement(movement.id)}
                  >
                    {' '}
                    <Trash />
                  </Col>)
                : null}
            </Row>
          )
        })
          )
        : (
          <h4 style={{ marginTop: '3rem' }}>No movements to show</h4>
          )}
    </Container>
  )
}

export default Main
