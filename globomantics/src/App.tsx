import './App.css'
import Banner from './components/banner/Banner'
import HouseList from './components/house-list/HouseList'

function App() {
    return (
     /* A Fragment is used to render more than one component */ 
    <>
      <Banner>
        <div>Providing houses all over the world</div>
      </Banner>
      
      <HouseList/>
    </>
  )
}

export default App
