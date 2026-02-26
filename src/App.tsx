import { Hero } from "./components/Hero";
import { ExplorePrograms } from "./components/ExplorePrograms";
import { HowItWorks } from "./components/HowItWorks";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { TermsOfService } from "./components/TermsOfService";
import { useEffect, useState } from "react";
import favicon from "figma:asset/050a3d48aa5085ca6b5d7a6aa51168fa2b6997a2.png";

export default function App() {
  const [view, setView] = useState<'home' | 'privacy' | 'terms' | 'robots'>('home');

  useEffect(() => {
    // Handle initial path
    const checkPath = () => {
      if (window.location.pathname === '/privacy-policy') {
        setView('privacy');
      } else if (window.location.pathname === '/terms-of-service') {
        setView('terms');
      } else if (window.location.pathname === '/robots.txt') {
        setView('robots');
      } else {
        setView('home');
      }
    };

    checkPath();

    // Handle browser back/forward buttons
    const handlePopState = () => {
      checkPath();
    };

    window.addEventListener('popstate', handlePopState);

    document.title = "Instacoach – Baseball training programs built by real athletes";
    
    // Update favicon
    let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = favicon;

    // Update meta tags for social sharing
    const updateMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[property="${name}"]`) || document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(name.startsWith('og:') ? 'property' : 'name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMeta('og:title', 'Instacoach – Baseball training programs built by real athletes');
    updateMeta('twitter:title', 'Instacoach – Baseball training programs built by real athletes');
    updateMeta('description', 'The most effective way to train. Follow expert-built programs, complete short drills, and build real skills with guidance from college & pro athletes.');
    updateMeta('og:description', 'The most effective way to train. Follow expert-built programs, complete short drills, and build real skills with guidance from college & pro athletes.');

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (newView: 'home' | 'privacy' | 'terms') => {
    let path = '/';
    if (newView === 'privacy') path = '/privacy-policy';
    if (newView === 'terms') path = '/terms-of-service';
    
    window.history.pushState({}, '', path);
    setView(newView);
    window.scrollTo(0, 0);
  };

  if (view === 'robots') {
    return (
      <pre style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap', fontFamily: 'monospace', padding: '20px' }}>
        User-agent: *{'\n'}
        Allow: /
      </pre>
    );
  }

  if (view === 'privacy') {
    return <PrivacyPolicy onBack={() => navigateTo('home')} />;
  }

  if (view === 'terms') {
    return <TermsOfService onBack={() => navigateTo('home')} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ExplorePrograms />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Footer 
        onPrivacyClick={() => navigateTo('privacy')} 
        onTermsClick={() => navigateTo('terms')} 
      />
    </div>
  );
}