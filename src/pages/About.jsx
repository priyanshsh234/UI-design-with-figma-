import React from "react";

export default function About() {
  // Direct Unsplash URLs for digital art and team imagery
  const teamImageUrl = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000";
  const nftCollectionUrl = "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1000";

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white px-6 md:px-20 py-12">
      
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Discover Rare Collections Of Art & NFT’s
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          Our mission is to bring exclusive digital art and NFT collections to
          enthusiasts worldwide. We combine creativity, technology, and community
          to redefine the NFT experience.
        </p>
      </section>

      {/* Company Work Section */}
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
          About Our Company
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={teamImageUrl}
            alt="Team working"
            className="w-full md:w-1/2 rounded-xl mb-6 md:mb-0 shadow-2xl border border-purple-500/20"
          />
          <p className="text-gray-300 text-lg md:text-xl md:w-1/2">
            We are a passionate team of artists, developers, and NFT enthusiasts
            dedicated to creating unique digital experiences. Our platform allows
            collectors to explore, buy, and showcase exclusive digital art pieces
            from talented artists across the globe. Innovation, transparency, and
            community engagement are at the heart of everything we do.
          </p>
        </div>
      </section>

      {/* NFT Collections Section */}
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
          Featured NFT Collections
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <p className="text-gray-300 text-lg md:text-xl md:w-1/2 mb-6 md:mb-0">
            Explore our curated NFT collections featuring rare and limited-edition
            digital artworks. Each piece is verified on the blockchain to ensure
            authenticity and uniqueness. Collect, trade, or showcase your favorite
            NFTs with pride.
          </p>
          <img
            src={nftCollectionUrl}
            alt="NFT collection"
            className="w-full md:w-1/2 rounded-xl shadow-2xl border border-purple-500/20"
          />
        </div>
      </section>

      {/* Privacy Policy / Terms Section */}
      <section className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Privacy & Terms
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-4">
          Your privacy is our priority. We respect your data and ensure all
          transactions are secure. By using our platform, you agree to our Terms
          of Service and Privacy Policy.
        </p>
        <div className="flex justify-center space-x-6">
          <a href="/terms" className="text-purple-400 hover:text-purple-300 transition-colors">
            Terms of Service
          </a>
          <span className="text-gray-600">|</span>
          <a href="/privacy" className="text-purple-400 hover:text-purple-300 transition-colors">
            Privacy Policy
          </a>
        </div>
      </section>
    </div>
  );
}
