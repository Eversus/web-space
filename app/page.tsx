import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";
import Container from "../components/ui/Container/Container";
import SectionTitle from "../components/ui/SectionTitle/SectionTitle";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <SectionTitle title="Web Space" />
        </Container>
      </main>
      <Footer />
    </>
  );
}