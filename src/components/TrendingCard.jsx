// src/components/TrendingCard.jsx
export default function TrendingCard({ data }) {
  return (
    <div className="w-[556px]">
      
      {/* IMAGE BOX (FIGMA SIZE) */}
      <div
        className={`w-[556px] h-[450px] rounded-xl overflow-hidden ${
          data.highlight
            ? "border-2 border-blue-500 shadow-md shadow-blue-500/40"
            : ""
        }`}
      >
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* INFO */}
      <div className="flex justify-between items-center mt-3">
        <div>
          <h3 className="text-base font-semibold">{data.name}</h3>
          <p className="text-gray-400 text-sm">{data.title}</p>
        </div>

        <span className="text-purple-400 text-sm font-medium">
          {data.price}
        </span>
      </div>
    </div>
  );
}




