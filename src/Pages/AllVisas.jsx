import { useLoaderData } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import VisaCard from "../components/VisaCard";

const AllVisas = () => {

    const allVisaData = useLoaderData();

    return (
        <>
            <div className="md:w-8/12 mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between my-2 space-y-5">
                    <h1 className="text-3xl font-bold text-blue-900">All Visas: {allVisaData.length}</h1>
                    <div>
                        <label className="input ring-2 ring-blue-800 flex items-center gap-2 w-96 lg:w-72">
                            <input type="text" className="grow" placeholder="Visa Search" />
                            <IoSearchOutline size={20} />
                        </label>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center my-10">
                    {
                        allVisaData.map(singleVisa => <VisaCard
                            key={singleVisa.key}
                            singleVisa={singleVisa}
                        >
                        </VisaCard>)
                    }
                </div>

            </div>
        </>
    );
};

export default AllVisas;