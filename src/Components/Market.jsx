import  { useState } from "react";
import { Search, Filter, Heart, Star, MapPin, ShoppingCart } from 'lucide-react';
import { useEffect } from "react";


const MarketplacePage = () => {
  const [cartItems, setCartItems] = useState([]);
   const [marketplaceItems, setMarketplaceItems] = useState([]);

  useEffect(() => {
    fetch('/marketplaceItems.json')
      .then((res) => res.json())
      .then((data) => setMarketplaceItems(data))
      .catch((err) => {
        console.error("Failed to fetch marketplace items:", err);
        setMarketplaceItems([]); 
      });
  }, []);
  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  return (
    <div className="space-y-6">
      {/* Marketplace Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Local Marketplace</h1>
        <p className="opacity-90">Discover fresh produce from nearby farms</p>
        
        <div className="mt-4 flex gap-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
            <div className="text-lg font-bold">47</div>
            <div className="text-sm opacity-90">Active Listings</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
            <div className="text-lg font-bold">23</div>
            <div className="text-sm opacity-90">Local Farms</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
            <div className="text-lg font-bold">{cartItems.length}</div>
            <div className="text-sm opacity-90">In Cart</div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for produce, farms, or locations..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <button className="bg-orange-100 text-orange-600 px-6 py-3 rounded-lg font-medium hover:bg-orange-200 transition-colors flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Filters
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {marketplaceItems.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            <div className="relative">
              <div className="h-48 bg-gradient-to-br from-green-100 to-orange-100 flex items-center justify-center text-6xl">
                {item.image}
              </div>
              <button
                className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-lg hover:bg-red-50 transition-colors"
                aria-label="Add to favorites"
                title="Add to favorites"
              >
                <Heart className="w-5 h-5 text-gray-400 hover:text-red-500" />
              </button>
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 text-xs font-medium">
                {item.harvestDate}
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{item.rating}</span>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-2">{item.seller}</p>
              <p className="text-gray-500 text-xs mb-3 flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {item.location}
              </p>
              
              <p className="text-gray-700 text-sm mb-3 line-clamp-2">{item.description}</p>
              
              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="text-2xl font-bold text-gray-800">${item.price}</span>
                  <span className="text-gray-500 text-sm ml-1">{item.unit}</span>
                </div>
                <span className="text-sm text-green-600 font-medium">{item.quantity}</span>
              </div>
              
              <button
                onClick={() => addToCart(item)}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <button className="bg-white text-gray-700 px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
          Load More Products
        </button>
      </div>
    </div>
  )};

  export default MarketplacePage;