import React from 'react';
import { Star } from 'lucide-react';

const Pastries = () => {
  const pastries = [
    {
      name: 'Classic Croissants',
      description: 'Buttery, flaky perfection with a golden exterior and tender, layered interior',
      price: '$3.50',
      image: 'https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      name: 'Pain au Chocolat',
      description: 'Rich dark chocolate wrapped in delicate pastry, a French classic',
      price: '$4.25',
      image: 'https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      name: 'Almond Danish',
      description: 'Sweet almond filling with a hint of vanilla in flaky pastry',
      price: '$4.75',
      image: 'https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      name: 'Cinnamon Rolls',
      description: 'Warm, gooey cinnamon rolls with cream cheese glaze',
      price: '$4.00',
      image: 'https://images.pexels.com/photos/3992204/pexels-photo-3992204.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      name: 'Apple Turnovers',
      description: 'Crispy pastry filled with spiced apple compote',
      price: '$3.75',
      image: 'https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      name: 'Chocolate Éclairs',
      description: 'Choux pastry filled with vanilla cream and topped with chocolate',
      price: '$5.25',
      image: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=500'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Artisan Pastries
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our exquisite collection of handcrafted pastries, made fresh daily using 
            traditional French techniques and the finest ingredients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastries.map((pastry, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group border border-gray-100">
              <div className="relative overflow-hidden">
                <img 
                  src={pastry.image}
                  alt={pastry.name}
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
                    {pastry.name}
                  </h3>
                  <span className="text-2xl font-bold text-gold-600">
                    {pastry.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  {pastry.description}
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

export default Pastries;