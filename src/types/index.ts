export interface Student {
    id: string;
    name: string;
    email: string;
    courses: Course[];
}

export interface Course {
    id: string;
    title: string;
    description: string;
    credits: number;
    grade?: string;
}

export interface Schedule {
    day: string;
    time: string;
    courseId: string;
}

export interface Grade {
    courseId: string;
    grade: string;
}