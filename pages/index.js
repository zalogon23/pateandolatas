import { Square } from "@chakra-ui/react";
import Article from "../components/Article";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import TitleWith from "../components/TitleWith";
import GoogleMaps from "../components/GoogleMaps";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Article
        title="Hay un lugar donde 'podría' salir el sol para todos..."
        alt="Plaza de armas del pueblo de moche en un dia soleado"
        url="https://detrujillo.com/wp-content/uploads/2012/04/plaza-de-armas-moche-de-trujillo-com.jpg"
        right
        content={[`A lo largo de las últimas décadas Moche ha sido un pueblo que ha experimentado un gran cambio
        debido en buena medida a la apertura que ha tenido al mundo. Un pueblo que antes contaba solo con
        dos apellidos para sus miles de habitantes. Hoy alberga ocasionalmente (y no tan ocasional) ciudadanos
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
          conseguir un trabajo digno y bien remunerado. Sin tener la necesidad de competir en el mercado a costa de bajarse el sueldo`
        ]}
      />
      <TitleWith title="Marcas con las que hemos trabajado:">
        <Carousel images={[
          { description: "El camote!", src: "https://scontent.fepa4-1.fna.fbcdn.net/v/t1.6435-9/123243342_4484197551655449_8796211097237859554_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=973b4a&_nc_ohc=1d5QKmbmrw4AX89IfuE&_nc_ht=scontent.fepa4-1.fna&oh=b1dfe9ccbd9369d2cf15c72bea10f59e&oe=60FA251E", alt: "Entrada del restaurant mi camote, mismo que ofrece ceviche, chicharron y sudado" },
          { description: "Burguer House", src: "https://10619-2.s.cdn12.com/rests/original/106_504365429.jpg", alt: "Hamburguesas de Burguer House de carne con condimentos y cremas" },
          { description: "Santy Pan", src: "https://scontent.fepa4-1.fna.fbcdn.net/v/t1.18169-9/15109620_1031349060326981_4348547481641688186_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=e3f864&_nc_ohc=xZifg8R6kOkAX-VjHbi&_nc_ht=scontent.fepa4-1.fna&oh=b956a6973d1fb5bb61f17b9cf2e00f52&oe=60F9A3B7", alt: "Entrada de la panaderia Santy Pan, una de las panaderias mas importantes de moche junto con Don Pedro" },
        ]} measures={{ w: "full", h: ["20rem", "35rem"], maxW: ["3xl", , , "5xl"] }} />
      </TitleWith>
      <GoogleMaps maxW={["3xl", , , "5xl"]} />
      <Footer />
    </>
  )
}