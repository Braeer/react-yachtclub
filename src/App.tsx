import {
  AboutUS,
  Amenities,
  FaqBlocks,
  Header,
  Team,
  Footer,
  ImagesBlock,
  ContactSection,
} from './components';

function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <AboutUS />
      <Amenities />
      <Team />
      <FaqBlocks />
      <ImagesBlock />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
