import React from 'react';
import { Star } from 'lucide-react';

const Breads = () => {
  const breads = [
    {
      name: 'Artisan Sourdough',
      description: 'Traditional sourdough with a perfect crust and tangy flavor',
      price: '$6.50',
      image: 'https://images.pexels.com/photos/1387070/pexels-photo-1387070.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      name: 'Multigrain Loaf',
      description: 'Hearty blend of seeds and whole grains for a nutritious choice',
      price: '$7.25',
      image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      name: 'French Baguette',
      description: 'Crispy exterior with soft, airy interior - a French classic',
      price: '$4.00',
      image: 'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      name: 'Whole Wheat Bread',
      description: 'Nutritious whole wheat bread with a soft, tender crumb',
      price: '$5.75',
      image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      name: 'Rye Bread',
      description: 'Dense, flavorful rye bread perfect for sandwiches',
      price: '$6.00',
      image: 'https://images.pexels.com/photos/1387070/pexels-photo-1387070.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      name: 'Focaccia',
      description: 'Italian flatbread with herbs and olive oil',
      price: '$8.50',
      image: 'https://images.pexels.com/photos/4686818/pexels-photo-4686818.jpeg?auto=compress&cs=tinysrgb&w=500'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Fresh Breads
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start your day with our selection of freshly baked breads. From classic sourdough 
            to hearty multigrain, each loaf is baked to perfection using time-honored techniques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {breads.map((bread, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group border border-gray-100">
              <div className="relative overflow-hidden">
                <img 
                  src={bread.image}
                  alt={bread.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center shadow-lg">
                  <Star className="h-4 w-4 text-gold-400 fill-current mr-1" />
                  <span className="text-sm font-semibold">4.9</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-black">
                    {bread.name}
                  </h3>
                  <span className="text-2xl font-bold text-gold-600">
                    {bread.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  {bread.description}
                </p>
                <button className="w-full bg-gold-600 hover:bg-gold-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Breads;