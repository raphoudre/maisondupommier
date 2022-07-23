import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Navigation from './components/Navigation';
import Error404 from './components/pages/Error404'
import Booking from './components/pages/Booking';
import { Container } from 'react-bootstrap';
function App() {
  return (
    <Router>
      <Navigation />
      <Container fluid>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/booking' element={<Booking/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
      </Container>
    </Router>
  );
}

export default App;
