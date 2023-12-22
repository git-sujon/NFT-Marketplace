const LiveAuctionSpinningObject = () => {
  return (
    // <div className="absolute  animate-spin">
    <div className="">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path
          id="circlePath"
          d="
      M 10, 50
      a 40,40 0 1,1 80,0
      40,40 0 1,1 -80,0
    "
        />
        <text>
          <textPath href="#circlePath">Live Auction</textPath>
        </text>
      </svg>
    </div>
    // </div>
  );
};

export default LiveAuctionSpinningObject;
