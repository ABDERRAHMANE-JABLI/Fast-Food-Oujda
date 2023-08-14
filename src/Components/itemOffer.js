import React from 'react'

const ItemOffer = (props) => {
  return (
    <div className="col-md-6  ">
            <div className="box ">
              <div className="img-box">
                <img src={props.img} alt=""/>
              </div>
              <div className="detail-box">
                <h5>
                  {props.title}
                </h5>
                <h6>
                  <span>{props.reduction}</span> {props.item}
                </h6>
                <a href="">
                  Commandez&nbsp;&nbsp; <i className="fa fa-shopping-cart"></i>
                </a>
              </div>
            </div>
    </div>
  )
}

export default ItemOffer