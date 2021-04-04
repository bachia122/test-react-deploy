import React from 'react';
import Dashboard from './assets/dashboard';
import './App.css';
import './index.css';
import 'leaflet/dist/leaflet.css';
import s from './assets/dashboard/styles/Layout.module.scss';

function App() {
  return (
    <div className={s.wrap} > 
      <Dashboard />
    </div>
  );
}
export default App;
