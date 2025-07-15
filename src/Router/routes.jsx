import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AllVisas from "../Pages/AllVisas";
import AddVisa from "../Pages/AddVisa";
import MyAddedVisas from "../Pages/MyAddedVisas";
import MyVisaApplications from "../Pages/MyVisaApplications";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/allVisas",
                element: <AllVisas></AllVisas>
            },
            {
                path: "/addVisa",
                element: <AddVisa></AddVisa>
            },
            {
                path: "/myAddedVisas",
                element: <MyAddedVisas></MyAddedVisas>
            },
            {
                path: "/myVisaApplications",
                element: <MyVisaApplications></MyVisaApplications>
            },
        ]
    }
]);

export default routes;