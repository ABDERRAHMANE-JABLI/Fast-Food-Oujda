import React from 'react'
import ItemOffer from './itemOffer'
import o1 from '../images/o1.jpg'
import o2 from '../images/o2.jpg'

const SpecialOffer = () => {
  return (
    <section className="offer_section layout_padding-bottom">
        <div className="offer_container">
            <div className="container ">
                <div className="row">

                     <ItemOffer title="le vendredi ( 14h00 - 18h00 )" reduction="-20%" item="Tacos" img={o1}/>

                     <ItemOffer title="le vendredi ( 12h00 - 17h00 )" reduction="-30%" item="Pizza" img={o2}/>

                </div>
            </div>
        </div>
    </section>
  )
}

export default SpecialOffer