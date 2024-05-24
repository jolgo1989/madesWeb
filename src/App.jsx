import Hero from "./components/hero/Hero";
import QuienesSomos from "./components/quienesSomos/QuienesSomos";
import Noticias from "./components/noticias/Noticias";
import Proyectos from "./components/proyectos/Proyectos";
import "./App.scss";

const App = () => {
  return (
    <>
      <section id="Inicio">
        <Hero />
      </section>
      <section id="Quienes Somos">
        <QuienesSomos />
      </section>
      <section id="Noticias">
        <Noticias />
      </section>
      <Proyectos />
      {/* <section id="Contactenos">Contacts</section> */}
    </>
  );
};

export default App;
