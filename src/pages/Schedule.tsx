import React from 'react';

const Schedule: React.FC = () => {
    return (
        <div className="page"><div className="page-heading"><div><p className="eyebrow">Spring semester 2024</p><h1>Schedule<span className="accent">.</span></h1><p className="lede">Your classes, reviews and deadlines in one place.</p></div><button className="primary-button">+ Add reminder</button></div><div className="week-header"><button>&lt;</button><strong>March 11 - 17, 2024</strong><button>&gt;</button></div><div className="schedule-list"><div className="schedule-day"><div className="day-label"><b>MON</b><strong>11</strong></div><div className="empty-day">No classes scheduled</div></div><div className="schedule-day active-day"><div className="day-label"><b>TUE</b><strong>12</strong></div><div className="schedule-event teal-event"><span>09:00</span><div><strong>UX Research Methods</strong><p>Room B-204 &middot; Lecture</p></div></div><div className="schedule-event orange-event"><span>13:00</span><div><strong>Database Systems</strong><p>Lab C-12 &middot; Practical</p></div></div></div><div className="schedule-day"><div className="day-label"><b>WED</b><strong>13</strong></div><div className="schedule-event purple-event"><span>11:00</span><div><strong>Design Systems</strong><p>Studio A-01 &middot; Workshop</p></div></div></div></div></div>
    );
};

export default Schedule;