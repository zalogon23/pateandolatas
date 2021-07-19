import { IconButton, HStack } from '@chakra-ui/react'
import Link from "next/link"
import { faHome, faMosque, faRoute } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function NavBar() {
  return (
    <HStack py="1" px="10" w="full" bg="red.800" spacing="10" justifyContent={["space-around", "flex-end"]}>
      <Link href="/">
        <IconButton marginInline="0" fontSize={["lg", "xl", "2xl"]} bgColor="red.800" color="orange.200" variant="solid">
          <FontAwesomeIcon icon={faHome} />
        </IconButton>
      </Link>
      <Link href="/guias">
        <IconButton marginInline="0" fontSize={["lg", "xl", "2xl"]} bgColor="red.800" color="orange.200" variant="solid">
          <FontAwesomeIcon icon={faRoute} />
        </IconButton>
      </Link>
      <Link href="/locales">
        <IconButton marginInline="0" fontSize={["lg", "xl", "2xl"]} bgColor="red.800" color="orange.200" variant="solid">
          <FontAwesomeIcon icon={faMosque} />
        </IconButton>
      </Link>
    </HStack>
  )
}

export default NavBar
