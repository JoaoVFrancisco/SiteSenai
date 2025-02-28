import React from 'react'
import Banner from '../components/Banner.jsx'
import CardsCursos from '../components/CardsCursos.jsx'
// import Foto from '../components/Foto.jsx'
import styles from './css/Home.module.css'
import { Container } from 'react-bootstrap'

const Home = () => {
  return (
    <div className={styles.Corpo}>
      <Container>
      <Banner />
      <br />
      <h1>Cursos</h1>
      <CardsCursos />
      <br />
      </Container>
    </div>
  )
}

export default Home
