import { AboutUS, Amenities, FaqBlocks, Header, Team } from './components';
import { ImagesBlock } from './components/images-block';

function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <AboutUS />
      <Amenities />
      <Team />
      <FaqBlocks />
      <ImagesBlock />
    </div>
  );
}

export default App;
