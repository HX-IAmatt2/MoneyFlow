import { Row, Col, InputGroup, Form } from 'react-bootstrap'
import style from '../home.module.css'

const Header = ({ view, showAll, showLast, setAddModalShow, handleFilterChange, categories }) => {
  return (
    <>
      <Row style={{ Minheight: '3rem', marginTop: '0.8rem' }}>
        <Col
          className={style.headerItem} onClick={showLast} style={view === 'last' ? { borderBottom: 'solid 1px' } : null}
        >Last movements
        </Col>
        <Col className={style.headerItem} onClick={showAll} style={view === 'all' ? { borderBottom: 'solid 1px' } : null}>All movements</Col>
        <Col className={style.headerItem} onClick={() => setAddModalShow(true)}>Add movement</Col>
      </Row>
      {view === 'all'
        ? (
          <Row>
            <Col>
              <InputGroup className='mb-3'>
                <InputGroup.Text>Type:</InputGroup.Text>
                <Form.Control as='select' name='type' placeholder='Filter by' onChange={(event) => handleFilterChange(event.target.name, event.target.value)}>
                  <option value='all'>All</option>
                  <option value='Outcome'>Outcome</option>
                  <option value='Income'>Income</option>
                </Form.Control>
              </InputGroup>
            </Col>
            <Col>
              <InputGroup className='mb-3'>
                <InputGroup.Text>Category:</InputGroup.Text>
                <Form.Control as='select' name='category' placeholder='Filter by' onChange={(event) => handleFilterChange(event.target.name, event.target.value)}>
                  <option value='all'>All</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </Form.Control>
              </InputGroup>
            </Col>
          </Row>
          )
        : null}
    </>
  )
}

export default Header
