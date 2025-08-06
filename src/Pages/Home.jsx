import { useLoaderData, useNavigate } from "react-router-dom";
import Banner from "../components/Banner";
import VisaCard from "../components/VisaCard";

const Home = () => {

    const visaData = useLoaderData();
    const navigate = useNavigate();

    return (
        <>
            <div>
                <section>
                    <Banner></Banner>
                </section>
                <section className="md:w-8/12 mx-auto my-10">
                    <div className="flex justify-center">
                        <h1 className="text-3xl mb-10 hover:underline text-blue-900 font-semibold">Latest Visas</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">

                        {
                            visaData.map(singleVisa => <VisaCard
                                key={singleVisa._id}
                                singleVisa={singleVisa}
                            ></VisaCard>)
                        }
                    </div>
                    <div className="text-center pt-10">
                        <button onClick={() => navigate('/allVisas')} className="btn btn-lg bg-orange-400 text-white rounded-full shadow-none">See All Visas</button>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;