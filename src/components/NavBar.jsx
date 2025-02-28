import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import {senai_logo} from '..img/senai';
import styles from './css/NavBar.module.css';




const NavBar = () => {
  return (
    <Navbar style={{ backgroundColor: '#2029ad'}} data-bs-theme="dark">
        <Container>
          <Navbar.Brand href='/'>Senai</Navbar.Brand>
          <Nav className={styles.nav}>
            <Nav.Link href='/historia'>Historia</Nav.Link>
            <Nav.Link href='/login'>Login</Nav.Link>
            <Nav.Link href='/cadastro'>Cadastro</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavBar
