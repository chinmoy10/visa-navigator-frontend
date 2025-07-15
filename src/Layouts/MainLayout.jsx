import { Outlet } from "react-router-dom";
import HelpLine from "../components/HelpLine";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <>
            <header>
                <div>
                    <HelpLine></HelpLine>
                </div>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer></footer>
        </>
    );
};

export default MainLayout;