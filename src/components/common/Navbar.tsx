import { Link } from '@tanstack/react-router';

function Navbar() {
  return (
    <header>
      <nav className="flex gap-4 p-4 border-b justify-center">
        <div>
        <Link to="/" className="
        text-xl sm:px-4 sm:py-2 rounded-sm ">
          Home
        </Link>
        </div>
        <div>
        <Link to="/categories" className="text-xl sm:px-4 sm:py-2 rounded-sm">
          Categories
        </Link>
        </div>
        <div>
        <Link to="/profile" className="text-xl sm:px-4 sm:py-2 rounded-sm ">
          Profile
        </Link>
        </div>
        <div>
        <Link to="/settings" className="text-xl sm:px-4 sm:py-2 rounded-sm ">
          Settings
        </Link>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
