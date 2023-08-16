import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const MenuItem = (props) => {
  return (
    <div className={"col-sm-6 col-lg-4 all "+props.type}>
        <div className="box">
            <div>
                <div className="img-box">
                  <img src={props.image} alt="Snack oujda"/>
                </div>
                <div className="detail-box">
                  <h5>
                  {props.title}
                  </h5>
                  <p>
                    {props.description}
                  </p>
                  <div className="options">
                    <h6>
                      {props.price}
                    </h6>
                    <a href="">
                    <FaShoppingCart/> 
                    </a>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MenuItem