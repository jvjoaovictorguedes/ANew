import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import Products from "../../components/Products/Products";
import Prominence from "../../components/Prominence/Prominence";

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <Prominence />
      <Products />
      <Footer />
    </>
  );
}
