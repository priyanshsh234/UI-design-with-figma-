// src/components/NFTCard.jsx
import nft from "../assets/nft.png";
import kft from "../assets/kft.png";

export default function NFTCard() {
  return (
    <div className="relative flex items-center justify-center md:justify-end w-full min-h-[600px] overflow-hidden">
      {/* Container for the overlapping images to keep them grouped */}
      <div className="relative w-[500px] h-[600px]">
        
        {/* KFT Image (The one behind, rotated) */}
        <img
          src={kft}
          alt="KFT"
          className="absolute rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105"
          style={{
            width: "376px",
            height: "566px",
            top: "40px",
            left: "0px",
            transform: "rotate(15deg)",
            zIndex: 10,
          }}
        />

        {/* NFT Image (The one in front) */}
        <div className="absolute" style={{
            top: "0px",
            left: "120px",
            zIndex: 20,
        }}>
            <img
              src={nft}
              alt="NFT"
              className="rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105"
              style={{
                width: "376px",
                height: "566px",
              }}
            />
            
            {/* Glassmorphism Overlay (Bid Info) */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] backdrop-blur-md bg-white/10 border border-white/20 p-4 rounded-xl text-white">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <p className="text-xs opacity-70">Current Bid</p>
                        <p className="font-bold">2.8 ETH</p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs opacity-70">Remaining Time</p>
                        <p className="font-bold text-sm">18h : 57m : 14s</p>
                    </div>
                </div>
                <button className="w-full py-2 bg-white text-black font-bold rounded-lg hover:bg-opacity-90 transition-colors">
                    PLACE A BID
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}

