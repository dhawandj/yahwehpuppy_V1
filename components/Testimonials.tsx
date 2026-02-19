
import React from 'react';
import { TESTIMONIALS } from '../mockData';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light/50 backdrop-blur-sm border border-primary-light text-primary text-xs font-bold uppercase tracking-widest mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Happy <span className="text-primary">Families</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg sm:text-xl font-medium leading-relaxed">
            There's nothing quite like the bond between a family and their new furry member. Here are some of our favorite stories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="group bg-white/60 backdrop-blur-sm rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden border border-white/50 shadow-xl shadow-slate-200/20 hover:shadow-2xl hover:shadow-primary-shadow transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              {/* Large Story Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={testimonial.storyImage} 
                  alt={`Happy family with ${testimonial.name}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                
                {/* Location Badge */}
                <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/30 text-white text-[10px] font-bold uppercase tracking-wider">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {testimonial.location}
                </div>
              </div>
              
              <div className="p-8 sm:p-10 flex flex-col flex-grow relative">
                <div className="flex flex-col h-full">
                  <div className="flex text-primary mb-5 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-4 h-4 ${i < testimonial.rating ? 'fill-current' : 'fill-slate-200'}`} 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <blockquote className="text-slate-700 font-medium italic mb-8 leading-relaxed text-base sm:text-lg flex-grow">
                    "{testimonial.comment}"
                  </blockquote>

                  <div className="pt-6 border-t border-slate-100/50 flex items-center justify-between">
                    <div>
                      <h4 className="font-black text-slate-900 text-lg">{testimonial.name}</h4>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-0.5">Verified Happy Owner</p>
                    </div>
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.98262C8.87805 16 7.98262 16.8954 7.98262 18V21M18 10C18 13.3137 15.3137 16 12 16C8.68629 16 6 13.3137 6 10C6 6.68629 8.68629 4 12 4C15.3137 4 18 6.68629 18 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
           <button 
            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-primary transition-all shadow-xl active:scale-95 group"
           >
             Share Your Story
             <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
             </svg>
           </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
