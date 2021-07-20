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
        url="https://detrujillo.com/wp-content/uploads/2012/04/plaza-de-armas-moche-de-trujillo-com.jpg"
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
        url="https://scontent.fepa4-1.fna.fbcdn.net/v/t1.6435-9/36458633_2304769256206473_3912175093043691520_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=H9KsKgaWrO8AX8nuJLU&tn=lVSg02l-G6S0C4J1&_nc_ht=scontent.fepa4-1.fna&oh=f881d44548328d5c5d539dbe164ed4a2&oe=60FA21CB"
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
        url="https://scontent.fepa4-1.fna.fbcdn.net/v/t1.6435-9/51289001_2482986785076785_2247670434558377984_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=730e14&_nc_ohc=Yzu5xqXy9EAAX8w4f_u&_nc_ht=scontent.fepa4-1.fna&oh=b53fb96263a91ef462c1a7a9fa4b1755&oe=60FBBA05"
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
          { description: "El camote!", src: "https://scontent.fepa4-1.fna.fbcdn.net/v/t1.6435-9/123243342_4484197551655449_8796211097237859554_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=973b4a&_nc_ohc=1d5QKmbmrw4AX89IfuE&_nc_ht=scontent.fepa4-1.fna&oh=b1dfe9ccbd9369d2cf15c72bea10f59e&oe=60FA251E", alt: "Entrada del restaurant mi camote, mismo que ofrece ceviche, chicharron y sudado" },
          { description: "Tapiceria gutierrez", src: "https://scontent.fepa4-1.fna.fbcdn.net/v/t1.6435-9/124572658_3514815885271047_8001171296407523026_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=4SjTU-ulSe8AX8FsBUt&tn=lVSg02l-G6S0C4J1&_nc_ht=scontent.fepa4-1.fna&oh=e9bdab3a9700d45c2c8354f696fdbf97&oe=60FBE1DF", alt: "Sillas tapizadas con cuero blanco. Cortesia de la tapiceria gutierrez" },
          { description: "Burguer House", src: "https://10619-2.s.cdn12.com/rests/original/106_504365429.jpg", alt: "Hamburguesas de Burguer House de carne con condimentos y cremas" },
          { description: "Santy Pan", src: "https://scontent.fepa4-1.fna.fbcdn.net/v/t1.18169-9/15109620_1031349060326981_4348547481641688186_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=e3f864&_nc_ohc=xZifg8R6kOkAX-VjHbi&_nc_ht=scontent.fepa4-1.fna&oh=b956a6973d1fb5bb61f17b9cf2e00f52&oe=60F9A3B7", alt: "Entrada de la panaderia Santy Pan, una de las panaderias mas importantes de moche junto con Don Pedro" },
        ]} measures={{ w: "full", h: ["20rem", "35rem"], maxW: ["3xl", , , "5xl"] }} />
      </TitleWith>
      <Footer />
    </>
  )
}