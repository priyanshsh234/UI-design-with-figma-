// src/components/JoinCommunity.jsx
import communityImg from "../assets/community.jpg";

export default function JoinCommunity() {
  return (
    <section className="px-12 py-24">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        
        {/* IMAGE CARD */}
        <div
          className="w-[550px] h-[550px] rounded-[20px] overflow-hidden"
        >
          <img
            src={communityImg}
            alt="NFT Community"
            className="w-full h-full object-cover"
          />
        </div>

        {/* TEXT + BUTTON BLOCK */}
        <div
          className="w-[541px] h-[289px] flex flex-col justify-center gap-8"
        >
          <h2 className="text-4xl font-bold text-white leading-snug">
            Join The Community <br />
            And Get The Best NFT <br />
            Collection
          </h2>
<button
  className="
    w-[310px] h-[59px]
    rounded-[10px]
    bg-gradient-to-r from-purple-500 to-pink-500
    text-white font-semibold text-sm
    flex items-center justify-center
    hover:opacity-90 transition
  "
>
  JOIN COMMUNITY
</button>

        </div>

      </div>
    </section>
  );
}
