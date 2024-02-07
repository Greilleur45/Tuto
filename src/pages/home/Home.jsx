import React from 'react';
import Profile from "../../assets/Test.jpg";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import "./home.css"

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>Je suis Brice DURAND.</span> Apprenti chez EDF
          </h1>

          <p className="home__description">
           Spécialisé dans la conception, la vérification, la maintenance et l'intégration de systèmes électroniques, je me distingue par mon engagement dans des projets innovants, notamment le développement de l'application FISH pour EDF, destinée à optimiser les opérations de maintenance. Passionné par mon domaine, je vise à être reconnu pour ma compétence, ma qualification et mon enthousiasme à relever les défis techniques. Mon objectif est d'apporter une contribution significative à l'avancement technologique, en mettant en œuvre une approche créative et efficace dans chaque projet.
          </p>

          <Link to='/about' className='button'>
            En savoir plus sur moi
            <span className='button__icon'>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  )
}

export default Home