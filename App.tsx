import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Research } from './components/Research';
import { Publications } from './components/Publications';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-slate-800 font-sans bg-white">
      {/* Main Layout Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Sidebar - Profile Information */}
          <div className="lg:col-span-3">
             <Hero />
          </div>

          {/* Right Content Area - Bio, News, Research, Publications */}
          <div className="lg:col-span-9 space-y-16">
            <About />
            
            <div className="border-t border-slate-100 pt-10">
               <Research />
            </div>
            
            <div className="border-t border-slate-100 pt-10">
               <Publications />
            </div>
          </div>

        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default App;