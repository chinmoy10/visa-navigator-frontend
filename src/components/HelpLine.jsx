import { BiDialpad } from "react-icons/bi";
import { FaRegClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const HelpLine = () => {
  return (
    <>
      <section className="bg-blue-950 text-white p-3">
        <div className="w-10/12 mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <BiDialpad size={18} className="text-orange-400" />
              <h4 className="uppercase text-sm">
                Help Desk :{" "}
                <span className="font-bold text-base">+91 590 088 55</span>
              </h4>
            </div>
            <div className="flex lg:gap-40">
              <div className="flex items-center gap-1">
                <FaRegClock size={18} className="text-orange-400" />
                <h4 className="text-sm">Monday - Friday 09:00 AM - 05:00 PM</h4>
              </div>
              <div className="flex items-center gap-1">
                <FaLocationDot size={18} className="text-orange-400" />
                <h4 className="text-sm">Dhaka, Bangladesh</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HelpLine;
