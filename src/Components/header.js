import React from 'react';
import bg from "../images/bg_pizza.jpg"
import {FaShoppingCart, FaUser, FaSearch} from 'react-icons/fa'
const Header = ()=>{

    return (
  <div class="hero_area">
        <div class="bg-box">
          <img src={bg} alt="pizza"/>
        </div>

    <header class="header_section">
      <div class="container">
        <nav class="navbar navbar-expand-lg custom_nav-container ">
          <a class="navbar-brand" href="/">
            <span>
              Snack-Oujda
            </span>
          </a>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class=""> </span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav  mx-auto ">
              <li class="nav-item active">
                <a class="nav-link" href="/">Acceuil</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#menu">Menu</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">A-propos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#visit">Nous-Visitez</a>
              </li>
            </ul>
            <div class="user_option">
              <a href="/" class="user_link">
              <FaUser/>
              </a>
              <a class="user_link" href="/">
              <FaShoppingCart/>
              </a>
              <form class="form-inline mt-2">
                <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                <FaSearch/>
                </button>
              </form>
             
            </div>
          </div>
        </nav>
      </div>
    </header>
    
    <section class="slider_section">
      <div id="customCarousel1" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container ">
              <div class="row">
                <div class="col-md-7 col-lg-6 ">
                  <div class="detail-box">
                    <h1>
                      Snack-Oujda
                    </h1>
                    <p>
                      chaque plat est une œuvre d'art gastronomique soigneusement préparée à partir des ingrédients les plus frais. Notre atmosphère conviviale et notre attention minutieuse aux détails font de chaque visite une célébration de la cuisine exquise
                    </p>
                    <div class="btn-box">
                      <a href="/" class="btn1">
                        Commandez maintenant
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item ">
            <div class="container ">
              <div class="row">
                <div class="col-md-7 col-lg-6 ">
                  <div class="detail-box">
                    <h1>
                      Snack-Oujda
                    </h1>
                    <p>
                      Plongez dans une expérience culinaire inoubliable au cœur de notre restaurant, où les saveurs audacieuses rencontrent une ambiance élégante.                    </p>
                    <div class="btn-box">
                      <a href="/" class="btn1">
                        Commandez maintenant
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container ">
              <div class="row">
                <div class="col-md-7 col-lg-6 ">
                  <div class="detail-box">
                    <h1>
                      Snack-Oujda
                    </h1>
                    <p>
                      Explorez un paradis culinaire où la fusion de cultures inspire une carte innovante qui repousse les limites de la créativité gastronomique
                    </p>
                    <div class="btn-box">
                      <a href="/" class="btn1">
                        Commandez maintenant</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <ol class="carousel-indicators">
            <li data-target="#customCarousel1" data-slide-to="0" class="active"></li>
            <li data-target="#customCarousel1" data-slide-to="1"></li>
            <li data-target="#customCarousel1" data-slide-to="2"></li>
          </ol>
        </div>
      </div>

    </section>
  </div>
  );
}
export default Header;