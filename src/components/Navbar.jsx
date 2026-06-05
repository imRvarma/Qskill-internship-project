import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-lg px-8 py-4 flex justify-between items-center sticky top-0">
      <h1 className="text-2xl font-bold text-blue-600">
        🚀QSkill
      </h1>

      <div className="flex gap-6 text-lg">
        <Link
          to="/"
          className="hover:text-blue-600 transition border-2 py-2 px-2 rounded-full hover:bg-purple-400"
        >
          Home
        </Link>

        <Link
          to="/translator"
          className="hover:text-blue-600 transition border-2 py-2 px-2 rounded-full hover:bg-purple-400"
        >
          Translator
        </Link>

        <Link
          to="/generator"
          className="hover:text-blue-600 transition border-2 py-2 px-2 rounded-full hover:bg-purple-400"
        >
          Generator
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;