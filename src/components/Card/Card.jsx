import Image from 'next/image';
import React from 'react';

const CustomCard = ({ name, imageUrl }) => {
  return (
    <div className="card w-64" style={{ borderRadius: '20px', background: '#1E1E1E' }}>
      <figure className="px-10 pt-10">
        <Image src={imageUrl} alt={name} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Full Stack Developer</p>
        <p>IT-3</p>
        
        
      </div>
    </div>
  );
};

export default CustomCard;
