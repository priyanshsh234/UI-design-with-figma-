// src/components/ArtistCard.jsx
export default function ArtistCard({ image, name }) {
  return (
    <div className="flex flex-col items-center gap-4">
      
      {/* IMAGE (FIGMA SIZE) */}
      <div className="w-[160px] h-[160px] rounded-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* NAME */}
      <p className="text-lg font-medium text-white">
        {name}
      </p>
    </div>
  );
}
