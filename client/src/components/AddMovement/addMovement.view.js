import { Button, Modal, InputGroup, Row, Col, Form } from 'react-bootstrap'
import moment from 'moment'

const AddMovementView = ({ handleChange, addModalShow, handleClose, submit, categories }) => {
  return (
    <>
      <Modal show={addModalShow} onHide={handleClose}>

        <Modal.Header>
          <Modal.Title>Add new movement</Modal.Title>
          <button type='button' className='btn-close' aria-label='Close' onClick={handleClose} />
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Row>
              <Col>
                {/* DATE */}
                <Form.Control
                  type='date'
                  name='date'
                  placeholder='Date'
                  defaultValue={moment(new Date()).format('YYYY-MM-DD')}
                  onChange={(event) => handleChange(event.target.name, moment(event.target.value).format('YYYY-MM-DD'))}
                />
              </Col>
              <Col>
                <InputGroup className='mb-3'>
                  <InputGroup.Text>$</InputGroup.Text>
                  {/* AMOUNT */}
                  <Form.Control name='amount' placeholder='Amount' onChange={(event) => handleChange(event.target.name, event.target.value)} />
                </InputGroup>
              </Col>
            </Row>
            <Row style={{ marginBottom: '1rem' }}>
              <Col>
                {/* CONCEPT */}
                <Form.Control name='concept' placeholder='Concept' onChange={(event) => handleChange(event.target.name, event.target.value)} />
              </Col>
            </Row>
            <Row>
              <Col>
                {/* TYPE */}
                <Form.Control as='select' name='type' placeholder='Type' onChange={(event) => handleChange(event.target.name, event.target.value)}>
                  <option value='Outcome'>Outcome</option>
                  <option value='Income'>Income</option>
                </Form.Control>
              </Col>
              <Col>
                {/* CATEGORY */}
                <Form.Control name='category' as='select' placeholder='Date' onChange={(event) => handleChange(event.target.name, event.target.value)}>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </Form.Control>
              </Col>
            </Row>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={submit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  )
}

export default AddMovementView
