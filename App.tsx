
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DogCard from './components/DogCard';
import Testimonials from './components/Testimonials';
import TrustBanner from './components/TrustBanner';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import ThemeToggle from './components/ThemeToggle';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import ServiceFeatures from './components/ServiceFeatures';
import BreedRecommender from './components/BreedRecommender';
import DogDetails from './components/DogDetails';
import AllPuppies from './components/AllPuppies';
import About from './components/About';
import BreedCategories from './components/BreedCategories';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import HomeBlogSection from './components/HomeBlogSection';
import FAQ from './components/FAQ';
import MarketIntelligence from './components/MarketIntelligence';
import { DOGS } from './mockData';

export type ViewType = 'home' | 'all-puppies' | 'about' | 'matchmaker' | 'details' | 'privacy' | 'terms' | 'blog' | 'blog-detail';

const HomePage: React.FC<{ 
  onNavigate: (view: ViewType) => void, 
  onSelectDog: (id: string) => void,
  onSelectBlog: (id: string) => void
}> = ({ onNavigate, onSelectDog, onSelectBlog }) => (
  <div className="space-y-2 sm:space-y-6 pb-12 sm:pb-20">
    <Hero onNavigate={onNavigate} />
    
    <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
      <BreedCategories onNavigate={onNavigate} />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-3">
            Handpicked Selection
          </div>
          <h2 className="text-2xl sm:text-5xl font-black text-slate-900 tracking-tight">Featured Pups</h2>
          <p className="text-slate-500 text-sm sm:text-base mt-1 font-medium">Exclusively raised with elite standards.</p>
        </div>
        <button 
          onClick={() => onNavigate('all-puppies')}
          className="hidden sm:flex group items-center gap-3 text-sm font-bold text-primary bg-white px-6 py-4 rounded-[1.5rem] border border-slate-100 hover:border-primary/20 transition-all shadow-sm"
        >
          View All
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
        {DOGS.slice(0, 3).map(dog => (
          <DogCard key={dog.id} dog={dog} onSelect={onSelectDog} />
        ))}
      </div>
      
      <div className="sm:hidden mt-8 text-center">
        <button 
          onClick={() => onNavigate('all-puppies')}
          className="inline-flex items-center gap-2 text-xs font-black text-primary uppercase tracking-widest bg-white px-8 py-4 rounded-2xl border border-slate-100 shadow-sm"
        >
          View All Collection →
        </button>
      </div>
    </div>

    <ServiceFeatures onNavigate={onNavigate} />
    <TrustBanner />
    <Testimonials />
    <HomeBlogSection onNavigate={onNavigate} onSelectBlog={onSelectBlog} />
    <FAQ />
    <MarketIntelligence />
  </div>
);

const App: React.FC = () => {
  const [view, setView] = useState<ViewType>('home');
  const [selectedDogId, setSelectedDogId] = useState<string | null>(null);
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view, selectedDogId, selectedBlogId]);

  const handleSelectDog = (id: string) => {
    setSelectedDogId(id);
    setView('details');
  };

  const handleSelectBlog = (id: string) => {
    setSelectedBlogId(id);
    setView('blog-detail');
  };

  const renderView = () => {
    switch (view) {
      case 'home':
        return <HomePage onNavigate={setView} onSelectDog={handleSelectDog} onSelectBlog={handleSelectBlog} />;
      case 'all-puppies':
        return <AllPuppies onSelectDog={handleSelectDog} />;
      case 'about':
        return <About />;
      case 'matchmaker':
        return <BreedRecommender />;
      case 'blog':
        return <Blog onSelectBlog={handleSelectBlog} />;
      case 'blog-detail':
        return selectedBlogId ? <BlogDetail blogId={selectedBlogId} onBack={() => setView('blog')} /> : <Blog onSelectBlog={handleSelectBlog} />;
      case 'details':
        return selectedDogId ? <DogDetails dogId={selectedDogId} onSelectDog={handleSelectDog} onBack={() => setView('all-puppies')} /> : <HomePage onNavigate={setView} onSelectDog={handleSelectDog} onSelectBlog={handleSelectBlog} />;
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <TermsOfService />;
      default:
        return <HomePage onNavigate={setView} onSelectDog={handleSelectDog} onSelectBlog={handleSelectBlog} />;
    }
  };

  return (
    <div className="dynamic-bg min-h-screen flex flex-col selection:bg-primary/10 selection:text-primary">
      <Navbar onNavigate={setView} currentView={view} />
      <main className="flex-grow">
        {renderView()}
      </main>
      <Footer onNavigate={setView} />
      <FloatingActions />
      <ThemeToggle />
    </div>
  );
};

export default App;
