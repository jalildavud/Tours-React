import React from 'react';
import Tour from './Tour';
const Tours = ({tours, removeTour}) => {
  return (
  <section className='flex flex-col items-center justify-center mx-auto'>
    <div className='flex'>
       <h2 className='text-3xl mt-4 mb-4'>Our tours</h2>
       <div className='underline'></div>
    </div>
    <div className='flex flex-col items-center'>
        {tours.map((tour) => {
            return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
    </div>
  </section>
  );
};

export default Tours;
