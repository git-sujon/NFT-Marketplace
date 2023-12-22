"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { FaEthereum } from "react-icons/fa";
// import required modules
import { EffectCards } from "swiper/modules";
import { nftData } from "@/constants/swiperData";
import Image from "next/image";
import { convertBidEndTimeToRemainingTime } from "@/utils/ConvertTimeToRemainingTime";


const SwiperImages = () => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="nftSwiper"
      >
        {nftData.map((nftInfo) => (
          <SwiperSlide key={nftInfo.id}>
            {/* <Image width={200} height={300} src={nftInfo.imageUrl} alt="" /> */}
            <div className="relative grid h-full w-full  overflow-hidden rounded-xl bg-clip-border">
              <div
                className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url(https://mir-s3-cdn-cf.behance.net/project_modules/1400/df0bfc68593275.5b6b694e74026.png)] bg-cover bg-clip-border bg-center shadow-none`}
              ></div>
              <div className="relative  p-3 flex flex-col justify-between">
                <div>
                  <h2 className=" block  text-2xl font-bold leading-[1.5]">
                    {nftInfo.nftName}
                  </h2>
                  <h5 className=" block font-semibold text-lg ">
                    {nftInfo.sellerName}
                  </h5>
                </div>

                <div className="flex items-center justify-between mb-2 bg-white rounded-xl bg-opacity-30 backdrop-filter backdrop-blur-lg p-2">
                  <div className="flex flex-col gap-y-1">
                    <h6 className="font-bold text-base">Current Bid</h6>
                    <div className="flex items-center gap-x-1">
                      <FaEthereum />
                      <p className="text-xl font-bold">
                        {nftInfo.currentBidPrice} ETH
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-1">
                    <h6 className="font-bold text-base">Ends in</h6>
                    <div className="flex items-center gap-x-1">
                      <p className="text-xl font-bold">
                        {convertBidEndTimeToRemainingTime(nftInfo.bidEndTime)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperImages;
