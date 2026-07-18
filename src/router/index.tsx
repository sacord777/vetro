import { createHashRouter } from 'react-router-dom'
import App from '../App'
import HomePage from '../pages/HomePage'
import CoursesPage from '../pages/CoursesPage'
import CourseDetailPage from '../pages/CourseDetailPage'
import MaterialsPage from '../pages/MaterialsPage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'

export const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'courses', element: <CoursesPage /> },
      { path: 'courses/:courseId', element: <CourseDetailPage /> },
      { path: 'materials', element: <MaterialsPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
])
