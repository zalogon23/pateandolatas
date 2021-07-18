import React from 'react'
import NavBar from './NavBar'
import { Heading, IconButton, Stack } from '@chakra-ui/react'
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
      <Heading py="4" fontStyle="italic" color="orange.200" fontSize="3xl">Pateando Latas</Heading>
      <NavBar />
      <IconButton zIndex="popover" onClick={scrollUp} boxShadow="0 0 0.4rem #000" rounded="full" position="fixed" w="14" h="14" right="4" bottom="6" transitionDuration="200ms" bgColor="orange.300" opacity={scrolled ? "100" : "0"}>
        <FontAwesomeIcon style={{ fontSize: "3rem" }} icon={faCaretUp} />
      </IconButton>
    </Stack>
  )

  function scrollUp() {
    window.scrollTo(0, 0)
  }
}

export default Header
