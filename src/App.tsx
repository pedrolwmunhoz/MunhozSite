import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import './styles/globalStyles/index.css'



function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AppRoutes/>
    </BrowserRouter>
  );
}

export default App;
