import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'
const ServiceCard = ({ product_image, product_title }) => {
  useEffect(()=>{
    Aos.init();
  })
  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-aos="zoom-in">
        <Link to={'/your_link_here'}>
          <img className="rounded-t-lg w-80 h-80 object-cover object-center" src={product_image} alt="" />
        </Link>
        <div className="p-5">
          <Link to={'/your_link_here'}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product_title}</h5>
          </Link>
          
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
