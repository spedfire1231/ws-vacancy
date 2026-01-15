import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import VideoInfo from './pages/VideoInfo/VideoInfo';
import TextInfo from './pages/TextInfo/TextInfo';
import Salary from './pages/Salary/Salary';
import Schedules from './pages/Schedules/Schedules';
import Employment from './pages/Employment/Employment';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video-info" element={<VideoInfo />} />
          <Route path="/text-info" element={<TextInfo />} />
          <Route path="/salary" element={<Salary />} />
          <Route path="/schedules" element={<Schedules />} />
          <Route path="/employment" element={<Employment />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;