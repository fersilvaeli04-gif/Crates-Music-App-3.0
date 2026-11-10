import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import SongDetail from './pages/SongDetail/SongDetail';
import { AppWrapper } from './App.styles';

function App() {
  const library = useSelector((state) => state.library);

  useEffect(() => {
    console.log('La biblioteca se ha actualizado:', library);
  }, [library]);

  return (
    <BrowserRouter>
      <AppWrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/song/:id" element={<SongDetail />} />
        </Routes>
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
