import Container from "../components/ui/Container/Container";
import Button from "../components/ui/Button/Button";
import Input from "../components/ui/Input/Input";
import SectionTitle from "../components/ui/SectionTitle/SectionTitle";

export default function Home() {
  return (
    <main>
      <Container>
        <SectionTitle title="Web Space" />

        <div
          style={{
            marginTop: "24px",
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <Button>Оставить заявку</Button>
          <Button variant="secondary">Рассчитать проект</Button>
        </div>

        <div style={{ marginTop: "24px", maxWidth: "320px" }}>
          <Input placeholder="Ваше имя" />
        </div>
      </Container>
    </main>
  );
}