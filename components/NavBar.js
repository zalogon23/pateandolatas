import { Button, HStack } from '@chakra-ui/react'
import Link from "next/link"
import { faHome, faPhone, faRoute } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function NavBar() {
  return (
    <HStack py="1" px="6" w="full" bg="red.800" spacing={["3", "10"]} justifyContent={["space-around", "flex-end"]}>
      <Link href="/">
        <Button leftIcon={<FontAwesomeIcon icon={faHome} />} aria-label="Ir a inicio" fontSize={["md", "lg", "xl"]} bgColor="red.800" color="orange.200" variant="solid">
          Inicio
        </Button>
      </Link>
      <Link href="/cursos">
        <Button leftIcon={<FontAwesomeIcon icon={faRoute} />} aria-label="Ir a cursos" fontSize={["md", "lg", "xl"]} bgColor="red.800" color="orange.200" variant="solid">
          Cursos
        </Button>
      </Link>
      <Link href="/contacto">
        <Button leftIcon={<FontAwesomeIcon icon={faPhone} />} aria-label="Ir a contacto" fontSize={["md", "lg", "xl"]} bgColor="red.800" color="orange.200" variant="solid">
          Contacto
        </Button>
      </Link>
    </HStack>
  )
}

export default NavBar
