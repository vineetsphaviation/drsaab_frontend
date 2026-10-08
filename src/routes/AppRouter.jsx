import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  AboutUs,
  ContactUs,
  Franchise,
  HomePage,
  HowItWorks,
  OurServices,
  PanchayatModal,
  Support,
  UrbanPartner,
} from "../pages";
import AppLayout from "../layouts/AppLayout";

const AppRouter = () => {
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            <Routes>
              <Route element={<AppLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/our-services" element={<OurServices />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/panchayat-modal" element={<PanchayatModal />} />
                <Route path="/urban-partner" element={<UrbanPartner />} />
                <Route path="/franchise" element={<Franchise />} />
                <Route path="/support" element={<Support />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
              </Route>

              <Route path="*" element={<p>Not Found</p>} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
};

export default AppRouter;
