// src/components/TrendingSection.jsx
import TrendingCard from "./TrendingCard";
import a from "../assets/a.jpg";
import b from "../assets/b.jpg";
import c from "../assets/c.jpg";
import d from "../assets/d.jpg";
import e from "../assets/e.jpg";

const leftColumn = [
  {
    id: 1,
    name: "Sebastian",
    title: "Golden Flower",
    price: "2.3 ETH",
    image: a,
    highlight: true,
  },
  {
    id: 2,
    name: "Javier Miranda",
    title: "Golden Flower",
    price: "2.3 ETH",
    image: b,
  },
  {
    id: 3,
    name: "Milad Fakurian",
    title: "Golden Flower",
    price: "2.3 ETH",
    image: c,
  },
];

const rightColumn = [
  {
    id: 4,
    name: "Ferhat Deniz",
    title: "Golden Flower",
    price: "2.3 ETH",
    image: d,
  },
  {
    id: 5,
    name: "Polina Kondrashova",
    title: "Golden Flower",
    price: "2.3 ETH",
    image: e,
  },
];

export default function TrendingSection() {
  return (
    <section className="px-12 py-20">
      {/* HEADER */}
      <div className="mb-10 max-w-md">
        <h2 className="text-4xl font-bold">Trending This Week</h2>
        <p className="text-gray-400 mt-3 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* ZIG-ZAG GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6">
          {leftColumn.map((item) => (
            <TrendingCard key={item.id} data={item} />
          ))}
        </div>

        {/* RIGHT COLUMN (small zig-zag offset) */}
        <div className="flex flex-col gap-6 mt-6">
          {rightColumn.map((item) => (
            <TrendingCard key={item.id} data={item} />
          ))}
        </div>

      </div>
    </section>
  );
}



