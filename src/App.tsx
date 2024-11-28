import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ServiceAreas from './components/ServiceAreas';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import WasherDryerRepair from './pages/services/WasherDryerRepair';
import RefrigeratorRepair from './pages/services/RefrigeratorRepair';
import DishwasherRepair from './pages/services/DishwasherRepair';
import MicrowaveRepair from './pages/services/MicrowaveRepair';
import VikingService from './pages/services/VikingService';
import CommercialRepair from './pages/services/CommercialRepair';
import SubZeroService from './pages/services/SubZeroService';
import FurnaceRepair from './pages/services/FurnaceRepair';
import ApplianceCare from './pages/blog/ApplianceCare';
import EnergySaving from './pages/blog/EnergySaving';
import RepairVsReplace from './pages/blog/RepairVsReplace';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/washer-dryer-repair" element={<WasherDryerRepair />} />
            <Route path="/services/refrigerator-repair" element={<RefrigeratorRepair />} />
            <Route path="/services/dishwasher-repair" element={<DishwasherRepair />} />
            <Route path="/services/microwave-repair" element={<MicrowaveRepair />} />
            <Route path="/services/viking-service" element={<VikingService />} />
            <Route path="/services/commercial-repair" element={<CommercialRepair />} />
            <Route path="/services/subzero-service" element={<SubZeroService />} />
            <Route path="/services/furnace-repair" element={<FurnaceRepair />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/appliance-care" element={<ApplianceCare />} />
            <Route path="/blog/energy-saving" element={<EnergySaving />} />
            <Route path="/blog/repair-vs-replace" element={<RepairVsReplace />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <ServiceAreas />
        <Footer />
      </div>
    </Router>
  );
}

export default App;