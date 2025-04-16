import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CompanyLogo from "./components/CompanyLogo";
import PurposeSection from "./components/PurposeSection";
import FeaturesSection from "./components/FeaturesSection";
import AboutUsSections from "./components/AboutUsSections";

function App() {
  const [page, setPage] = useState("home");

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
      <div className="overflow-hidden">
        <Navbar setPage={setPage} />
        {page === "home" && (
          <>
            <Hero />
            <CompanyLogo />
            <PurposeSection />
            <FeaturesSection />
          </>
        )}
        {page === "about" && <AboutUsSections />}
      </div>
    </main>
  );
}

export default App;
