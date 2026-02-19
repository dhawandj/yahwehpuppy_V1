
import React, { useState, useEffect } from 'react';
import { Dog } from '../types';

interface DogCardProps {
  dog: Dog;
  onSelect: (id: string) => void;
}

const DogCard: React.FC<DogCardProps> = ({ dog, onSelect }) => {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg(prev => (prev + 1) % dog.images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [dog.images.length]);

  return (
    <div 
      onClick={() => onSelect(dog.id)}
      className="group cursor-pointer bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-premium transition-all duration-500 flex flex-col h-full ring-1 ring-slate-100 hover:ring-primary/10"
    >
      <div className="relative aspect-square sm:aspect-[4/3] overflow-hidden">
        {dog.images.map((img, idx) => (
          <img 
            key={idx}
            src={img} 
            className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-1000 ${
              idx === currentImg ? 'opacity-100' : 'opacity-0'
            }`}
            alt={dog.name}
          />
        ))}
        
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
          <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl text-[9px] font-black text-primary border border-slate-50 uppercase tracking-[0.2em] shadow-sm">
            {dog.category}
          </div>
          <div className="bg-primary/90 backdrop-blur-md w-8 h-8 rounded-full flex items-center justify-center text-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" />
             </svg>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <div className="p-6 sm:p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-primary transition-colors tracking-tight">{dog.name}</h3>
            <p className="text-slate-500 text-sm font-semibold mt-1">{dog.breed}</p>
          </div>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{dog.age}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          <div className="flex items-center gap-1.5 bg-emerald-50 px-3 py-1.5 rounded-xl">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
            <span className="text-[9px] font-black text-emerald-800 uppercase tracking-wider">Health Cleared</span>
          </div>
          <div className="flex items-center gap-1.5 bg-gold/10 px-3 py-1.5 rounded-xl">
            <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
            <span className="text-[9px] font-black text-gold uppercase tracking-wider">Certified Line</span>
          </div>
        </div>
        
        <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-50">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em]">Ready to Adopt</span>
          </div>
          <div className="px-5 py-2.5 bg-slate-50 rounded-xl text-[10px] font-black text-primary uppercase tracking-widest group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
            View Profile
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogCard;
