// src/components/Stats.jsx
export default function Stats() {
  return (
    <div className="flex justify-center gap-16 py-16 text-center">
      <div>
        <h2 className="text-3xl font-bold">32k+</h2>
        <p className="text-gray-400">Artwork</p>
      </div>

      <div>
        <h2 className="text-3xl font-bold">20k+</h2>
        <p className="text-gray-400">Auctions</p>
      </div>

      <div>
        <h2 className="text-3xl font-bold">10k+</h2>
        <p className="text-gray-400">Artists</p>
      </div>
    </div>
  );
}
