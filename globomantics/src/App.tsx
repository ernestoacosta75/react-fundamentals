import './App.css'
import Banner from './components/Banner'
import HouseList from './components/HouseList'

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
