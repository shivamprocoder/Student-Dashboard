import React from 'react';

const Grades: React.FC = () => {
    return (
        <div className="page"><div className="page-heading"><div><p className="eyebrow">Performance overview</p><h1>Grades<span className="accent">.</span></h1><p className="lede">A complete view of your results across every active course.</p></div><div className="grade-summary"><strong>3.72</strong><span>Current GPA</span></div></div><div className="surface grade-table"><div className="table-head"><span>Course</span><span>Credits</span><span>Grade</span><span>Score</span></div><div className="table-row"><strong>Design Systems</strong><span>3</span><b className="grade-a">A</b><span>92 / 100</span></div><div className="table-row"><strong>Database Systems</strong><span>4</span><b className="grade-b">B+</b><span>87 / 100</span></div><div className="table-row"><strong>UX Research Methods</strong><span>3</span><b className="grade-a">A-</b><span>90 / 100</span></div><div className="table-row"><strong>Academic Writing</strong><span>2</span><b className="grade-b">B+</b><span>85 / 100</span></div></div></div>
    );
};

export default Grades;