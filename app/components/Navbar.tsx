import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <nav className="pl-5 pr-5 flex justify-between items-center h-15 bg-white p-3 w-4/12">
        <Link
          className="transform transition duration-500 hover:scale-110 hover:bg-cyan-700 flex justify-center items-center hover:text-gray-100 text-1xl rounded pl-3 pr-3 pb-1 pt-1"
          href="/"
        >
          Home
        </Link>
        <Link
          className="transform transition duration-500 hover:scale-110 hover:bg-cyan-700 flex justify-center items-center hover:text-gray-100 text-1xl rounded pl-3 pr-3 pb-1 pt-1"
          href="/works"
        >
          Works
        </Link>
        <Link
          className="transform transition duration-500 hover:scale-110 hover:bg-cyan-700 flex justify-center items-center hover:text-gray-100 text-1xl rounded pl-3 pr-3 pb-1 pt-1"
          href="/about"
        >
          About
        </Link>
        <Link
          className="transform transition duration-500 hover:scale-110 hover:bg-cyan-700 flex justify-center items-center hover:text-gray-100 text-1xl rounded pl-3 pr-3 pb-1 pt-1"
          href="/contact"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
