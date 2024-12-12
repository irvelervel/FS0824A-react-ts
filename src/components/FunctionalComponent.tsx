import { Card, Button, Container, Row, Col } from 'react-bootstrap'

interface FunctionalComponentProps {
  imgSource: string
  title?: string
}

const FunctionalComponent = (props: FunctionalComponentProps) => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Card>
            <Card.Img variant="top" src={props.imgSource} />
            <Card.Body>
              <Card.Title>{props.title || 'Titolo generico'}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="success">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default FunctionalComponent
