import { createBrowserRouter } from 'react-router-dom';
import LoginPage from "../components/LoginPage";
import Dashboard from "../pages/Dashboard";
import CreateQuiz from "../pages/CreateQuiz";
import MyQuiz from '../pages/MyQuiz';

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
    },
    {
        path: "dashboard",
        element: <Dashboard />,

    },
    {
        path: "createquiz",
        element: <CreateQuiz />,
    },
    {
        path: "myquiz",
        element: <MyQuiz />
    },
]);

export default router;
