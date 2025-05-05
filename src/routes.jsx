import React from "react"
import { Routes, Route, BrowserRouter, NavLink } from "react-router-dom";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Home from './pages/PageHome'
import About from './pages/PageAbout'
import SeoAgency from "./pages/PageSeoAgency";
import BrandingPage from "./pages/PageBranding";
import Page404 from "./pages/Page404";
import CaseStudies from "./pages/PageCaseStudiesBMA";
import { FadeObserverProvider } from "./context";
import WebDesignMaryland from "./pages/PageWebDesignMaryland";
import OnPageSeoService from "./pages/PageOnPageSeoService";
import OffPageSeoService from "./pages/PageOffPageSeoService";

const QaRoute = () => {
  return (
    <FadeObserverProvider>
    <BrowserRouter>
            <Header />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="about-us" element={<About />}/>
            <Route path="search-engine-optimization" element={<SeoAgency />}/>
            <Route path="/branding-agency-maryland" element={<BrandingPage />}/>
            <Route path="/pool-company-case-study" element={<CaseStudies />}/>
            <Route path="/web-design-maryland" element={<WebDesignMaryland />}/>
            <Route path="/search-engine-optimization/on-page" element={<OnPageSeoService />}/>
            <Route path="/search-engine-optimization/off-page" element={<OffPageSeoService />}/>
            <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
    </BrowserRouter>
    </FadeObserverProvider>
  )
};

export default QaRoute;
