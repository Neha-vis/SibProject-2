import Logo from "../static/img/logo.png";

const Header = () => {
  return (
    <header className="bg-black text-white flex justify-between items-center px-6 py-4">
      {/* Left: Logo and Company Name */}
      <div className="flex items-center gap-2">
        <img src={Logo} alt="OC PRO Logo" className="h-15 w-40" />
        {/* <div className="text-orange-400 text-2xl font-bold">OC PRO</div> */}
      </div>

      {/* Right: CTA Button */}
      <a
        href="tel:7142152243"
        className="bg-orange-400 text-black font-semibold px-4 py-2 rounded hover:bg-orange-500 transition"
      >
        (714) 215-2243
      </a>
    </header>
  );
};

export default Header;
