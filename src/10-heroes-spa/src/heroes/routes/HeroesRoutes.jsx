import { Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { MarvelPages, DcPage, Search, Hero } from "../pages";

const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/marvel" element={<MarvelPages />} />
          <Route path="/dc" element={<DcPage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/" element={<MarvelPages />} />
        </Routes>
      </div>
    </>
  );
};

export default HeroesRoutes;
