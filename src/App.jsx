import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Auth/LoginPage';
import Dashboard from './pages/Dashboard/Dashboard';
import CourseDetail from './pages/CourseDetail/CourseDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/course/:courseId" element={<CourseDetail />} />
    </Routes>
  );
}

export default App;