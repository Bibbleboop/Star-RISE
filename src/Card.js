import React from 'react';

function Card({ title, date, address, link, thumbnail }) {
  return (
    <div className="max-w-md mx-auto my-4 rounded overflow-hidden shadow-lg">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img className="w-full h-48 object-cover" src={thumbnail} alt={title} />
      </a>
      <div className="px-6 py-4">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="font-bold text-xl mb-2">{title}</div>
        </a>
{date && (
  <p className="text-gray-700 text-base">{date.when} - {date.start_date}</p>
)}
       <p className="text-gray-700 text-base">{address?.join(', ')}</p>

      </div>
    </div>
  );
}


export default Card;