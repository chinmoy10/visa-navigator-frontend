import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AllVisas from "../Pages/AllVisas";
import AddVisa from "../Pages/AddVisa";
import MyAddedVisas from "../Pages/MyAddedVisas";
import MyVisaApplications from "../Pages/MyVisaApplications";
import VisaDetails from "../Pages/VisaDetails";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:3000/visas?page=home')
            },
            {
                path: "/allVisas",
                element: <AllVisas></AllVisas>,
                loader: () => fetch('http://localhost:3000/visas')

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
            {
                path: "/visaDetails/:id",
                element: <VisaDetails></VisaDetails>,
                loader: () => fetch('http://localhost:3000/visas')
            },
        ]
    }
]);

export default routes;