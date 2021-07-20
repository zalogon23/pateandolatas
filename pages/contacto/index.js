import React from 'react'
import Article from '../../components/Article'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import CustomHead from "../../components/CustomHead";

function Contacto() {
  return (
    <>
      <CustomHead title="Contacto" keywords="pateando latas contacto capacitaciones trabajo estudio capacitar curso" description="Si quieres ponerte en contacto con nosotros no tienes mas que escribirnos via Whatsapp, Facebook o Instagram y te contestaremos a la brevedad." />
      <Header />
      <Article
        title="Todavía está en desarrollo esta página pe tío"
        url="https://www.ucinmedica.com/wp-content/uploads/2020/09/tiempo-de-espera.jpg"
        alt="Estoy en proceso"
        content={[`Todavia falta un toque para terminar esta página.`, { link: "/", to: "Ir a Inicio" }]}
      />
      <Footer />
    </>
  )
}

export default Contacto
