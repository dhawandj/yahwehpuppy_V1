
import React from 'react';
import { ViewType } from '../App';

interface ServiceFeaturesProps {
  onNavigate: (view: ViewType) => void;
}

const ServiceFeatures: React.FC<ServiceFeaturesProps> = ({ onNavigate }) => {
  const moreFeatures = [
    {
      title: "Health First",
      description: "15-point clinical screening by our elite veterinary panel.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.040L3 6.255v4.945c0 6.632 4.192 12.27 10 14.12 5.808-1.85 10-7.488 10-14.12V6.255l-.382-.016z" />
        </svg>
      ),
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      title: "KCI Lineage",
      description: "Authentic registration papers provided for every heritage pup.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    },
    {
      title: "Secure Transit",
      description: "Climate-controlled delivery to Bangalore, Hyderabad & Chennai.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Ethical Source",
      description: "Strict audit of partner breeders for ethical living conditions.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-1.07 0-1.935-.87-1.935-1.935V10.5c0-1.07.87-1.935 1.935-1.935h2.152a2 2 0 001.789-1.106l.5-1A2 2 0 0115.483 5H18.5" />
        </svg>
      ),
      color: "text-gold",
      bg: "bg-gold/10"
    }
  ];

  return (
    <div className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative mb-24">
          <div className="bg-slate-900 rounded-[2.5rem] sm:rounded-[4rem] p-8 sm:p-16 lg:p-24 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative z-10 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-6 border border-primary/20">
                  Legacy Standards
                </div>
                <h2 className="text-3xl sm:text-5xl font-black text-white mb-8 tracking-tight leading-tight">
                  Divine Care For <br />
                  <span className="text-gold">Divine Companions</span>
                </h2>
                <p className="text-slate-400 text-base sm:text-lg font-medium leading-relaxed mb-10 max-w-lg">
                  At Yahweh, we aren't just breeders; we are the guardians of a sacred bond. Every puppy is a life to be cherished and placed in a home where they can flourish.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => onNavigate('about')}
                    className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-gold transition-all shadow-xl active:scale-95 text-center outline-none"
                  >
                    Our Mission
                  </button>
                </div>
              </div>
              
              <div className="relative group lg:block hidden">
                <div className="relative bg-white/5 backdrop-blur-md p-4 rounded-[3rem] border border-white/10 transform rotate-2 group-hover:rotate-0 transition-transform duration-700">
                  <img 
                    src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=1000" 
                    alt="Happy Puppy" 
                    className="rounded-[2rem] w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute -bottom-8 -left-8 bg-gold p-8 rounded-[2.5rem] shadow-2xl">
                    <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-2">100% Satisfaction</p>
                    <p className="text-xl font-black text-slate-900">3k+ Happy <br /> Families</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {moreFeatures.map((feature, idx) => (
            <div 
              key={idx} 
              className="group bg-white p-8 rounded-[2rem] border border-slate-100 hover:shadow-premium transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className={`${feature.bg} ${feature.color} w-16 h-16 rounded-[1.5rem] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform shadow-sm`}>
                {feature.icon}
              </div>
              <h4 className="text-lg font-black text-slate-900 mb-3 tracking-tight">{feature.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ServiceFeatures;
