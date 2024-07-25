import { createBrowserRouter } from "react-router-dom";
import ErrorPage from '../pages/ErrorPage'
import Layout from '../pages/Layout'
import Home from '../pages/Home'
const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);
export default Routes