import {Navbar,Nav, Container,NavDropdown,Form,Button} from 'react-bootstrap'
const Header= () => {
    return (
        <header>
            {/* <Navbar expand="lg" className="bg-body-tertiary"> */}
            <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">RR&R</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Movies" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Top Rated</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Popular
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Currently Playing
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Movies"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </header>
    )
}

export default Header;