import './App.css'
import Shows from './Shows'
import witcher from "./assets/netflixWitcher.png"
import startrek from "./assets/netflixStarTrek.png"
import outside from "./assets/netflixOutside.png"
import gambit from "./assets/netflixGambit.png"
import fate from "./assets/netflixFate.png"

const App = () => {
  return (
    <div>
      <h1>Netflix Originals</h1>
        <div className='images'>
          <Shows image = {fate} />
          <Shows image = {outside} /> 
          <Shows image = {startrek} />
          <Shows image = {gambit} />   
          <Shows image = {witcher} /> 
        </div>
    </div>
  )
}

export default App
