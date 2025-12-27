import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer
      className="
        w-full h-[278px]
        mx-auto
        bg-gradient-to-r from-[#1a0f2e] via-[#1b1b1b] to-[#3b0a57]
        text-white
        flex flex-col justify-between
        px-[120px] py-[50px]
      "
    >
      <FooterTop />
      <FooterBottom />
    </footer>
  );
}
