import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import About from './About';
import Benchmark from './Benchmark';
import Adversarial from './Adversarial';
import RedTeaming from './RedTeaming';
import MultiLanguage from './MultiLanguage';
import ModelMonitor from './ModelMonitor';
import AgentMonitor from './AgentMonitor';
import './index.css';

console.log('🚀 index.js loaded');
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('🔍 root container found:', document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/benchmark" element={<Benchmark />} />
      <Route path="/adversarial" element={<Adversarial />} />
      <Route path="/redteaming" element={<RedTeaming />} />
      <Route path="/multilanguage" element={<MultiLanguage />} />
      <Route path="/modelmonitor" element={<ModelMonitor />} />
      <Route path="/agentmonitor" element={<AgentMonitor />} />
    </Routes>
  </Router>
);
