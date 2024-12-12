import { Component } from 'react'
import { Col, Container, Row, Carousel } from 'react-bootstrap'

interface ClassComponentProps {
  mainTitle: string
}

interface ClassComponentState {
  counter: number
}

// il primo generic passato ad un componente a classe è l'interfaccia
// delle props di quel componente
// il secondo generic invece rappresenta la forma dell'oggetto state
class ClassComponent extends Component<
  ClassComponentProps,
  ClassComponentState
> {
  state: ClassComponentState = {
    counter: 0,
  }

  componentDidMount(): void {
    console.log('Cattosello montato!')
  }

  sum = (n1: number, n2: number): number => {
    return n1 + n2
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <h2>{this.props.mainTitle}</h2>
            <Carousel>
              <Carousel.Item>
                <img src="https://placecats.com/500/500" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>{this.state.counter + 100}</p>
                  <button
                    onClick={() =>
                      this.setState({ counter: this.state.counter + 1 })
                    }
                  >
                    +
                  </button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src="https://placecats.com/600/600" />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src="https://placecats.com/700/700" />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ClassComponent
