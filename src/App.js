import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderFooterProvider from './HeaderFooter/HeaderFooterProvider';
import Workout from './components/Workout';
import Progress from './components/Progress';
import Hero from './components/Hero';

const App = () => (
<Router>
    <HeaderFooterProvider>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/progress" element={<Progress />} />
      </Routes>
    </HeaderFooterProvider>
  </Router>
);

export default App;