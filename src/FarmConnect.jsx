import React, { useState, useEffect } from 'react';
import { Bell, TrendingUp, MapPin, Users, Smartphone, Star, ChevronRight, AlertCircle, DollarSign, Calendar, Truck } from 'lucide-react';

const FarmConnect = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [notifications, setNotifications] = useState([]);
  const [userProfile, setUserProfile] = useState({
    name: "Maria Santos",
    location: "Central Valley, CA",
    crops: ["Tomatoes", "Bell Peppers", "Carrots"],
    farmSize: "12 acres"
  });

  // Mock market data with AI predictions
  const [marketData, setMarketData] = useState([
    {
      crop: "Tomatoes",
      currentPrice: 2.85,
      predictedPrice: 3.20,
      trend: "up",
      confidence: 92,
      bestMarkets: ["Downtown Farmers Market", "Organic Co-op", "Restaurant District"],
      demandLevel: "High",
      peakSeason: "Coming Soon",
      aiInsight: "Prices expected to rise 12% due to supply shortage. Sell within 3 days for optimal profit."
    },
    {
      crop: "Bell Peppers",
      currentPrice: 1.95,
      predictedPrice: 1.75,
      trend: "down",
      confidence: 78,
      bestMarkets: ["Westside Market", "Community Co-op"],
      demandLevel: "Medium",
      peakSeason: "Peak Now",
      aiInsight: "Market saturation expected. Consider holding or processing into value-added products."
    },
    {
      crop: "Carrots",
      currentPrice: 1.40,
      predictedPrice: 1.65,
      trend: "up",
      confidence: 89,
      bestMarkets: ["Health Food Store", "School District"],
      demandLevel: "High",
      peakSeason: "Approaching",
      aiInsight: "School lunch programs increasing orders. Lock in contracts now for stable income."
    }
  ]);

  // Simulated real-time notifications
  useEffect(() => {
    const timer = setInterval(() => {
      const newNotifications = [
        "🔥 URGENT: Tomato prices up 8% at Downtown Market - Act now!",
        "📈 AI Prediction: Carrot demand spike expected in 2 days",
        "🤝 New buyer match: RestaurantChain247 wants your bell peppers",
        "⚡ Flash opportunity: Premium organic buyer within 5 miles"
      ];
      
      setNotifications(prev => {
        const randomNotif = newNotifications[Math.floor(Math.random() * newNotifications.length)];
        return [randomNotif, ...prev.slice(0, 2)];
      });
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const PriceCard = ({ crop, data }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{crop}</h3>
          <p className="text-gray-600">Per pound</p>
        </div>
        <div className={`p-2 rounded-full ${data.trend === 'up' ? 'bg-green-100' : 'bg-red-100'}`}>
          <TrendingUp className={`w-5 h-5 ${data.trend === 'up' ? 'text-green-600' : 'text-red-600 rotate-180'}`} />
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Current Price:</span>
          <span className="text-2xl font-bold text-gray-800">${data.currentPrice}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">AI Prediction:</span>
          <span className={`text-xl font-bold ${data.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            ${data.predictedPrice}
          </span>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex justify-between text-sm mb-2">
            <span>Confidence</span>
            <span className="font-semibold">{data.confidence}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${data.confidence}%` }}
            ></div>
          </div>
        </div>
        
        <div className="pt-2 border-t border-gray-100">
          <p className="text-sm text-gray-700 leading-relaxed">{data.aiInsight}</p>
        </div>
        
        <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2">
          Find Buyers <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

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

  const Dashboard = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-6 text-white">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-2xl font-bold">Welcome back, {userProfile.name}!</h1>
            <p className="opacity-90">{userProfile.location} • {userProfile.farmSize}</p>
          </div>
          <NotificationBell />
        </div>
        
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold">$2,840</div>
            <div className="text-sm opacity-90">This Week's Potential</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">+12%</div>
            <div className="text-sm opacity-90">Price Advantage</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">8</div>
            <div className="text-sm opacity-90">Active Buyers</div>
          </div>
        </div>
      </div>

      {/* Urgent Alerts */}
      {notifications.length > 0 && (
        <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="w-5 h-5 text-orange-500" />
            <h3 className="font-semibold text-orange-800">Live Market Alerts</h3>
          </div>
          {notifications.slice(0, 2).map((notif, idx) => (
            <div key={idx} className="text-orange-700 text-sm py-1 animate-fadeIn">
              {notif}
            </div>
          ))}
        </div>
      )}

      {/* Market Data Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {marketData.map((crop, idx) => (
          <PriceCard key={idx} crop={crop.crop} data={crop} />
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Truck className="w-5 h-5 text-blue-500" />
            Nearby Markets
          </h3>
          <div className="space-y-3">
            {["Downtown Farmers Market (2.3 mi)", "Organic Co-op (4.1 mi)", "Restaurant District (6.7 mi)"].map((market, idx) => (
              <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span>{market}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-green-500" />
            Active Buyers
          </h3>
          <div className="space-y-3">
            {[
              { name: "Green Valley Co-op", crops: "Tomatoes, Peppers", rating: 4.8 },
              { name: "Farm Fresh Restaurant", crops: "Mixed Vegetables", rating: 4.9 },
              { name: "Healthy Schools Inc", crops: "Carrots, Tomatoes", rating: 4.7 }
            ].map((buyer, idx) => (
              <div key={idx} className="p-3 bg-gray-50 rounded-lg hover:bg-green-50 cursor-pointer transition-colors">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-semibold">{buyer.name}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm">{buyer.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{buyer.crops}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Navigation */}
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
                className={`px-4 py-2 rounded-lg font-medium transition-all ${currentView === 'dashboard' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-blue-600'}`}
              >
                Dashboard
              </button>
              <button 
                onClick={() => setCurrentView('markets')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${currentView === 'markets' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-blue-600'}`}
              >
                Markets
              </button>
              <button 
                onClick={() => setCurrentView('buyers')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${currentView === 'buyers' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-blue-600'}`}
              >
                Buyers
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        {currentView === 'dashboard' && <Dashboard />}
        
        {currentView === 'markets' && (
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Market Analysis</h2>
            <p className="text-gray-600">Detailed market insights and pricing trends coming soon...</p>
          </div>
        )}
        
        {currentView === 'buyers' && (
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Buyer Network</h2>
            <p className="text-gray-600">Connect with verified buyers in your area...</p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default FarmConnect;