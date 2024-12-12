import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'

const MyNavbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const params = useParams()

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              <div>Home</div>
            </Link>
            <Link className="nav-link" to="/cat-card">
              <div>Cat Card</div>
            </Link>
            <Link className="nav-link" to="/form">
              <div>Form</div>
            </Link>
            <Link className="nav-link" to="/class">
              <div>Class</div>
            </Link>
            <Link className="nav-link" to="/food-books">
              <div>Food Books</div>
            </Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
