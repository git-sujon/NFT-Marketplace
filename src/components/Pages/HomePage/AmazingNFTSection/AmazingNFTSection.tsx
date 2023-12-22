import { CiCreditCard2 } from "react-icons/ci";
import { IoStatsChartOutline } from "react-icons/io5";
const AmazingNFTSection = () => {
  return (
    <div className="bg-slate-100">
      <div className="py-16 mx-auto max-w-screen-2xl px-4 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        <div>
          <h2 className="text-2xl font-black uppercase ">
            The amazing nft art of the world here
          </h2>
        </div>

        <div className="flex justify-start gap-x-2">
          {/* icon */}
          <div>
            {" "}
            <CiCreditCard2 className="text-4xl" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800">
              Fast Transaction
            </h3>
            <p className="leading-relaxed  text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              voluptate at quam ea maiores alias dolor voluptatibus architecto
              doloremque sed?
            </p>
          </div>
        </div>

        <div className="flex justify-start gap-x-2">
          {/* icon */}
          <div>
            {" "}
            <IoStatsChartOutline className="text-4xl" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800">
              Growth Transaction
            </h3>
            <p className="leading-relaxed  text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ullam
              nulla architecto error expedita officia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazingNFTSection;
