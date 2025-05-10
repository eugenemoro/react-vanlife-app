import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail';

import './server';
import Layout from './components/Layout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostLayout from './components/HostLayout';
import HostVans from './pages/Host/HostVans';
import HostVansDetail from './pages/Host/HostVanDetail';
import Description from './pages/Host/HostVanDescription';
import Pricing from './pages/Host/HostVanPricing';
import Photos from './pages/Host/HostVanPhotos';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login';
import AuthRequired from './components/AuthRequired';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="login" element={<Login />} />
          <Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVansDetail />}>
                <Route index element={<Description />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="photos" element={<Photos />} />
              </Route>
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
