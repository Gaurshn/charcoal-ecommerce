import Hero from "../section/Hero";
import Category from "../section/Category";
import Banner from "../section/Banner";
import Review from "../section/Review";
import TorchCategory from "../section/TorchCategory";

import { Outlet } from "react-router";

function HomePage() {
  return (
    <>
      <Hero />
      <Category />
      <TorchCategory />
      <Banner />
      <Review />
    </>
  );
}

export default HomePage;
