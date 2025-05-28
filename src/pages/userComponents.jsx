import { useState, useEffect } from 'react';
import LoginPage from '../Components/Login';
import RegisterPage from '../Components/Register';
import Dashboard from './dashboard';
import MarketplacePage from '../Components/Market';
import Navigation from '../Components/Navigation';

const UserDashboard = () => {
  const [currentView, setCurrentView] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [cartItems, setCartItems] = useState([]);
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
      image: "https://img.freepik.com/premium-photo/tomato-vegetables-isolated-white-fresh-tomato-fruit-clipping-path-tomato-macro-photo_299651-600.jpg?uid=R154664640&semt=ais_hybrid&w=740",
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
    },
    {
      crop: "Lettuce",
      currentPrice: 1.25,
      predictedPrice: 1.10,
      trend: "down",
      confidence: 85,
      bestMarkets: ["Local Grocery", "Farmers Market"],
      demandLevel: "Low",
      peakSeason: "Past",
      aiInsight: "Oversupply in local markets. Consider diversifying crops or processing options."
    },
    {
      crop: "Spinach",
      currentPrice: 2.10,
      predictedPrice: 2.30,
      trend: "up",
      confidence: 90,
      bestMarkets: ["Organic Co-op", "Health Food Store"],
      demandLevel: "High",
      peakSeason: "Coming Soon",
      aiInsight: "Increased demand for organic spinach expected. Focus on quality and certifications."
    },
    {
      crop: "Kale",
      currentPrice: 1.80,
      predictedPrice: 1.95,
      trend: "up",
      confidence: 88,
      bestMarkets: ["Downtown Farmers Market", "Health Food Store"],
      demandLevel: "Medium",
      peakSeason: "Approaching",
      aiInsight: "Kale smoothies trending. Consider value-added products like kale chips."
    }
  ]);

  // Mock marketplace products
  const [marketplaceItems, setMarketplaceItems] = useState([
    {
      id: 1,
      name: "Organic Tomatoes",
      seller: "Green Valley Farm",
      price: 2.85,
      unit: "per lb",
      location: "2.3 miles away",
      rating: 4.8,
      image: "🍅",
      category: "Vegetables",
      description: "Fresh, organic heirloom tomatoes harvested daily",
      quantity: "500 lbs available",
      harvestDate: "Today"
    },
    {
      id: 2,
      name: "Bell Peppers Mix",
      seller: "Sunrise Organics",
      price: 1.95,
      unit: "per lb",
      location: "4.1 miles away",
      rating: 4.9,
      image: "🫑",
      category: "Vegetables",
      description: "Colorful mix of red, yellow, and green bell peppers",
      quantity: "300 lbs available",
      harvestDate: "Yesterday"
    },
    {
      id: 3,
      name: "Baby Carrots",
      seller: "Mountain View Farm",
      price: 1.40,
      unit: "per lb",
      location: "6.7 miles away",
      rating: 4.7,
      image: "🥕",
      category: "Vegetables",
      description: "Sweet baby carrots, perfect for retail or restaurants",
      quantity: "800 lbs available",
      harvestDate: "2 days ago"
    },
    {
      id: 4,
      name: "Fresh Lettuce",
      seller: "Organic Fields Co",
      price: 1.25,
      unit: "per head",
      location: "1.8 miles away",
      rating: 4.6,
      image: "🥬",
      category: "Leafy Greens",
      description: "Crisp romaine and butter lettuce varieties",
      quantity: "200 heads available",
      harvestDate: "Today"
    }
  ]);

  // Simulated real-time notifications
  useEffect(() => {
    if (isLoggedIn) {
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
    }
  }, [isLoggedIn]);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setCurrentView('dashboard');
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setCurrentView('dashboard');
  };

  const addToCart = (item) => {
    setCartItems(prev => [...prev, item]);
  };

  // Show auth pages if not logged in
  if (!isLoggedIn) {
    if (currentView === 'login') {
      return (
        <LoginPage 
          onLogin={handleLogin}
          onSwitchToRegister={() => setCurrentView('register')}
        />
      );
    } else if (currentView === 'register') {
      return (
        <RegisterPage 
          onRegister={handleRegister}
          onSwitchToLogin={() => setCurrentView('login')}
        />
      );
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="max-w-7xl mx-auto">
        <Navigation 
          currentView={currentView}
          setCurrentView={setCurrentView}
          notifications={notifications}
        />

        {/* Main Content */}
        {currentView === 'dashboard' && (
          <Dashboard 
            userProfile={userProfile}
            marketData={marketData}
            notifications={notifications}
          />
        )}
        
        {currentView === 'marketplace' && (
          <MarketplacePage 
            marketplaceItems={marketplaceItems}
            cartItems={cartItems}
            addToCart={addToCart}
          />
        )}
        
        {currentView === 'buyers' && (
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Buyer Network</h2>
            <p className="text-gray-600">Connect with verified buyers in your area...</p>
          </div>
        )}
      </div>

    <style>{`
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

export default UserDashboard;