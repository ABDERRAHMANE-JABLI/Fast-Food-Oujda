import React from 'react'
import image from '../images/about-img.png'

const About = () => {
  return (
    <section className="about_section layout_padding" id="about">
    <div className="container  ">

      <div className="row">
        <div className="col-md-6 ">
          <div className="img-box">
            <img src={image} alt="burger"/>
          </div>
        </div>
        <div className="col-md-6">
          <div className="detail-box">
            <div className="heading_container">
              <h2>
               Snack-Oujda
              </h2>
            </div>
            <p className="text-capitalize">
              Plongez dans une expérience culinaire inoubliable au cœur de notre restaurant exquis. Chaque instant est 
              une invitation à savourer l'harmonie parfaite entre saveurs audacieuses et présentation artistique. Notre menu soigneusement élaboré fusionne des ingrédients frais et de saison pour créer des plats qui éveilleront vos sens. L'atmosphère élégante et chaleureuse du lieu vous accueille, qu'il s'agisse d'un dîner romantique, d'une réunion entre amis ou d'une célébration spéciale. Laissez-vous transporter par 
              notre équipe passionnée qui offre un service attentif, faisant de chaque visite un voyage gastronomique captivant.
            </p>
            <a href="">
              Voir Plus
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About