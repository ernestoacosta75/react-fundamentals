import { useState } from 'react';
import './App.css'
import Banner from './components/banner/Banner'
import HouseList from './components/house-list/HouseList'
import House from './components/house-list/house';


function App() {
  const [selectedHouse, setSelectedHouse] = useState();
    return (
     /* A Fragment is used to render more than one component */ 
    <>
      <Banner>
        <div>Providing houses all over the world</div>
      </Banner>
      
      {selectedHouse ? <House house={selectedHouse}/> : <HouseList/>}
    </>
  )
}

export default App;
