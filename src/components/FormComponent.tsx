import { useState, FormEvent } from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'

const initialFormState = {
  firstName: '',
  lastName: '',
  age: 18,
  drivingLicense: false,
}

const FormComponent = () => {
  const [user, setUser] = useState(initialFormState)

  // nel caso vogliate scollegare la funzione assegnata all'evento di submit, ricordatevi che il tipo dell'oggetto evento è "FormEvent" e va assegnato
  // manualmente!
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('SALVATO!')
    setUser(initialFormState)
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nome utente</Form.Label>
              <Form.Control
                type="text"
                placeholder="Mario"
                value={user.firstName}
                onChange={(e) =>
                  setUser({
                    ...user,
                    firstName: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Cognome utente</Form.Label>
              <Form.Control
                type="text"
                placeholder="Rossi"
                value={user.lastName}
                onChange={(e) =>
                  setUser({
                    ...user,
                    lastName: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Età utente</Form.Label>
              <Form.Control
                type="number"
                min="18"
                value={user.age}
                onChange={(e) =>
                  setUser({
                    ...user,
                    age: parseInt(e.target.value),
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                className="d-flex justify-content-center"
                type="checkbox"
                label="Patente?"
                checked={user.drivingLicense}
                onChange={(e) =>
                  setUser({
                    ...user,
                    drivingLicense: e.target.checked,
                  })
                }
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Invia registrazione
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
export default FormComponent
