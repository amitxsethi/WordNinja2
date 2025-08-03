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

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-8"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<VocabularyGame />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/badges" element={<Badges />} />
            <Route path="/practice" element={<Practice />} />
          </Routes>
        </motion.div>
      </div>
    </Router>
  );
}

export default App; 