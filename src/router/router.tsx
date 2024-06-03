import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import UserList from "../pages/UserList";
import AddUser from "../pages/AddUser";
import Details from "../pages/Details";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <UserList />
            },
            {
                path: "/addUser",
                element: <AddUser />
            },
            {
                path: "/details/:id",
                element: <Details />
            }
        ]
    }
]);

export const MainRouter = () => {
    return <RouterProvider router={router} />
}
