import { lazy, Suspense } from 'react';
import {
  // AboutUS,
  // Amenities,
  // FaqBlocks,
  Header,
  // Team,
  Footer,
  // ImagesBlock,
  // ContactSection,
} from './components';

function App() {
  const LazyAboutUs = lazy(() => import('./components/section/about-us'));
  const LazyAmenities = lazy(() => import('./components/section/amenities'));
  const LazyTeam = lazy(() => import('./components/section/team'));
  const LazyFaqBlocks = lazy(() => import('./components/section/faq-blocks'));
  const LazyImagesBlock = lazy(() => import('./components/section/images-block'));
  const LazyContactSection = lazy(() => import('./components/section/contact-section'));

  return (
    <div className="overflow-hidden">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <LazyAboutUs />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyAmenities />
        <LazyTeam />
        <LazyFaqBlocks />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyImagesBlock />
        <LazyContactSection />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
