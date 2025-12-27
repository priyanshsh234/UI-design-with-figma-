// src/components/Hero.jsx
import NFTCard from "./NFTCard";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-12 py-16">
      
      {/* LEFT */}
      <div className="max-w-xl">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Discover Rare <br />
          Collections Of <br />
          Art & NFT’s
        </h1>

        <p className="text-gray-300 mt-6">
          Create, Explore, & Collect Digital Art NFTs
        </p>

        <button className="mt-8 bg-purple-600 px-8 py-3 rounded-md font-semibold hover:bg-purple-700 transition">
          Explore
        </button>
      </div>

      {/* RIGHT */}
      <NFTCard />
    </section>
  );
}
