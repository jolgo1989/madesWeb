import Hero from "./components/hero/Hero";
import QuienesSomos from "./components/quienesSomos/QuienesSomos";
import TituloNoticias from "./components/noticias/TituloNoticias";
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
        <TituloNoticias />
      </section>
      <section id="Proyectos">Hero</section>
      <section id="Contactenos">Hero</section>
    </div>
  );
};

export default App;
