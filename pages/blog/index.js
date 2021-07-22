import React from 'react'
import Article from '../../components/Article'
import CustomHead from '../../components/CustomHead'
import Header from '../../components/Header'
import Share from '../../components/Share'
import Footer from '../../components/Footer'
import { Divider, Square } from '@chakra-ui/react'


function Blog() {
  return (
    <>
      <CustomHead title="Blog" />
      <Header />
      <Article content={["Si quieres mejorar tus prácticas laborales, ver que está siendo tendencia en Moche, como puedes conseguirte un espacio en los diversos sectores, y en general estar mas capacitado. Checa los siguientes temas:"]}
        right title="Para que estés actualizado" url="/blog.jpg" alt="Blog de pateando latas, se pueden ver unos estantes llenos de libros iluminados por la tenue luz de unos focos amarillos." />
      <Divider />
      <Square py="8">En proceso creativo, espere contenido pronto.</Square>
      <Footer />
    </>
  )
}

export default Blog
