import React from 'react';
import './Home.scss';
import home from '../../assets/shared/home.jpg';
import { data, modelOptions, locationOptions } from './data'; // Import all data
import { FaMapMarked } from 'react-icons/fa';

const Home = () => {
  const section = data[0]; // Assuming data has only one set of images

  return (
    <div>
      <div className="home-container">
        <div className="background-overlay"></div>
        <div className="image-container">
          <img src={home} alt="Hire a Model or Become One" className="background-image" />
          <div className="overlay">
          <h1>HIRE A MODEL OR<br /><span className="indented-line">BECOME ONE</span></h1>
            <div className="search-container">
              <select className="dropdown">
                {modelOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.icon} {option.label}
                  </option>
                ))}
              </select>
              <select className="dropdown">
                {locationOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                   {option.icon} {option.label}
                  </option>
                ))}
              </select>
              <button className="find-model-button">Find model</button>
            </div>
          </div>
        </div>
        {section.images && (
          <div className="images-menu">
            {section.images.map((image, index) => (
              <div
                key={index}
                className={`image-con ${image.position} ${image.rotate ? 'rotate' : ''}`}
              >
                <img src={image.src} alt={image.alt} className="menu-image" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
