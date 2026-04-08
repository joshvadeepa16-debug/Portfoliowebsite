import { Routes, Route } from 'react-router';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { TopNav } from './components/TopNav';

export default function App() {
  return (
    <div className="min-h-screen relative bg-[#030014]">
      {/* TopNav handles its own fixed positioning */}
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
}
