import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <nav className="pl-5 pr-5 flex justify-between items-center h-15 bg-white p-3 w-4/12">
        <Link className="text-black text-1xl" href="/">
          Home
        </Link>
        <Link className="text-black text-1xl" href="/works">
          Works
        </Link>
        <Link className="text-black text-1xl" href="/about">
          About
        </Link>
        <Link
          className="text-white bg-gray-800 text-1xl border rounded pl-3 pr-3 pb-1 pt-1"
          href="/contact"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
