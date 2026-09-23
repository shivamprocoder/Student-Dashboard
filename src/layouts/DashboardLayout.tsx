import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const DashboardLayout: React.FC = () => {
    return (
        <div className="app-shell">
            <aside className="sidebar">
                <div className="brand"><span className="brand-mark">N</span><span>northstar<span className="brand-dot">.</span></span></div>
                <div className="nav-label">Workspace</div>
                <nav className="side-nav">
                    <NavLink to="/" end><span className="nav-icon">01</span>Overview</NavLink>
                    <NavLink to="/courses"><span className="nav-icon">02</span>My courses</NavLink>
                    <NavLink to="/grades"><span className="nav-icon">03</span>Grades</NavLink>
                    <NavLink to="/schedule"><span className="nav-icon">04</span>Schedule</NavLink>
                </nav>
                <div className="nav-label nav-label-bottom">Account</div>
                <nav className="side-nav">
                    <NavLink to="/profile"><span className="nav-icon">05</span>Profile</NavLink>
                </nav>
                <div className="sidebar-footer"><span className="status-dot" />Spring semester 2024<br /><small>12 weeks remaining</small></div>
            </aside>
            <div className="main-column">
                <header className="topbar"><div className="breadcrumb">Workspace <span>/</span> Student portal</div><div className="topbar-actions"><button className="icon-button" aria-label="Notifications">o</button><div className="user-chip"><span className="avatar small-avatar">AR</span><span>Alex Rivera</span><span className="chevron">v</span></div></div></header>
                <main className="content"><Outlet /></main>
                <footer className="footer">Northstar Student Portal <span>Built for focused learning.</span></footer>
            </div>
        </div>
    );
};

export default DashboardLayout;