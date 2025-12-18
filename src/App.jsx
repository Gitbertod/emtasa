import "./App.css";
import ContentSection from "./components/content-section/ContentSection";
import HeroContent from "./components/hero-content/HeroContent";
import NavBar from "./components/navbar/NavBar";
import VideoHome from "./components/video-home/VideoHome";
import Footer from "./components/footer/Footer";
import MultipleSwiper from "./components/multipleSwiper/MultipleSwiper";
import { clientes, clientes2 } from "./components/multipleSwiper/logos";
import SectionComponent from "./components/section/SectionComponent";

function App() {
  return (
    <>
      <NavBar />
      <VideoHome />
      <HeroContent />
      <ContentSection
        title="Experiencia técnica al servicio de decisiones confiables"
        description="Contamos con un equipo especializado en valuación y tasación de bienes inmuebles, maquinarias y activos, aplicando metodologías técnicas reconocidas y criterios objetivos. Nuestro trabajo se orienta a brindar información precisa, transparente y sustentada, acompañando a empresas, instituciones y particulares en procesos financieros, legales y estratégicos."
        image="/fotoSection2.jpg"
        imageAlt="Descripción de imagen"
        layout="left"
        highlight="palabra destacada"
      />
      <ContentSection
        title="Experiencia técnica al servicio de decisiones confiables"
        description="Contamos con un equipo especializado en valuación y tasación de bienes inmuebles, maquinarias y activos, aplicando metodologías técnicas reconocidas y criterios objetivos. Nuestro trabajo se orienta a brindar información precisa, transparente y sustentada, acompañando a empresas, instituciones y particulares en procesos financieros, legales y estratégicos."
        image="/fotoSection2.jpg"
        imageAlt="Descripción de imagen"
        layout="rigth"
        highlight="palabra destacada"
      />
      <SectionComponent>
        <MultipleSwiper
          title="Clientes que han confiando en nosotros"
          items={clientes}
          folder="/logosClientes"
        ></MultipleSwiper>
        <MultipleSwiper
          items={clientes2}
          folder="/logosClientes"
          reverse={true}
        ></MultipleSwiper>
      </SectionComponent>
      <Footer />
    </>
  );
}

export default App;
