import React from 'react';
import bg from "../images/bg_pizza.jpg"
import {FaShoppingCart, FaUser, FaSearch} from 'react-icons/fa'
const Header = ()=>{

    return (
  <div className="hero_area">
        <div className="bg-box">
          <img src={bg} alt="pizza"/>
        </div>

    <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <a className="navbar-brand" href="/">
            <span>
              Snack-Oujda
            </span>
          </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className=""> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mx-auto ">
              <li className="nav-item active">
                <a className="nav-link" href="/">Acceuil</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#menu">Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">A-propos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#visit">Nous-Visitez</a>
              </li>
            </ul>
            <div className="user_option">
              <a href="/" className="user_link">
              <FaUser/>
              </a>
              <a className="user_link" href="/">
              <FaShoppingCart/>
              </a>
              <form className="form-inline mt-2">
                <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                <FaSearch/>
                </button>
              </form>
             
            </div>
          </div>
        </nav>
      </div>
    </header>
    
    <section className="slider_section">
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container ">
              <div className="row">
                <div className="col-md-7 col-lg-6 ">
                  <div className="detail-box">
                    <h1>
                      Snack-Oujda
                    </h1>
                    <p>
                      chaque plat est une œuvre d'art gastronomique soigneusement préparée à partir des ingrédients les plus frais. Notre atmosphère conviviale et notre attention minutieuse aux détails font de chaque visite une célébration de la cuisine exquise
                    </p>
                    <div className="btn-box">
                      <a href="/" className="btn1">
                        Commandez maintenant
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="container ">
              <div className="row">
                <div className="col-md-7 col-lg-6 ">
                  <div className="detail-box">
                    <h1>
                      Snack-Oujda
                    </h1>
                    <p>
                      Plongez dans une expérience culinaire inoubliable au cœur de notre restaurant, où les saveurs audacieuses rencontrent une ambiance élégante.                    </p>
                    <div className="btn-box">
                      <a href="/" className="btn1">
                        Commandez maintenant
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="row">
                <div className="col-md-7 col-lg-6 ">
                  <div className="detail-box">
                    <h1>
                      Snack-Oujda
                    </h1>
                    <p>
                      Explorez un paradis culinaire où la fusion de cultures inspire une carte innovante qui repousse les limites de la créativité gastronomique
                    </p>
                    <div className="btn-box">
                      <a href="/" className="btn1">
                        Commandez maintenant</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <ol className="carousel-indicators">
            <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
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