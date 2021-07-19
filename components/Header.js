import React from 'react'
import NavBar from './NavBar'
import { Heading, IconButton, Stack, Image, HStack, Circle } from '@chakra-ui/react'
import { useEffect } from 'react'
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
      <HStack w="full" justifyContent="center" position="relative">
        <Circle w={["1.5rem", "2.3rem", "3rem"]} h={["1.5rem", "2.3rem", "3rem"]} position="absolute" left={["1.5rem", , "3rem"]} top={["35%","27%"]} bgColor="white">
          <Image w={["2rem", "3rem", "4.5rem"]} h={["2rem", "3rem", "4.5rem"]} src="/logo.png" maxWidth="auto" />
        </Circle>
        <Heading py={["4", , "10"]} fontStyle="italic" color="orange.200" fontSize={["2xl", , "4xl"]}>Pateando Latas</Heading>
      </HStack>
      <NavBar />
      <IconButton zIndex="popover" onClick={scrollUp} boxShadow="0 0 0.4rem #000" rounded="full" position="fixed" w="14" h="14" right="4" bottom="6" transitionDuration="200ms" bgColor="orange.200" opacity={scrolled ? "100" : "0"}>
        <FontAwesomeIcon style={{ fontSize: "3rem" }} icon={faCaretUp} />
      </IconButton>
    </Stack>
  )

  function scrollUp() {
    window.scrollTo(0, 0)
  }
}

export default Header
