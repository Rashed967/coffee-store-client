import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './components/CoffeeCard';

const App = () => {
  const allCoffee = useLoaderData()

  return (
    <div>
        <h2>Total coffe {allCoffee.length}</h2>
       <div className='grid grid-cols-2'>
       {
          allCoffee.map(coffee => <CoffeeCard key={coffee._id}
          coffee={coffee}
          >    
          </CoffeeCard>)
        }
       </div>
    </div>
  );
};

export default App;