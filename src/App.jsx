import React from 'react';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div>
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
