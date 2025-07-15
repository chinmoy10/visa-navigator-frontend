import { PiDotDuotone } from "react-icons/pi";

const Banner = () => {
  return (
    <>
      <div className="carousel w-full h-[550px] relative"
        style={{
          backgroundImage:
            `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.8)), url(https://i.ibb.co/6ctbRSbw/banner-Img-1.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}>
        <div id="item1" className="carousel-item w-full">
          <div className="flex flex-col pt-20 md:pt-0 md:justify-center items-center text-center mx-auto space-y-3">
            <h1 className="text-white text-6xl font-bold">Welcome to VisaGO</h1>
            <p className="text-gray-200 text-xl font-light">Your trusted partner for navigating visa process worldwide</p>
          </div>
        </div>
        <div id="item2" className="carousel-item w-full">
          <div className="flex flex-col pt-20 md:pt-0 md:justify-center items-center text-center mx-auto space-y-3">
            <h1 className="text-white text-6xl font-bold">Explore the World. We’ll Handle the Visas.</h1>
            <p className="text-gray-200 text-xl font-light">Simply choose your destination, review the required documents, and apply confidently while we take care of the technicalities.</p>
          </div>
        </div>
        <div id="item3" className="carousel-item w-full">
          <div className="flex flex-col pt-20 md:pt-0 md:justify-center items-center text-center mx-auto space-y-3">
            <h1 className="text-white text-6xl font-bold">Fast-Track Your Next Destination</h1>
            <p className="text-gray-200 text-lg font-light">Get instant access to country-specific visa details, estimated processing times, and quick online submission options.</p>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 absolute -translate-y-12">
        <a href="#item1" className="text-gray-300"> <PiDotDuotone size={45} /> </a>
        <a href="#item2" className="text-gray-300"> <PiDotDuotone size={45} /> </a>
        <a href="#item3" className="text-gray-300"> <PiDotDuotone size={45} /> </a>
      </div>
      <div className="flex w-full justify-center absolute -translate-y-40 md:-translate-y-40 lg:-translate-y-52">
        <div className="btn bg-orange-400 text-white text-lg font-normal shadow border-none rounded-lg">Explore Visas</div>
      </div>
    </>
  );
};

export default Banner;
