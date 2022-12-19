import React, { useState } from 'react';

const Tour = ({id, image, info, price, name, removeTour}) => {
    const [readMore, setReadMore] = useState(false)

  return (
     <article className='space-y-4 shadow-xl rounded-sm bg-white mb-4 max-w-sm md:max-w-md'>
        <img src={image} alt={name} className=''/>
        <footer className='flex flex-col '>

            <div className='flex flex-row justify-between px-4'>
                <h4 className='font-bold md:text-xl '>{name}</h4>
                <h4 className='font-bold md:text-xl'>${price}</h4>
            </div>

            <p className='px-4 mt-4'>{readMore? info : `${info.substring(0, 200)}...`}
            <button onClick={() => setReadMore(!readMore)} className="text-blue-400 hover:text-blue-700">
                {readMore? 'show less': 'read more'}
            </button>
            </p>
              
            <button className='text-red-900 mt-4 mb-6 rounded-md border border-red-900
                                text-sm px-4 py-2 w-1/3 ml-40 hover:bg-red-900 hover:text-white' 
                                onClick={()=>removeTour(id)}>not interested
            </button> 
          
        </footer>
  </article>
  );
};

export default Tour;
