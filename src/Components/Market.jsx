import React, { useState } from "react";
import { Search, Filter, Heart, Star, MapPin, ShoppingCart } from 'lucide-react';

// Sample data for marketplace items
const marketplaceItems = [
    {
        id: 1,
        name: "Fresh Tomatoes",
        image: "🍅",
        seller: "Green Valley Farm",
        location: "Springfield",
        price: 2.5,
        unit: "/lb",
        quantity: "120 lbs",
        rating: 4.8,
        description: "Locally grown, juicy and ripe tomatoes picked this morning.",
        harvestDate: "Harvested: May 24",
    },
    {
        id: 2,
        name: "Organic Carrots",
        image: "🥕",
        seller: "Sunrise Acres",
        location: "Riverdale",
        price: 1.8,
        unit: "/lb",
        quantity: "80 lbs",
        rating: 4.6,
        description: "Sweet, crunchy carrots grown without pesticides.",
        harvestDate: "Harvested: May 23",
    },
    {
        id: 3,
        name: "Organic Potatoes",
        seller: "Green Valley Farm",
        price: 2.85,
        unit: "per lb",
        location: "2.3 miles away",
        rating: 4.8,
        image: "🥔",
        category: "Vegetables",
        description: "Fresh, organic heirloom potatoes harvested daily",
        quantity: "500 lbs available",
        harvestDate: "Today"
    },
    {
        id: 4,
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
        id: 5,
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
        id: 6,
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
    },
    {
        id: 7,
        name: "Farm Eggs",
        seller: "Happy Hens Farm",
        price: 3.50,
        unit: "per dozen",
        location: "3.2 miles away",
        rating: 4.9,
        image: "🥚",
        category: "Dairy & Eggs",
        description: "Free-range eggs with rich, golden yolks.",
        quantity: "60 dozen available",
        harvestDate: "Collected: Today"
    },
    {
        id: 8,
        name: "Sweet Strawberries",
        seller: "Berry Patch",
        price: 4.00,
        unit: "per lb",
        location: "5.5 miles away",
        rating: 4.8,
        image: "🍓",
        category: "Fruits",
        description: "Juicy, sweet strawberries picked at peak ripeness.",
        quantity: "100 lbs available",
        harvestDate: "Harvested: Yesterday"
    },
    {
        id: 9,
        name: "Raw Honey",
        seller: "Bee Natural",
        price: 7.00,
        unit: "per jar",
        location: "7.8 miles away",
        rating: 5.0,
        image: "🍯",
        category: "Pantry",
        description: "Unfiltered, raw honey from local wildflowers.",
        quantity: "40 jars available",
        harvestDate: "Harvested: May 20"
    },
    {
        id: 10,
        name: "Fresh Basil",
        seller: "Herb Haven",
        price: 2.00,
        unit: "per bunch",
        location: "2.0 miles away",
        rating: 4.7,
        image: "🌿",
        category: "Herbs",
        description: "Aromatic basil, perfect for salads and pesto.",
        quantity: "150 bunches available",
        harvestDate: "Harvested: Today"
    },
    {
        id: 11,
        name: "Zucchini",
        seller: "Green Valley Farm",
        price: 1.60,
        unit: "per lb",
        location: "Springfield",
        rating: 4.5,
        image: "🥒",
        category: "Vegetables",
        description: "Tender zucchini, great for grilling or baking.",
        quantity: "250 lbs available",
        harvestDate: "Harvested: May 23"
    },
    {
        id: 12,
        name: "Gala Apples",
        seller: "Apple Orchard",
        price: 2.20,
        unit: "per lb",
        location: "9.1 miles away",
        rating: 4.8,
        image: "🍎",
        category: "Fruits",
        description: "Crisp, sweet Gala apples, freshly picked.",
        quantity: "300 lbs available",
        harvestDate: "Harvested: May 22"
    }
];

const MarketplacePage = () => {
  const [cartItems, setCartItems] = useState([]);
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