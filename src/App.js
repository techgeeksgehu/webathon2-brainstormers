import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Resouces from './components/resources';
import Skilldev from './components/skilldev';
import Incubation from './components/incubation';
import Community from './components/community';
import Events from './components/events';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/community" element={<Community />} />
          <Route path="/events" element={<Events />} />
          <Route path="/skilldev" element={<Skilldev />} />
          <Route path="/resources" element={<Resouces />} />
          <Route path="/incubation" element={<Incubation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;