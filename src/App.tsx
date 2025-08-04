import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import VocabularyGame from './pages/VocabularyGame';
import Progress from './pages/Progress';
import Badges from './pages/Badges';
import Practice from './pages/Practice';
import './index.css';

// Version tracking - update this for each deployment
const APP_VERSION = '1.0.4';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col">
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-8 flex-grow"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<VocabularyGame />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/badges" element={<Badges />} />
            <Route path="/practice" element={<Practice />} />
          </Routes>
        </motion.div>
        
        {/* Version Footer */}
        <footer className="bg-white border-t border-gray-200 py-2">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-gray-500">
              WordNinja v{APP_VERSION} - Vocabulary Learning Game
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App; 