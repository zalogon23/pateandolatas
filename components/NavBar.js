import { Button, HStack } from '@chakra-ui/react'
import Link from "next/link"
import { faHome, faMosque, faRoute } from '@fortawesome/free-solid-svg-icons'
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
      <Link href="/guias">
        <Button leftIcon={<FontAwesomeIcon icon={faRoute} />} aria-label="Ir a guias" fontSize={["md", "lg", "xl"]} bgColor="red.800" color="orange.200" variant="solid">
          Guías
        </Button>
      </Link>
      <Link href="/locales">
        <Button leftIcon={<FontAwesomeIcon icon={faMosque} />} aria-label="Ir a locales" fontSize={["md", "lg", "xl"]} bgColor="red.800" color="orange.200" variant="solid">
          Locales
        </Button>
      </Link>
    </HStack>
  )
}

export default NavBar
