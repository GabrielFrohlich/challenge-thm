import "./home.css";
import React from "react";
import { FaWater, FaCloudShowersHeavy, FaMountain, FaWind } from "react-icons/fa";

function Home() {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <div className="header-overlay">
          <h1>DisasterInformer</h1>
          <p>Monitore e receba alertas sobre riscos naturais em sua região.</p>
        </div>
      </header>

      <section className="text-section">
        <div className="text-content">
          <img className="text-image left" src="/imgs/rain.jpg" />
          <div className="text-info">
            <h2>Por que monitorar riscos naturais?</h2>
            <p>Com mudanças climáticas cada vez mais intensas, é essencial estar preparado e informado sobre os riscos naturais ao seu redor.</p>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Esteja precavido contra:</h2>
        <div className="feature-grid">
          <div className="feature">
            <FaWater className="feature-icon" />
            <h3>Enxentes</h3>
            <p>Receba avisos sobre risco de enchentes em tempo real.</p>
          </div>
          <div className="feature">
            <FaCloudShowersHeavy className="feature-icon" />
            <h3>Tempestades</h3>
            <p>Seja alertado sobre tempestades e prepare-se com antecedência.</p>
          </div>
          <div className="feature">
            <FaMountain className="feature-icon" />
            <h3>Deslizamentos</h3>
            <p>Fique atento aos riscos de desmoronamento e deslizamentos.</p>
          </div>
          <div className="feature">
            <FaWind className="feature-icon" />
            <h3>Ventos Fortes</h3>
            <p>Informações precisas sobre ventos intensos na sua área.</p>
          </div>
        </div>
      </section>

      <section className="text-section">
        <div className="text-content">
          <div className="text-info">
            <h2>Como funciona o aplicativo?</h2>
            <p>Nosso sistema utiliza dados de estações meteorológicas e sensores locais para gerar alertas confiáveis e em tempo real para você.</p>
          </div>
          <img className="text-image right" src="/imgs/cellphone.jpg" />
        </div>
      </section>

      <section className="cta">
        <h2>Baixe o App Agora</h2>
        <p>Esteja sempre um passo à frente dos riscos naturais.</p>
        <button>Saiba Mais</button>
      </section>
    </div>
  );
}

export default Home;