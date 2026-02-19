
import React, { useState, useEffect } from 'react';
import { DOGS } from '../mockData';
import { Dog } from '../types';
import TrustBanner from './TrustBanner';

interface DogDetailsProps {
  dogId: string;
  onBack: () => void;
  onSelectDog: (id: string) => void;
}

const DogDetails: React.FC<DogDetailsProps> = ({ dogId, onBack, onSelectDog }) => {
  const [dog, setDog] = useState<Dog | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const phoneNumber = "918310558173";

  useEffect(() => {
    const found = DOGS.find(d => d.id === dogId);
    if (found) {
      setDog(found);
      setActiveImage(0);
      setActiveFaq(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [dogId]);

  if (!dog) return <div className="py-40 text-center font-bold">Dog not found.</div>;

  const otherBreeds = DOGS.filter(d => d.id !== dogId);

  return (
    <div className="animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <button 
          onClick={onBack}
          className="mb-8  inline-flex items-center gap-2 text-slate-500 font-bold hover:text-primary transition-colors text-sm outline-none"
        >
          ← Back to All Puppies
        </button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="space-y-6">
            <div className="relative group overflow-hidden rounded-[2.5rem] bg-white shadow-premium border border-slate-50">
               <img 
                src={dog.images[activeImage]} 
                alt={dog.name} 
                className="w-full h-[380px] sm:h-[480px] object-cover"
              />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl text-[10px] font-black text-primary border border-slate-100 uppercase tracking-[0.2em]">
                {dog.category}
              </div>
            </div>
            
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
               {dog.images.map((img, idx) => (
                 <button 
                  key={idx} 
                  onClick={() => setActiveImage(idx)}
                  className={`shrink-0 w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all outline-none ${
                    activeImage === idx ? 'border-primary scale-90 shadow-md' : 'border-white opacity-60 hover:opacity-100'
                  }`}
                 >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                 </button>
               ))}
            </div>
          </div>
          
          <div className="flex flex-col text-left">
            <div className="mb-8">
              <h1 className="text-5xl font-extrabold text-slate-900 mb-2">{dog.name}</h1>
              <p className="text-2xl text-primary font-bold">{dog.breed}</p>
              <div className="mt-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="text-xs text-emerald-600 font-black uppercase tracking-widest">Available for Divine Placement</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { label: 'Age', val: dog.age },
                { label: 'Gender', val: dog.gender },
                { label: 'Weight', val: dog.weight },
                { label: 'Life Span', val: dog.lifeSpan }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm">
                  <p className="text-[10px] text-slate-400 font-black uppercase mb-1 tracking-widest">{stat.label}</p>
                  <p className="text-lg font-bold text-slate-900">{stat.val}</p>
                </div>
              ))}
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-extrabold text-slate-900 mb-4">About {dog.name}</h3>
              <p className="text-slate-600 text-lg leading-relaxed">{dog.description}</p>
            </div>

            <div className="space-y-4">
               <a 
                href={`https://wa.me/${phoneNumber}?text=Inquiring about ${dog.name} from Yahweh Farm.`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 py-5 bg-[#25D366] text-white rounded-2xl font-black shadow-premium hover:-translate-y-1 transition-all"
               >
                 Secure via WhatsApp
               </a>
               <a 
                href={`tel:+${phoneNumber}`}
                className="flex items-center justify-center gap-3 py-5 bg-primary text-white rounded-2xl font-black shadow-premium hover:-translate-y-1 transition-all"
               >
                 Direct Line Callback
               </a>
            </div>
          </div>
        </div>

        {/* Breed FAQ Section - SEO POWERED */}
        {dog.faqs && dog.faqs.length > 0 && (
          <div className="mb-24 pt-20 border-t border-slate-100">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold text-[10px] font-black uppercase tracking-widest mb-4">
                Breed Intelligence
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">Everything about <span className="text-primary">{dog.breed}s</span></h2>
              
              <div className="space-y-4">
                {dog.faqs.map((faq, idx) => (
                  <div 
                    key={idx} 
                    className={`border rounded-2xl transition-all duration-300 ${
                      activeFaq === idx ? 'border-primary bg-primary/5' : 'border-slate-100 bg-white hover:border-slate-200'
                    }`}
                  >
                    <button 
                      onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                      className="w-full text-left p-6 flex justify-between items-center outline-none"
                    >
                      <span className={`text-sm font-bold ${activeFaq === idx ? 'text-primary' : 'text-slate-900'}`}>{faq.question}</span>
                      <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180 text-primary' : 'text-slate-400'}`} 
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {activeFaq === idx && (
                      <div className="px-6 pb-6 text-sm text-slate-600 font-medium leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* See Other Breeds Section */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-100 overflow-hidden mb-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[9px] font-black uppercase tracking-widest mb-3">
                More Opportunities
              </div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">See Other Breeds</h2>
            </div>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-10 scrollbar-hide -mx-6 px-6 lg:-mx-8 lg:px-8 snap-x snap-mandatory">
            {otherBreeds.map((otherDog) => (
              <div 
                key={otherDog.id}
                onClick={() => onSelectDog(otherDog.id)}
                className="shrink-0 w-[280px] sm:w-[320px] group cursor-pointer bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-premium transition-all duration-500 snap-start"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={otherDog.images[0]} 
                    alt={otherDog.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 bg-white/95 backdrop-blur-md rounded-lg text-[8px] font-black text-primary uppercase tracking-widest shadow-sm">
                      {otherDog.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-primary transition-colors mb-1">{otherDog.name}</h3>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{otherDog.breed}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[10px] font-black text-slate-400">{otherDog.age}</span>
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest group-hover:translate-x-1 transition-transform">View Profile →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TrustBanner />
    </div>
  );
};

export default DogDetails;
