import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import Grades from './pages/Grades';
import Profile from './pages/Profile';
import Schedule from './pages/Schedule';
import DashboardLayout from './layouts/DashboardLayout';

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<DashboardLayout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/grades" element={<Grades />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/schedule" element={<Schedule />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;