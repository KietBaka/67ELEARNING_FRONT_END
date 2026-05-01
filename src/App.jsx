import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import LoginPage from './pages/Auth/LoginPage';
import MainLayout from './pages/Dashboard/MainLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import CourseDetail from './pages/CourseDetail/CourseDetail';
import Profile from './pages/Profile/Profile';
import DeadlineManager from './pages/DeadlineManager/DeadlineManager';

import Quiz from './pages/Quiz/Quiz'
import LecturerDashboard from "./pages/LecturerDashboard/LecturerDashboard.jsx";
import CurriculumManager from "./pages/CurriculumManager/CurriculumManager.jsx";
import QuizManager from "./pages/QuizManager/QuizManager.jsx";
import ResultScreen from "./pages/Quiz/ResultScreen.jsx";
import MaterialManager from "./pages/MaterialManager/MaterialManager.jsx";
function App() {
  const { user } = useAuth(); 

  const PrivateRoute = ({ children }) => {
    return user ? children : <Navigate to="/" />;
  };

  return (
    <Routes>
      <Route path="/" element={
        user ? (
          <Navigate to={user.role === 'LECTURER' ? '/lecturer-dashboard' : '/dashboard'} />
        ) : <LoginPage />
      } />
      <Route element={<PrivateRoute><MainLayout /></PrivateRoute>}> {/* Bọc PrivateRoute ở đây */}
        
        <Route path="/profile" element={<Profile />} />

        {/* --- LUỒNG SINH VIÊN --- */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/course/:courseId" element={<CourseDetail />} />
        <Route path="/deadlines" element={<DeadlineManager />} />
        <Route path="/quiz_attempt_result/:studentId/:quizId/:attemptId" element={<ResultScreen/>} />
        <Route path="/quiz/:quizId" element={<Quiz/>} />      

        {/* --- LUỒNG GIÁO VIÊN --- */}
        <Route path="/lecturer-dashboard" element={<LecturerDashboard />} />
        <Route path="/teacher/QuizManager/:courseId" element={<QuizManager />} />
        <Route path="/teacher/CurriculumManager/:courseId" element={<CurriculumManager />} />
        <Route path="/teacher/MaterialManager/:courseId" element={<MaterialManager />} />        
        </Route>
    </Routes>
  );
}

export default App;