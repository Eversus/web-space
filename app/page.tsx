import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";
import Hero from "../sections/home/Hero/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}