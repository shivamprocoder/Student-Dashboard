import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export const fetchStudents = async () => {
    const response = await axios.get(`${API_BASE_URL}/students`);
    return response.data;
};

export const fetchCourses = async () => {
    const response = await axios.get(`${API_BASE_URL}/courses`);
    return response.data;
};

export const fetchGrades = async (studentId: string) => {
    const response = await axios.get(`${API_BASE_URL}/students/${studentId}/grades`);
    return response.data;
};

export const updateProfile = async (studentId: string, profileData: Record<string, unknown>) => {
    const response = await axios.put(`${API_BASE_URL}/students/${studentId}`, profileData);
    return response.data;
};