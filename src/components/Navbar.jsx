import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-lg px-8 py-4 flex justify-between items-center sticky top-0">
      <h1 className="text-2xl font-bold text-blue-600">
        🚀 QSkill Project
      </h1>

      <div className="flex gap-6 text-lg">
        <Link
          to="/"
          className="hover:text-blue-600 transition"
        >
          Home
        </Link>

        <Link
          to="/translator"
          className="hover:text-blue-600 transition"
        >
          Translator
        </Link>

        <Link
          to="/generator"
          className="hover:text-blue-600 transition"
        >
          Generator
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;