import { useState } from 'react';
import './App.css'
import Banner from './components/banner/Banner'
import HouseList, { House } from './components/house-list/HouseList'
import HouseComponent from './components/house-list/HouseComponent';


function App() {
    const [selectedHouse, setSelectedHouse] = useState<House | undefined>(undefined);

    /**
     * Wrapper function that accepts a house object and does the call to setSelectedHouse.
     * @param house 
     */
    const setSelectedHouseWrapper = (house: House) => {
      // do checks on house 
      setSelectedHouse(house);
    };

    return (
     /* A Fragment is used to render more than one component */ 
    <>
      <Banner>
        <div>Providing houses all over the world</div>
      </Banner>
      
      {selectedHouse ? <HouseComponent house={selectedHouse}/> : <HouseList selectHouse={setSelectedHouseWrapper}/>}
    </>
  )
}

export default App;
