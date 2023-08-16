import React from 'react'
import MenuItem from './menuItem'
import pizza1 from '../images/pizza_margherita.jpg'
import pizza2 from '../images/vegetarienne.jpg'
import pizza3 from '../images/pizza_fromage.jpg'
import pizza4 from '../images/pizza_fruit_mer.jpg'
import tacos from '../images/Tacos.jpg'
import pastic from '../images/pasticcio.jpg'



const MenuSection = () => {
  return (
    <section className="food_section layout_padding-bottom" id="menu">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          Our Menu
        </h2>
      </div>

      <ul className="filters_menu">
        <li className="active" data-filter="*">All</li>
        <li data-filter=".tacos">Tacos</li>
        <li data-filter=".pizza">Pizza</li>
        <li data-filter=".pasticcio">Pasticcio</li>
        <li>Autres</li>
      </ul>

      <div className="filters-content">
        <div className="row grid">
            <MenuItem type="pizza" image={pizza1} title="Pizza Margarita" description="La pizza Margherita ou napolitaine, est l’une des plus anciennes pizzas italiennes avec la Marinara. Elles trouvent toutes les deux leurs origines à Naples. " 
                        price="60dh" />
            <MenuItem type="pizza" image={pizza2} title="Pizza Végétarienne" description=" On y retrouve la tomate et la mozzarella, vient s’ajouter des légumes d’été, poivrons, courgettes et aubergines grillées. On peut l’assaisonner avec un peu d’ail et du basilic." 
                        price="65dh" />
            <MenuItem type="pizza" image={pizza3} title="Pizza 4 fromages" description="La pizza Quattro Formaggi a une pâte plus fine et plus croustillante que la Margherita. C’est pour cette raison que l’on suppose qu’elle est originaire de Rome. Comme son nom l’indique, elle est composée de 4 fromages différents. " 
                        price="75dh" />
            <MenuItem type="pizza" image={pizza4} title="Pizza Friut de mer" description="La Frutti di Mare, comme disent les Italiens, est une pizza qui sort des sentiers battus et qui offre un goût unique" 
                        price="80dh" />
            <MenuItem type="tacos" image={tacos} title="Tacos Dinde/viande/mixte" description="Dégustez notre tacos. disponible en medium, large, X-large et XX-Large" 
                        price="+ 35dh" />
            <MenuItem type="pasticcio" image={pastic} title="Pasticcio Dinde/viande haché/mixte" description="vennez Dégustez notre Pasticcio" 
                        price="+ 35dh" />
        
        </div>
      </div>
      <div className="btn-box">
        <a href="/">
            Voir Plus
        </a>
      </div>
    </div>
  </section>   
  )
}
export default MenuSection