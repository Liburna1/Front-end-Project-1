import React from 'react'
import { Link } from 'react-router-dom'
import { data } from '../data' 

const ProductsMegamenu = () => {
  return (
    <div className='nav-megamenu'>
      {data.map((props) => {
        return(
          <div className='menu-link'>
            <Link to={props.to}>
            <div className='icon'>{props.icon}</div>
            <div className='block'>
              <h6>{props.title}</h6>
              <p>{props.description}</p>
            </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default ProductsMegamenu