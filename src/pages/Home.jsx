import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Features from "../components/home/Features";
import Newsletter from "../components/home/Newsletter";

function Home() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Hero */}
      <Hero />

      {/* Categories */}
      <Categories />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Features */}
      <Features />

      {/* Newsletter */}
      <Newsletter />
    </main>
  );
}

export default Home;
