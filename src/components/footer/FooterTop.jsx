import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function FooterTop() {
  return (
    <div className="flex items-center justify-between">
      
      {/* LOGO */}
      <h2 className="text-2xl font-bold">NFTme</h2>

      {/* NAV */}
      <nav className="flex gap-10 text-sm text-gray-300">
        <a href="#" className="hover:text-white">Explore</a>
        <a href="#" className="hover:text-white">Marketplace</a>
        <a href="#" className="hover:text-white">Artists</a>
        <a href="#" className="hover:text-white">Contact</a>
      </nav>

      {/* SOCIAL ICONS */}
      <div className="flex gap-4">
        <SocialIcon><FaInstagram /></SocialIcon>
        <SocialIcon><FaFacebookF /></SocialIcon>
        <SocialIcon><FaTwitter /></SocialIcon>
      </div>

    </div>
  );
}

function SocialIcon({ children }) {
  return (
    <div className="
      w-9 h-9 rounded-full
      bg-white text-black
      flex items-center justify-center
      cursor-pointer
      hover:scale-105 transition
    ">
      {children}
    </div>
  );
}
