import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

import { Search } from './components/Search';
import { Route, Routes } from 'react-router-dom';
import { Locations } from './components/Location';

function App() {
  return (
    <div>
      <Search />

      <Routes>
        <Route path="/locations/:name" element={<Locations />} />
      </Routes>
    </div>
  );
}

export default App;
