import Article from "../components/Article";
import Carousel from "../components/Carousel";
import Header from "../components/Header";

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
        alt="Trabajadores en huelga reclamando mejores oportunidades laborales"
        title="Para ganarse el pan de cada día"
        url="https://diariouno.pe/wp-content/uploads/2019/03/09-24.jpg"
        content={[
          `A diario nos preguntamos como podemos ganarnos el sustento. Y aunque no es imposible ingeniárselas, a veces no nos sentimos capaces.`,
          `¡Pero no todo esta perdido!`,
          `Con la iniciativa que han tenido un grupo de jovenes mocheros, este canal pretende ser un medio de formación integral para los oficios
          de la actualidad (filmado, grabación, desarrollo web, marketing, cinematografía, etc). Para que no deba estar tanteando al azar una labor que no le da los ingresos necesarios.`,
          `Nuestro objetivo, junto contigo, es formar cada vez a mas pobladores de Moche, para que tengan las herramientas mentales necesarias. Que les permitan
          conseguir un trabajo digno y bien remunerado. Sin tener la necesidad de competir en el mercado a costa de bajarse el sueldo`
        ]}
      />
      <Carousel images={[{ src: "https://diariouno.pe/wp-content/uploads/2019/03/09-24.jpg", alt: "vaina" }, { src: "https://diariouno.pe/wp-content/uploads/2019/03/09-24.jpg", alt: "vaina" }]} base={25} />
    </>
  )
}
