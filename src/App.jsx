import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Tutorials from './components/Tutorials';
import Footer from './components/Footer';

function App() {
  const [currentView, setCurrentView] = useState('home');

  return (
    <div className="bg-primary min-h-screen text-text selection:bg-accent selection:text-primary">
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {currentView === 'home' ? <Home setCurrentView={setCurrentView} /> : <Tutorials />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
