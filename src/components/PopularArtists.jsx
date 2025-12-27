// src/components/PopularArtists.jsx
import ArtistCard from "./ArtistCard";
import aa from "../assets/aa.jpg";
import bb from "../assets/bb.jpg";
import cc from "../assets/cc.jpg";
import dd from "../assets/dd.jpg";

const artists = [
  { id: 1, name: "Ferhat Deniz", image: aa },
  { id: 2, name: "Sebastian", image: bb },
  { id: 3, name: "Javier Miranda", image: cc },
  { id: 4, name: "Erick Butler", image: dd },
];

export default function PopularArtists() {
  return (
    <section className="px-12 py-20">
      
      {/* HEADER */}
      <div className="flex justify-between items-center mb-14">
        <h2 className="text-4xl font-bold text-white">
          Popular Artists
        </h2>

        <button className="bg-white text-black px-5 py-2 rounded-md text-sm font-medium flex items-center gap-2 hover:bg-gray-200 transition">
        View all Artists
          <span>↗</span>
        </button>
      </div>

      {/* ARTISTS ROW */}
      <div className="flex justify-between max-w-5xl">
        {artists.map((artist) => (
          <ArtistCard
            key={artist.id}
            image={artist.image}
            name={artist.name}
          />
        ))}
      </div>

    </section>
  );
}
