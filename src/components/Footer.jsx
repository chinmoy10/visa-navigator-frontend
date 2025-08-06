import { Link } from "react-router-dom";
import "./css/Footer.css"
import { GiStarShuriken } from "react-icons/gi";
import logo from "../assets/newlogo.png";
import { FaPhoneVolume } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <div className="bg-blue-900/65 text-white">
                <footer className="flex flex-col items-center" 
                style={{
                    backgroundImage:
                        `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(https://i.ibb.co/Q7k5wbFS/plane.png)`,
                    backgroundRepeat: "no-repeat",
                    backgroundPositionX: "center",
                    backgroundPositionY: "60%"
                }}>
                    <div className="flex flex-col lg:flex-row justify-between py-12 gap-6 lg:gap-0 md:w-8/12 mx-auto">
                        <div className="space-y-4">
                            <div className="w-[250px]">
                                <Link to={`/`}><img className="w-full" src={logo} alt="" /></Link>
                            </div>
                            <p className="font-light text-lg">
                                Traveling refreshes the soul like a magic spell,
                                <br />
                                bringing new energy and perspective every time.
                            </p>
                            <div className="bg-gray-700/40 w-[215px] shadow-md">
                                <div className="flex justify-between items-center text-xl p-3"><FaPhoneVolume size={35} color="#ffa500" className="bg-white p-2" /> +91 590 088 55</div>
                            </div>
                        </div>
                        <nav className="flex flex-col space-y-3">
                            <h6 className="text-2xl font-bold text-justify text-orange-300">Useful Links</h6>
                            <a className="footer_items"> <GiStarShuriken size={16} />About Us</a>
                            <a className="footer_items"><GiStarShuriken size={15} />Blog</a>
                            <a className="footer_items"><GiStarShuriken size={15} />Terms & Conditions</a>
                            <a className="footer_items"><GiStarShuriken size={15} />
                                Privacy Policy
                            </a>
                        </nav>
                        <nav className="flex flex-col space-y-3">
                            <h6 className="text-2xl font-bold text-justify text-orange-300">Services</h6>
                            <a className="footer_items"><GiStarShuriken size={15} />Tourist Visa</a>
                            <a className="footer_items"><GiStarShuriken size={15} />Commercial Visa</a>
                            <a className="footer_items"><GiStarShuriken size={15} />Student Visa</a>
                            <a className="footer_items"><GiStarShuriken size={15} />Working Visa</a>
                        </nav>

                    </div>
                    <div className="bg-blue-950/85 w-full">
                        <div className="flex flex-col md:flex-row justify-between items-center py-5 w-8/12 mx-auto gap-5">
                            <p className="font-medium text-base text-slate-300">
                                &#64;2025 Company All Rights Reserved.
                            </p>
                            <div className="space-y-3">
                                <div className="grid grid-flow-col items-center lg:justify-center gap-4">
                                    <a className="cursor-pointer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            className="fill-current"
                                        >
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                        </svg>
                                    </a>
                                    <a className="cursor-pointer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            className="fill-current"
                                        >
                                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                                        </svg>
                                    </a>
                                    <a className="cursor-pointer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            className="fill-current"
                                        >
                                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        </>
    );
};

export default Footer;