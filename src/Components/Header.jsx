import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-green-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-xl font-bold">Agri Connect</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/marketplace" className="hover:text-green-200 transition-colors">Marketplace</Link>
            {currentUser ? (
              <>
                <Link to={currentUser.userType === 'farmer' ? '/farmer/dashboard' : '/buyer/dashboard'} className="hover:text-green-200 transition-colors">
                  Dashboard
                </Link>
                <Link to="/messages" className="hover:text-green-200 transition-colors">Messages</Link>
                <div className="relative group">
                  <button className="flex items-center hover:text-green-200 transition-colors">
                    {currentUser.fullName}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 hidden group-hover:block">
                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                    <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
                    <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Logout
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-green-200 transition-colors">Login</Link>
                <Link to="/register" className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-md transition-colors">
                  Register
                </Link>
              </>
            )}
          </nav>
          
          {/* Mobile menu button */}
          <button onClick={toggleMenu} className="md:hidden focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <Link to="/marketplace" className="block py-2 hover:bg-green-600 transition-colors">Marketplace</Link>
            {currentUser ? (
              <>
                <Link to={currentUser.userType === 'farmer' ? '/farmer/dashboard' : '/buyer/dashboard'} className="block py-2 hover:bg-green-600 transition-colors">
                  Dashboard
                </Link>
                <Link to="/messages" className="block py-2 hover:bg-green-600 transition-colors">Messages</Link>
                <Link to="/profile" className="block py-2 hover:bg-green-600 transition-colors">Profile</Link>
                <Link to="/settings" className="block py-2 hover:bg-green-600 transition-colors">Settings</Link>
                <button onClick={handleLogout} className="block w-full text-left py-2 hover:bg-green-600 transition-colors">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="block py-2 hover:bg-green-600 transition-colors">Login</Link>
                <Link to="/register" className="block py-2 hover:bg-green-600 transition-colors">Register</Link>
              </>
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

