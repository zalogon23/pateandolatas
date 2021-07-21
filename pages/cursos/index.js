import { Divider } from '@chakra-ui/react'
import React from 'react'
import Article from '../../components/Article'
import Footer from '../../components/Footer'
import CustomHead from "../../components/CustomHead";
import Header from '../../components/Header'

function Cursos() {
  return (
    <>
      <CustomHead title="Cursos" keywords="pateando latas capacitaciones trabajo estudio cursos capacitar curso" description="Ponemos a tu disposición los siguientes cursos para que desarrolles las labores que están en mayor demanda en la actualidad." />
      <Header />
      <Article
        alter
        title="Cursos y capacitaciones"
        alt="Un dia de grabacion con miembros del equipo de pateando latas. En la foto el tio guti"
        url="https://scontent.fepa4-1.fna.fbcdn.net/v/t1.6435-9/50885286_2482986838410113_5928489619485097984_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=730e14&_nc_ohc=2bZ6-MrBKykAX9zOTP3&_nc_ht=scontent.fepa4-1.fna&oh=cbef3fb4eed112f0bf6f05a101906641&oe=60FBC2DC"
        content={[
          `Si lo que quieres es capacitarte en diversas áreas que en la actualidad están en alta demanda laboral. U optar un por un camino mas tradicional y aprender oficios variados.`,
          `Te dejamos con nuestro catalogo de cursos para que elijas el que sea de tu agrado:`]}
      />
      <Article
        right
        title="Filmado y guión"
        alt="Curso de filmado y cine, una camara grabando la escena de un video clip"
        url="/cameras.jpg"
        content={[
          `En este curso aprenderás de inicio a fin todo lo necesario para crear un guión interesante y atrapante. Hasta, como llevarlo a la realidad.`,
          `Pasando por detalles técnicos como los planos, los tipos de lentes de cámara. Iluminación, vestuario.`,
          `Como ambientar una buena escena, no solo eligiendo el lugar indicado, sino la banda sonora adecuada también.`,
          `Decidir las metáforas correctas para conmover realmente al espectador, entre otras.`,
          { link: "https://api.whatsapp.com/send?phone=541135775481&text=Me%20gustaria%20consultarles%20sobre%20el%20curso%20de%20filmado%20y%20guion", to: "Consultar" }
        ]}
      />
      <Divider />
      <Article
        title="Desarrollo Web"
        alt="Clases de desarrollo web, una computadora con un editor de texto abierto"
        url="/webdev.jpg"
        content={[
          `Aquí veremos como construir un sitio web con las últimas tecnologías que no solo te facilitarán el proceso de construcción, sino que también te brindarán la chance de personalizarlo tanto como quieras.`,
          `Empezamos desde lo mas básico de HTML y CSS (Lenguajes para dar formato al contenido). Para luego introducirnos en Javascript (Lenguaje de programación como tal con el que se da dinamismo al sitio).`,
          `Y será luego de esta buena base que nos adentraremos en el uso de React, Next.js, Chakra UI, entre muchas otras herramientas que nos permitirán desarrollar sitios en un santiamén.`,
          { link: "https://api.whatsapp.com/send?phone=541135775481&text=Me%20gustaria%20consultarles%20sobre%20el%20curso%20de%20desarrollo%20web", to: "Consultar" }
        ]}
      />
      <Divider />
      <Article
        right
        title="Tapizado"
        alt="Clases de tapizado, un asiento de vehiculo tapizado con cuero rojo"
        url="/upholstery.jpg"
        content={[
          `Descubrirás las técnicas y prácticas que se llevan a cabo para trabajar de forma maleable el cuero, entre otros materiales, para tapizar tanto sillas, como muebles. Incluyendo asientos de vehículo o puffs.`,
          `Los materiales con los que se puede tapizar son de una amplia variedad. Cualquier tipo de tela es usable. Pero recomendamos el cuero por su aspecto distintivo y su facilidad de trabajo.`,
          `Si lo tuyo son mas las labores manuales y estéticas, está es una muy buena oportunidad para plasmar un buen diseño en algún mueble que tengas por casa y necesite una restauración.`,
          { link: "https://api.whatsapp.com/send?phone=541135775481&text=Me%20gustaria%20consultarles%20sobre%20el%20curso%20de%20tapiceria", to: "Consultar" }
        ]}
      />
      <Footer />
    </>
  )
}

export default Cursos
