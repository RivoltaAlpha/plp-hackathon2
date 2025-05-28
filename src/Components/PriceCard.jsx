import { TrendingUp, ChevronRight } from 'lucide-react'; 

  const PriceCard = ({ crop, data }) => (
    <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-100">{crop}</h3>
          <p className="text-gray-100">Per pound</p>
        </div>
        <div className={`p-2 rounded-full ${data.trend === 'up' ? 'bg-green-100' : 'bg-red-100'}`}>
          <TrendingUp className={`w-5 h-5 ${data.trend === 'up' ? 'text-green-600' : 'text-red-600 rotate-180'}`} />
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-100">Current Price:</span>
          <span className="text-2xl font-bold text-gray-100">${data.currentPrice}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-100">AI Prediction:</span>
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
          <p className="text-sm text-gray-100 leading-relaxed">{data.aiInsight}</p>
        </div>
        
        <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2">
          Find Buyers <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  export default PriceCard;