import { Routes, Route, useLocation} from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import Countries from './components/Countries'
import CountryDetail from './components/CountryDetail'
import Nav from './components/Nav/Nav'
import './App.css'

function App() {

  const location = useLocation()

  return (
    <div>
      {location.pathname !== '/' && <Nav/>}
      <Routes>
        <Route path="/" element={<LandingPage />}> </Route>
        <Route path="/countries" element={<Countries />}> </Route>
        <Route path="/countries/:id" element={<CountryDetail />}> </Route>
      </Routes>
    </div>
  );
}

export default App
