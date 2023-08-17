import React, { useState } from 'react'

const BookSection = () => {
    
    const [nom, SetNom] = useState("");
    const [tel, SetTel] = useState("");
    const [email, SetEmail] = useState("");
    const [nbrPersone, SetNbr] = useState("Combien de Personne?");
    const [date, SetDate] = useState("");

    const handleChange = (setState) =>(event) =>{
            setState(event.target.value);
    }

    const handelSubmit = (e)=>{
        e.preventDefault();
        alert("D'accord "+nom+" Le "+date+" Soyez le Bienvenue");
    }

  return (
    <section className="book_section layout_padding" id="visit">
    <div className="container">
      <div className="heading_container">
        <h2>
            Réserver une table
        </h2>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form_container">
            <form onSubmit={handelSubmit}>
              <div>
                <input type="text" className="form-control" placeholder="Votre Nom" required
                        value={nom}
                        onChange={handleChange(SetNom)} />
              </div>
              <div>
                <input type="text" className="form-control" placeholder="Votre Télephone" required
                        value={tel}
                        onChange={handleChange(SetTel)}/>
              </div>
              <div>
                <input type="email" className="form-control" placeholder="Votre Email" required
                        value={email}
                        onChange={handleChange(SetEmail)}/>
              </div>
              <div>
                <select className="form-control nice-select wide" value={nbrPersone} onChange={handleChange(SetNbr)} required>
                  <option value="" disabled>
                    Combien de Personne?
                  </option>
                  <option value="2">
                    2
                  </option>
                  <option value="3">
                    3
                  </option>
                  <option value="4">
                    4
                  </option>
                  <option value="+5">
                    +5
                  </option>
                </select>
              </div>
              <div>
                <input type="date" className="form-control" value={date} onChange={handleChange(SetDate)} required/>
              </div>
              <div className="btn_box">
                <button type="submit">
                  Réservez Maintenant
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52493.02996273839!2d-1.948677817905835!3d34.684634148575576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7864984106d6ef%3A0x1d86b33244c4650!2sOujda!5e0!3m2!1sfr!2sma!4v1692273632381!5m2!1sfr!2sma" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='Oujda in google map'></iframe>
        </div>
      </div>
    </div>
  </section>
  )
}

export default BookSection