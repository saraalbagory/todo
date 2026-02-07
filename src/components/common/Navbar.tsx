import { Link, useLocation } from '@tanstack/react-router';

function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <nav className="flex gap-4 p-4 justify-center max-w-4xl mx-auto">
        <div>
        <Link to="/" className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
          isActive('/') 
            ? 'text-2xl bg-blue-600 dark:bg-blue-700 text-white' 
            : 'text-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}>
          {/* TODO: import constant for path names ex: PATHS.HOME */}
          Home 
        </Link>
        </div>
        <div>
        <Link to="/categories" className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
          isActive('/categories') 
            ? 'text-2xl bg-blue-600 dark:bg-blue-700 text-white' 
            : 'text-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}>
          Categories
        </Link>
        </div>
        <div>
        <Link to="/profile" className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
          isActive('/profile') 
            ? 'text-2xl bg-blue-600 dark:bg-blue-700 text-white' 
            : 'text-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}>
          Profile
        </Link>
        </div>
        <div>
        <Link to="/settings" className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
          isActive('/settings') 
            ? 'text-2xl bg-blue-600 dark:bg-blue-700 text-white' 
            : 'text-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}>
          Settings
        </Link>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
