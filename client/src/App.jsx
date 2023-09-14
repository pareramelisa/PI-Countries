import { Routes, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Countries from './components/Countries'
import Card from './components/Card'
import CountryDetail from './components/CountryDetail'
import Nav from './components/Nav/Nav'
import './App.css'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}> </Route>
        <Route path="/countries" element={<Countries />}> </Route>
        <Route path="/countries/:id" element={<CountryDetail />}> </Route>
      </Routes>
    </div>
  );
}

export default App
