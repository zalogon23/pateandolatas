import React from 'react'
import Article from '../../components/Article'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import CustomHead from "../../components/CustomHead";
import Card from '../../components/Card';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import ItemsLayout from '../../components/ItemsLayout';
import { faHome, faHouseUser } from '@fortawesome/free-solid-svg-icons';

function Contacto() {
  return (
    <>
      <CustomHead title="Contacto" keywords="pateando latas contacto capacitaciones trabajo estudio capacitar curso" description="Si quieres ponerte en contacto con nosotros no tienes mas que escribirnos via Whatsapp, Facebook o Instagram y te contestaremos a la brevedad." />
      <Header />
      <Article
        title="Como comunicarte con nosotros"
        url="/contactus.jpg"
        alt="Como contactarnos, telefono colgando en pared amarilla"
        content={[{ heading: `A continuación están todos los medios por los que puedes encontrarnos, para que puedas contarnos tus dudas:` }]}
      />
      <ItemsLayout>
        <Card title="Facebook" to="Visitar Facebook" link="https://www.facebook.com/chino.gr93" icon={faFacebook} iconColor="blue.500" content="Comunícate con nosotros por Facebook para estar al tanto de las últimas noticias e ideas de negocio." />
        <Card title="Instagram" icon={faInstagram} to="Ir a Instagram" link="https://www.instagram.com/leondario0407" iconColor="pink.500" content="Puedes seguirnos en Instagram para ver nuestros videos y cortometrajes mas frescos. Puede servirte como inspiración." />
        <Card title="Whatsapp" icon={faWhatsapp} to="Enviar un Wassap" link="https://whatsapp.com" iconColor="green.500" content="Si quieres contactarnos por un método rápido, esta es la mejor opción. Solemos responder pronto. Como máximo, unas 2 horas." />
        <Card title="Local" icon={faHome} to="Como llego al local" link="https://www.google.com/maps/dir/Rodolfo+Diesel+271,+Libertad,+Provincia+de+Buenos+Aires,+Argentina/-8.1759444,-79.0183056/@-31.3061064,-61.8690962,9z/data=!4m8!4m7!1m5!1m1!1s0x95bcc0e96e8248ef:0xce198b72dc46ac6e!2m2!1d-58.6730007!2d-34.6865567!1m0?hl=es-US" iconColor="yellow.500" content="Para que verifiques como llegar hasta nuestro establecimiento, te recomendamos esta opción. Te estamos esperando!" />
      </ItemsLayout>
      <Footer />
    </>
  )
}

export default Contacto
