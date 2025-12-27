// src/components/FeaturedNFT.jsx
import Countdown from "./Countdown";
import bitcoin from "../assets/bitcoin.png"; // you can reuse or add a new image

export default function FeaturedNFT() {
  return (
    <section className="px-12 py-24 flex flex-col lg:flex-row items-center gap-16">
      
      {/* LEFT IMAGE */}
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 rounded-2xl blur-2xl bg-purple-600 opacity-40"></div>
        <img
          src={bitcoin}
          alt="Bitcoin NFT"
          className="relative w-[420px] rounded-2xl border-2 border-purple-500"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="max-w-xl">
        <h2 className="text-5xl font-bold leading-tight">
          Bitcoin <br /> Art Work
        </h2>

        <p className="mt-4 text-gray-400">
          Created by <span className="text-purple-400">Jonathan Borba</span>
        </p>

        {/* BID + TIMER */}
        <div className="flex items-center gap-12 mt-10">
          <div>
            <p className="text-gray-400 text-sm">Current Bid</p>
            <h3 className="text-3xl font-bold">1.09 ETH</h3>
            <p className="text-gray-400">$1,835</p>
          </div>

          <div className="h-20 w-px bg-gray-600"></div>

          <Countdown />
        </div>

        {/* BUTTON */}
        <button className="mt-10 bg-white text-black px-8 py-3 rounded-md font-semibold hover:scale-105 transition flex items-center gap-2">
          View Art Work
          <span className="text-lg">↗</span>
        </button>
      </div>
    </section>
  );
}
