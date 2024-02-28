import Hero from "./components/hero/Hero";
import QuienesSomos from "./components/quienesSomos/QuienesSomos";
import Noticias from "./components/noticias/Noticias";
import "./App.scss";

const App = () => {
  return (
    <div>
      <section id="Inicio">
        <Hero />
      </section>
      <section id="Quienes Somos">
        <QuienesSomos />
      </section>
      <section id="Noticias">
        <Noticias />
      </section>
      <section id="Proyectos">Hero</section>
      <section id="Contactenos">Hero</section>
    </div>
  );
};

export default App;
