import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Portfolio", to: "/portfolio" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0b0f1a] px-6 sm:px-8 md:px-12 py-4 flex justify-between items-center shadow-md">

      {/* LOGO */}
      <h2 className="text-2xl font-bold text-white">Portfolio</h2>

      {/* Links for Desktop */}
      <ul className="hidden md:flex gap-8">
        {links.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-pink-300 font-semibold"
                    : "text-white hover:text-pink-300"
                }`
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Hamburger button for Mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="text-white focus:outline-none text-2xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Links */}
      <ul
        className={`md:hidden flex flex-col gap-4 bg-[#0b0f1a] absolute top-16 left-0 w-full overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 p-4" : "max-h-0"
        }`}
      >
        {links.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.to}
              onClick={() => setOpen(false)} // يغلق القايمة بعد الضغط
              className={({ isActive }) =>
                `block text-lg transition ${
                  isActive
                    ? "text-pink-300 font-semibold"
                    : "text-white hover:text-pink-300"
                }`
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

    </nav>
  );
}