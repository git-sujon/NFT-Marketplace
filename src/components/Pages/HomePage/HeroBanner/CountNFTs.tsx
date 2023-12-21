"use client";

import CountUp from "react-countup";
const CountNFTs = () => {
  return (
    <div className="flex items-center gap-x-5">
      {/* single count */}
      <div className="flex flex-col">
        <div className="font-black text-4xl flex items-center">
          <CountUp end={98} />
          <p>K</p>
          <p className="text-5xl mb-2 ml-[-3px]">+</p>
        </div>
        <p className="leading-relaxed text-slate-600  font-semibold mt-[-8px]">Artwork</p>
      </div>
      {/* single count */}
      <div className="flex flex-col">
        <div className="font-black text-4xl flex items-center">
          <CountUp end={12} />
          <p>K</p>
          <p className="text-5xl mb-2 ml-[-3px]">+</p>
        </div>
        <p className="leading-relaxed text-slate-600  font-semibold mt-[-8px]">Auction</p>
      </div>
      {/* single count */}
      <div className="flex flex-col">
        <div className="font-black text-4xl flex items-center">
          <CountUp end={15} />
          <p>K</p>
          <p className="text-5xl mb-2 ml-[-3px]">+</p>
        </div>
        <p className="leading-relaxed text-slate-600  font-semibold mt-[-8px]">Artist</p>
      </div>
    </div>
  );
};

export default CountNFTs;
