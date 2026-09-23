# Student Dashboard Application

This is a student dashboard application built with React and TypeScript. The application provides students with an overview of their academic information, including courses, grades, schedules, and personal profiles.

## Project Structure

```
student-dashboard
├── public
│   └── favicon.svg
├── src
│   ├── assets
│   ├── components
│   │   ├── common
│   │   ├── dashboard
│   │   ├── layout
│   │   └── students
│   ├── pages
│   │   ├── Dashboard.tsx
│   │   ├── Courses.tsx
│   │   ├── Grades.tsx
│   │   ├── Profile.tsx
│   │   └── Schedule.tsx
│   ├── hooks
│   ├── layouts
│   │   └── DashboardLayout.tsx
│   ├── services
│   │   └── api.ts
│   ├── store
│   │   └── index.ts
│   ├── types
│   │   └── index.ts
│   ├── utils
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── routes.tsx
├── .env.example
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
└── vite.config.ts
```

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd student-dashboard
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Features

- **Dashboard:** Overview of student activities and information.
- **Courses:** View courses the student is enrolled in.
- **Grades:** Check grades for each course.
- **Profile:** Edit personal information.
- **Schedule:** View class schedules.

## Technologies Used

- React
- TypeScript
- Vite
- React Router
- Redux (for state management)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.