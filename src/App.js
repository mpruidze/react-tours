import React, { useState, useEffect } from 'react';
import Tours from './components/Tours';
import Tour from './components/Tour';
import Loading from './components/Loading';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'


function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  return (
    <main>
      <Tours />
    </main>
  )
}

export default App;
