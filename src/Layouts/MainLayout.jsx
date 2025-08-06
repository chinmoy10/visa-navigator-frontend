import { Outlet } from "react-router-dom";
import HelpLine from "../components/HelpLine";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <>
            <header>
                <div>
                    <HelpLine></HelpLine>
                </div>
                <Navbar></Navbar>
            </header>
            <main className="min-h-[calc(100vh-233px)] md:mx-auto">
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default MainLayout;