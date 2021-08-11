import { Divider, Square } from "@chakra-ui/react";
import Article from "../components/Article";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import TitleWith from "../components/TitleWith";
import Footer from "../components/Footer";
import CustomHead from "../components/CustomHead";

export default function Home() {
  return (
    <>
      <CustomHead title="Inicio" keywords="pateando latas inicio capacitaciones trabajo estudio capacitar curso" description="En pateando latas nos interesa que estes capacitado para solventar las necesidades del mundo moderno. Capacitandote para que puedas desarrollar páginas web, filmar, crear guiones, etc..." />
      <Header />
      <Article
        title="Hay un lugar donde va a haber oportunidades para todos..."
        alt="Plaza de armas del pueblo de moche en un dia soleado"
        url="/moche.jpg"
        right
        content={[`A lo largo de las últimas décadas Moche ha sido un pueblo que ha experimentado un gran cambio
        debido en buena medida a la apertura que ha tenido al mundo. Un pueblo que antes contaba solo con
        dos apellidos para sus miles de habitantes.`,
          ` Hoy alberga ocasionalmente (y no tan ocasional) ciudadanos
        argentinos, venezolanos, ecuatorianos y algún que otro viajero que se dejo llevar por el camino.`]}
      />
      <Article
        alter
        alt="Pateando latas el grupo reunido en la playa grabando escenas de su programa"
        title="Para ganarse el pan de cada día"
        url="/staff.jpg"
        content={[
          `A diario nos preguntamos como podemos mejorar nuestra calidad de trabajo. Y aunque no es imposible ingeniárselas, a veces necesitas ayuda. Y eso es precisamente lo que queremos ofrecerte`,
          `Con la iniciativa que hemos tenido un grupo de jovenes mocheros. Este canal pretende ser un medio de formación integral para los oficios
          de la actualidad (grabación, desarrollo web, marketing, cinematografía, etc). Para que no debas estar tanteando al azar una labor que no te da los ingresos necesarios.`,
          `Nuestro objetivo, junto contigo, es formar cada vez a mas pobladores de Moche, para que tengan las herramientas mentales necesarias. Que les permitan
          conseguir un trabajo digno y bien remunerado. Sin tener la necesidad de competir en el mercado a costa de bajarse el sueldo`,
          { link: "/contacto", to: "Contáctanos" }
        ]}
      />
      <Article
        alt="Grupo de patenado latas, se puede ver a Miguel, Dario, Kike, Lishner"
        title="Como podemos ayudarte"
        url="recording.jpg"
        content={[
          `Si estas interesado crear guiones, ya sea para tus videos, proyecto de serie o película independiente. O deseas aprender como grabar la misma, editarla, agregarle efectos tanto visuales como de sonido.
          O como marketear tu negocio en redes sociales, crear un sitio web o mover tu negocio a internet.`,
          `Entonces no tienes mas que ponerte en contacto con nosotros y nos encargaremos de capacitarte en el area que mas se acomode a tus gustos e inclinaciones. 
          Con el transcurso de los dias podras como te sientes cada vez mas capaz de llevar a cabo un proyecto por tu propia cuenta con los contenidos que iras adquieriendo.`,
          `Ya que al final del día, nada nos llenaría mas que ver a todos nuestros conciudadanos mocheros tener mayores oportunidades de salir adelante.`,
          { title: "En resumen!" },
          `Te damos una cordial bienvenida de parte de 'Pateando Latas'.`,
          { to: "Ver cursos", link: "/cursos" }
        ]}
      />
      <Divider />
      <TitleWith pb="3" title="Marcas locales que nos avalan:">
        <Carousel images={[
          { description: "El camote!", src: "/micamote.jpg", alt: "Entrada del restaurant mi camote, mismo que ofrece ceviche, chicharron y sudado" },
          { description: "Tapiceria gutierrez", src: "/tapiceriagutierrez.jpg", alt: "Sillas tapizadas con cuero blanco. Cortesia de la tapiceria gutierrez" },
          { description: "Burguer House", src: "/burguerhouse.jpg", alt: "Hamburguesas de Burguer House de carne con condimentos y cremas" },
          { description: "Santy Pan", src: "/santypan.jpg", alt: "Entrada de la panaderia Santy Pan, una de las panaderias mas importantes de moche junto con Don Pedro" },
        ]} measures={{ w: "full", h: ["20rem", "35rem"], maxW: ["3xl", , , "5xl"] }} />
      </TitleWith>
      <Footer />
    </>
  )
}