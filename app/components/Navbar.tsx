// components/Navbar.tsx
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-14 ml-12 mr-12">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        Cö<span className="text-blue-600">Lab</span>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-8 text-black">
        {["Home", "Projects", "Services", "Blog", "About", "Contacts"].map(
          (item, index) => (
            <li key={index} className="relative group">
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-black hover:text-black transition-all duration-300"
              >
                {item}
              </Link>
              {/* Underline Effect */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
          )
        )}
      </ul>

      {/* Auth Buttons */}
      <div className="flex items-center space-x-6">
        <Link href="/signin" className="text-gray-700 hover:underline">
          Sign In
        </Link>
        <Link
          href="/login"
          className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all duration-300"
        >
          Log In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
