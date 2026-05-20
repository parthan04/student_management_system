import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DashboardLayout from './layouts/mainLayout';
import UsersLayout from './layouts/userLayout';
import StudentsLayout from './layouts/studentLayout';
import CoursesLayout from './layouts/courseLayout';
import EnrollmentsLayout from './layouts/enrollmentLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />} />
        <Route path="/users" element={<UsersLayout />} />
        <Route path="/students" element={<StudentsLayout />} />
        <Route path="/courses" element={<CoursesLayout />} />
        <Route path="/enrollments" element={<EnrollmentsLayout />} />
      </Routes>
    </Router>
  )
}

export default App;