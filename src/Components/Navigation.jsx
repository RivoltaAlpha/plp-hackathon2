import React from 'react';
import { Smartphone, Bell } from 'lucide-react';

const Navigation = ({ currentView, setCurrentView, notifications }) => {
  const NotificationBell = () => (
    <div className="relative">
      <Bell className="w-6 h-6 text-gray-600 hover:text-blue-500 cursor-pointer transition-colors" />
      {notifications.length > 0 && (
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
          {notifications.length}
        </div>
      )}
    </div>
  );

  return (
    <nav className="bg-white rounded-xl shadow-lg p-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
            <Smartphone className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">FarmConnect</h1>
            <p className="text-sm text-gray-500">AI-Powered Market Intelligence</p>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setCurrentView('dashboard')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              currentView === 'dashboard' 
                ? 'bg-blue-100 text-blue-700' 
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            Dashboard
          </button>
          <button 
            onClick={() => setCurrentView('marketplace')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              currentView === 'marketplace' 
                ? 'bg-blue-100 text-blue-700' 
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            Marketplace
          </button>
          <button 
            onClick={() => setCurrentView('buyers')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              currentView === 'buyers' 
                ? 'bg-blue-100 text-blue-700' 
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            Buyers
          </button>
          <NotificationBell />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;