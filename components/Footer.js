import { Divider, Link, Square, Box, Text } from '@chakra-ui/react'
import React from 'react'
import SocialMedia from './SocialMedia'
import GoogleMaps from "./GoogleMaps"

function Footer() {
  return (
    <Box as="footer">
      <GoogleMaps maxW={["3xl", , , "5xl"]} />
      <SocialMedia />
      <Divider />
      <Square><Link py="2" href="https://api.whatsapp.com/send?phone=541135775481&text=Me%20gustaria%20consultar%20el%20precio%20de%20una%20pagina%20sobre...%20(describir)">Desarrollado por <Text fontWeight="bold" as="span" color="red.500">Virtualizar</Text></Link></Square>
    </Box>
  )
}

export default Footer
