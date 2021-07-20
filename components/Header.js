import React from 'react'
import NavBar from './NavBar'
import { Heading, IconButton, Stack, Image, HStack, Circle, Button } from '@chakra-ui/react'
import { useEffect } from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setScrolled(true)
        return
      }
      if (window.scrollY <= 150) setScrolled(false)
    };
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])

  return (
    <Stack as="header" w="100%" bg="red.700" alignItems="center">
      <HStack spacing="0" w="full" justifyContent="center" position="relative">
        <Link href="/">
          <IconButton display={["none",,"block"]} aria-label="Ir a inicio" rounded="full" bgColor="red.700" variant="ghost" w={["2.4rem",, "3.1rem"]} h={["2.4rem",, "3.1rem"]} position="absolute" left={["1.5rem", , "3rem"]} top="27%">
            <Circle transitionDuration="300ms" _hover={{ bgColor: "yellow.300" }} cursor="pointer" w={["2.3rem",, "3rem"]} h={["2.3rem",, "3rem"]} bgColor="orange.500">
              <Image transitionDuration="350ms" transform="auto" _hover={{ rotate: "-55deg" }} w={["3rem",, "4.5rem"]} h={["2.8rem",, "4.1rem"]} src="/logo.png" maxWidth="9999px" />
            </Circle>
          </IconButton>
        </Link>
        <Heading py={["4", , "10"]} fontStyle="italic" color="orange.200" fontSize={["2xl", , "4xl"]}>Pateando Latas</Heading>
      </HStack>
      <NavBar />
      {scrolled &&
        <IconButton aria-label="Ir a la parte superior de la pagina" zIndex="popover" onClick={scrollUp} boxShadow="0 0 0.4rem #000" rounded="full" position="fixed" w="14" h="14" right="4" bottom="20" bgColor="orange.200">
          <FontAwesomeIcon style={{ fontSize: "3rem" }} icon={faCaretUp} />
        </IconButton>
      }
    </Stack>
  )

  function scrollUp() {
    window.scrollTo(0, 0)
  }
}

export default Header
