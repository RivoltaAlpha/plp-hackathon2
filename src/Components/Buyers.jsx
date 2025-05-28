const buyers = [
  {
    id: 1,
    name: "FreshMart Grocers",
    location: "Nairobi CBD",
    type: "Retailer",
    demand: "Tomatoes, Carrots",
    rating: 4.9,
    contact: "freshmart@email.com",
    avatar: "🛒",
    description: "Looking for daily supply of fresh tomatoes and carrots for our city stores."
  },
  {
    id: 2,
    name: "GreenLeaf Restaurant",
    location: "Westlands",
    type: "Restaurant",
    demand: "Lettuce, Spinach",
    rating: 4.7,
    contact: "greenleaf@email.com",
    avatar: "🥗",
    description: "Premium restaurant sourcing organic leafy greens from local farmers."
  },
  {
    id: 3,
    name: "School District 12",
    location: "Nakuru",
    type: "Institution",
    demand: "Carrots, Maize",
    rating: 4.8,
    contact: "procurement@school12.ke",
    avatar: "🏫",
    description: "Bulk buyer for school lunch programs. Long-term contracts available."
  },
  {
    id: 4,
    name: "Organic Co-op",
    location: "Eldoret",
    type: "Cooperative",
    demand: "Bell Peppers, Kale",
    rating: 4.6,
    contact: "coop@organiceldoret.ke",
    avatar: "🌱",
    description: "Community co-op connecting with small-scale farmers for organic produce."
  },
  {
    id: 5,
    name: "City Farmers Market",
    location: "Nairobi",
    type: "Market",
    demand: "Various",
    rating: 4.5,
    contact: "info@cityfarmersmarket.ke",
    avatar: "🏬",
    description: "Open-air market connecting local farmers with urban consumers."
  },
    {
    id: 6,
    name: "Healthy Harvest",
    location: "Mombasa",
    type: "Retailer",
    demand: "Spinach, Kale",
    rating: 4.8,
    contact: "healthyharvest@email.com",
    avatar: "🥬",
    description: "Retailer focused on sourcing fresh spinach and kale from local farmers."
  }
];

export default function Buyers() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Buyer Network</h2>
      <p className="text-gray-600 mb-6">Connect with verified buyers in your area and grow your business.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {buyers.map(buyer => (
          <div
            key={buyer.id}
            className="bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200 rounded-2xl p-6 shadow hover:shadow-emerald-100 transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="text-3xl mr-3">{buyer.avatar}</div>
              <div>
                <div className="font-bold text-lg text-gray-800">{buyer.name}</div>
                <div className="text-sm text-emerald-600">
                  {buyer.type} • {buyer.location}
                </div>
              </div>
            </div>
            <div className="mb-2 text-gray-700">{buyer.description}</div>
            <div className="mb-2 text-gray-500 text-sm">
              Looking for:{" "}
              <span className="font-medium text-gray-800">{buyer.demand}</span>
            </div>
            <div className="flex items-center mb-2">
              <span className="text-yellow-400 mr-1">★</span>
              <span className="text-gray-700 font-semibold">{buyer.rating}</span>
            </div>
            <a
              href={`mailto:${buyer.contact}`}
              className="inline-block mt-2 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-emerald-600 transition"
            >
              Contact Buyer
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}