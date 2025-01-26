import React from 'react';
import { ShoppingCart, User, Menu } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">AutoCustom</span>
          </div>
          
          <div className="hidden sm:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600">Spare Parts</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Customize</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-blue-600">
              <ShoppingCart className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-600 hover:text-blue-600">
              <User className="h-6 w-6" />
            </button>
            <button className="sm:hidden p-2 text-gray-600">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}