import { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

import { Search } from './components/Search';
import { Route, Routes } from 'react-router-dom';
import { Locations } from './components/Location';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  const [Location, setLocation] = useState('Gafsa');

  const HandleClick = () => {
    // dispatch(select_location(Location));
  };

  const [APIDATA, setAPIDATA] = useState({});
  const HTML = `https://api.weatherapi.com/v1/current.json?key=632ce770018b45c0a9e180343230302&q=${Location}&aqi=no`;

  const getit = () => {
    axios
      .get(HTML)
      .then(response => {
        // Handle response
        console.log(response.data);
        setAPIDATA(response);
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  };
  useEffect(() => {
    getit();
  }, []);

  return (
    <div>
      <Search></Search>

      <Routes>
        <Route path="/locations/:name" element={<Locations />} />
      </Routes>
    </div>
  );
}

export default App;
