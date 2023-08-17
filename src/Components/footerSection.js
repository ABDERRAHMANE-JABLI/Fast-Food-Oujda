import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const FooterSection = () => {
  return (
<footer className="footer_section">
    <div className="container">
         <div className="row">
            <div className="col-md-4 footer-col">
            <div className="footer_contact">
            <h4>
              Nous Contactez
            </h4>
            <div className="contact_link_box">
              <a href="">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <span>
                  Localisation
                </span>
              </a>
              <a href="">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <span>
                 +212 6 56 87 41 20
                </span>
              </a>
              <a href="">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <span>
                  snackOujda@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 footer-col">
            <div className="footer_detail">
                <a href="" className="footer-logo">Snack-oujda</a>
                <div className="footer_social">
              <a href="">
                <FaFacebook/>
              </a>
              <a href="">
                <FaTwitter/>
              </a>
              <a href="">
                <FaLinkedin/>
              </a>
              <a href="">
                <FaInstagram/>              
            </a>
                </div>
            </div>
        </div>

        <div className="col-md-4 footer-col">
          <h4>
            Horaire
          </h4>
          <p>
            7j / 7j
          </p>
          <p>
            10.00  - 00.00
          </p>
        </div>

      </div>
      
      <div className="footer-info">
        <p>&copy; <span id="displayYear"></span> Snack Oujda</p>
      </div>
    </div>

  </footer>
  )
}

export default FooterSection