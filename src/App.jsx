import Hero from "./components/hero/Hero";
import QuienesSomos from "./components/quienesSomos/QuienesSomos";
import Noticias from "./components/noticias/Noticias";
import Proyectos from "./components/proyectos/proyectos";
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
      <section id="Proyectos">
        <Proyectos />
      </section>
      <section id="Contactenos">Hero</section>
    </div>
  );
};

export default App;
