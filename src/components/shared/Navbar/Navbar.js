import React from 'react';
import './navbar.scss';
import { data1 } from './data';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import ProductsMegamenu from './Megamenus/ProductsMegamenu';
import { BsTriangleFill } from 'react-icons/bs';

const Navbar = () => {
  return (
    <div className='nav'>
      {data1.map((props, index) => {
        return (
          <div className='title' key={index}>
            <img src={props.img} alt='logo' className='logo' />
            ModelKos
          </div>
        );
      })}
        <div className='links'>
            <div className='nav-link'>
                <Link to='/' className='inner-link'>Home</Link>
                
            </div>
            <div className='nav-link'>
                <Link to='/' className='inner-link'>Our Work<MdKeyboardArrowUp/></Link>
                <ProductsMegamenu/>
            </div>
            <div className='nav-link'>
                <Link to='/'className='inner-link'>About<MdKeyboardArrowUp/></Link>
                <ProductsMegamenu/>
            </div>
            <div className='nav-link'>
                <Link to='/'className='inner-link'>Models<MdKeyboardArrowUp/></Link>
                <ProductsMegamenu/>
            </div>
            <div className='nav-link'>
                <Link to='/'className='inner-link'>Academy<MdKeyboardArrowUp/></Link>
                <ProductsMegamenu/>
            </div>
            <div className='nav-link'>
                <Link to='/'className='inner-link'>Blog</Link>
            </div>
        </div>
        <div className='auth'>
            <Link to='/'>Apply Now</Link>
            <Link to='/' className='signup'>Contact us</Link>
        </div>
    </div>
  )
}

export default Navbar