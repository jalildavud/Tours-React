import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import Tours from './Tours';
//API
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const removeTour = (id) => {
    const newTours = tours.filter((tour)=>tour.id !== id);
    setTours(newTours);
  };
  const fetchTours = async () => {
    setLoading(true);
    try{
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours) 
    }catch(error){
      setLoading(false)
      console.log(error)
    }
    
  };
useEffect(() => {
  fetchTours();
}, []);

  if (loading) {
    return (
    <main>
      <Loading />
    </main>
   );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='flex flex-col items-center mt-40'>
          <h2 className='text-xl font-bold'>no tours left</h2>
          <button className='mt-5 rounded-2xl text-red-900 px-6
          border border-red-900 hover:bg-red-900 hover:text-white' onClick={fetchTours}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return <main>
    <Tours tours={tours} removeTour={removeTour}/>
  </main>
}
export default App;
