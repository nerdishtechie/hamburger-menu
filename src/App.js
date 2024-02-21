import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Accommodation from './components/Accommodation';
import Places from './components/Places';
import Restaurants from './components/Restaurants';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <Header />
      <Navbar onSectionClick={handleSectionClick} />
      <main>
        {activeSection === 'home' && <h1>Home</h1>}
        {activeSection === 'contact' && <Contact />}
        {activeSection === 'accommodation' && <Accommodation />}
        {activeSection === 'places' && <Places />}
        {activeSection === 'restaurants' && <Restaurants />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
