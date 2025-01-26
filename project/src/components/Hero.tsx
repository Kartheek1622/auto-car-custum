import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-50"
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1920"
          alt="Luxury car background"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Customize Your Dream Car
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Transform your vehicle with premium parts and professional customization options.
          Choose from our wide selection of high-quality components and create your perfect ride.
        </p>
        <div className="mt-10 flex space-x-4">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Start Customizing
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
          >
            Browse Parts
          </a>
        </div>
      </div>
    </div>
  );
}