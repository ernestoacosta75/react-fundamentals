import { useState } from 'react';
import './App.css'
import Banner from './components/banner/Banner'
import HouseList, { House } from './components/house-list/HouseList'
import HouseComponet from './components/house-list/HouseComponent';


function App() {
  const [selectedHouse, setSelectedHouse] = useState<House | undefined>(undefined);
    return (
     /* A Fragment is used to render more than one component */ 
    <>
      <Banner>
        <div>Providing houses all over the world</div>
      </Banner>
      
      {selectedHouse ? <HouseComponet house={selectedHouse}/> : <HouseList selectHouse={setSelectedHouse}/>}
    </>
  )
}

export default App;
