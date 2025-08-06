import { VscDebugBreakpointLog } from "react-icons/vsc";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const VisaCard = ({ singleVisa }) => {

    const { _id, imageUrl, countryName, visaType, visaTime, requirDoc, description, visaAge, visaFee, visaValidity, visaAppMethod } = singleVisa || {};

    return (
        <>
            <div className="bg-base-100 border-t shadow">
                <figure className="px-4 pt-4 pb-3">
                    <img
                        src={imageUrl}
                        alt="Shoes"
                        className="w-full h-36 mx-auto border-2" />
                </figure>
                <div className="space-y-1">
                    <h2 className="text-xl text-black font-bold flex items-center justify-center">{countryName}
                    </h2>
                    <div className='px-4'>
                        <div className="w-full text-center">
                            <h1 className="badge bg-[#ffa500] text-white text-lg p-4">{visaType}</h1>
                        </div>
                        <div className='text-justify'>
                            <h2 className="flex items-center text-gray-700"> <VscDebugBreakpointLog /> Processing Time: {visaTime}</h2>
                            <h2 className="flex items-center text-gray-700"> <VscDebugBreakpointLog /> Fee: {visaFee}</h2>
                            <h2 className="flex items-center text-gray-700"> <VscDebugBreakpointLog /> Validity: {visaValidity}</h2>
                            <h2 className="flex items-center text-gray-700"> <VscDebugBreakpointLog /> App_Method: {visaAppMethod}</h2>
                        </div>
                    </div>
                    <div className="text-center pt-2 pb-5">
                        <Link to={`/visaDetails/${_id}`}>
                            <button className="btn card_btn shadow-none rounded-full">See Details <FiArrowUpRight className="bg-orange-400 rounded-full" size={25} /></button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VisaCard;