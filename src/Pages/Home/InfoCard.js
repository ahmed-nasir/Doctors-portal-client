import React from 'react';

const InfoCard = ({img, cardTitle,description,bgClass}) => {
    return (
        <div className={`card lg:card-side shadow-xl ${bgClass}`}>
            <figure className='px-5 py-2'>
                <img src={img} alt="Album"/>
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{description}</p>
                
            </div>
        </div>
    );
};

export default InfoCard;