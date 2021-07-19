import { IconButton, Square } from '@chakra-ui/react'
import Link from 'next/link'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function SocialMedia() {
  return (
    <Square as="article" w="full" py="4">
      <Link href="https://www.facebook.com/chino.gr93">
        <IconButton w="4rem" h="4rem" rounded="full" mx="4" variant="ghost" aria-label="Pagina de Facebook" color="blue.500" fontSize="5xl">
          <FontAwesomeIcon icon={faFacebook} />
        </IconButton>
      </Link>
      <Link href="https://www.instagram.com/leondario0407">
        <IconButton w="4rem" h="4rem" rounded="full" mx="4" variant="ghost" aria-label="Pagina de Instagram" color="pink.500" fontSize="5xl">
          <FontAwesomeIcon icon={faInstagram} />
        </IconButton>
      </Link>
      <Link href="https://whatsapp.com">
        <IconButton w="4rem" h="4rem" rounded="full" mx="4" variant="ghost" aria-label="Contactar via Whatsapp" color="green.500" fontSize="5xl">
          <FontAwesomeIcon icon={faWhatsapp} />
        </IconButton>
      </Link>
    </Square>
  )
}

export default SocialMedia
