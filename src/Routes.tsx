import { createBrowserRouter, RouterProvider } from "react-router";
import Permit from "./Permit";


const router = createBrowserRouter([
  {
    path: "",
    element: <Permit />,
  }
]);

const Routes = () => <RouterProvider router={router} />;

export default Routes;