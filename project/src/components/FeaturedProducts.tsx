import React from 'react';

const featuredProducts = [
  {
    id: '1',
    name: 'Premium All-Season Tires',
    price: 120,
    imageUrl: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&q=80&w=800',
    category: 'Tires'
  },
  {
    id: '2',
    name: 'LED Headlight Kit',
    price: 80,
    imageUrl: 'https://images.unsplash.com/photo-1615241721719-cffa5802f256?auto=format&fit=crop&q=80&w=800',
    category: 'Lights'
  },
  {
    id: '3',
    name: 'Synthetic Engine Oil',
    price: 50,
    imageUrl: 'https://images.unsplash.com/photo-1635764700453-842b57eca626?auto=format&fit=crop&q=80&w=800',
    category: 'Engine Oil'
  }
];

export function FeaturedProducts() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="text-gray-600">{product.category}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}