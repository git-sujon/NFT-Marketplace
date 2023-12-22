const LiveAuctionSpinningObject = () => {
  return (
    <div className="size-44">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="white">
        <path
          id="circlePath"
          d="
            M 10, 50
            a 40,40 0 1,1 80,0
            40,40 0 1,1 -80,0
          "
        />
        <text>
          <textPath href="#circlePath">Live Auction . Live Auction</textPath>
        </text>
      </svg>
    </div>
  );
};

export default LiveAuctionSpinningObject;
