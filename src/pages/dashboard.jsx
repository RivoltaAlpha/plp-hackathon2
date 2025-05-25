import React from 'react';
import { TrendingUp, MapPin, Users, Truck, Star, ChevronRight, AlertCircle } from 'lucide-react';
import PriceCard from '../Components/PriceCard';

const Dashboard = ({ userProfile, marketData, notifications }) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-6 text-white">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-2xl font-bold">Welcome back, {userProfile.name}!</h1>
            <p className="opacity-90">{userProfile.location} • {userProfile.farmSize}</p>
          </div>
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
                  { name: "Farm Fresh Restaurant", crops: "Mixed Vegetables", rating: 4.9 }
                ].map((buyer, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-green-50 cursor-pointer transition-colors">
                    <div>
                      <div className="font-semibold">{buyer.name}</div>
                      <div className="text-xs text-gray-500">{buyer.crops}</div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm font-medium">{buyer.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

            )}

export default Dashboard;