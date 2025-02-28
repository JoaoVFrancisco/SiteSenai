import React from 'react'
import Banner from '../components/Banner.jsx'
import CardsCursos from '../components/CardsCursos.jsx'
import Foto from '../components/Foto.jsx'
import styles from './css/Home.module.css'

const Home = () => {
  return (
    <div className={{styles}}>
      <Banner />
      <h1>Cursos</h1>
      <CardsCursos />
      <h1>Sobre o senai</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum aperiam nobis nisi illo enim voluptatibus minima veniam unde voluptas dolore blanditiis magni, nostrum aliquid itaque! Assumenda quam culpa vero eum!</p>
      <Foto />
    </div>
  )
}

export default Home
