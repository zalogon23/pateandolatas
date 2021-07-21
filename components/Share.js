import { Box, Button, ButtonGroup, Heading, Square } from '@chakra-ui/react'
import { faFacebook, faFacebookMessenger, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { FacebookMessengerShareButton, FacebookShareButton, WhatsappShareButton } from 'react-share'

function Share({ url }) {
  return (
    <Box pb="4">
      <Heading as="h4" fontSize="xl" py="12" px="2">Si te gusto el contenido puedes compartirlo con tus amigos y familiares:</Heading>
      <ButtonGroup isAttached bgColor="black" justifyContent="center" w="full" color="white">
        <FacebookShareButton url={url}><Button fontSize={["sm", , "md", "xl"]} p="2" aria-label="Compartir por Facebook " rounded="0" bg="blue.500" _hover={{ filter: "brightness(120%)" }} leftIcon={<FontAwesomeIcon icon={faFacebook} />}>Compartir</Button></FacebookShareButton>
        <FacebookMessengerShareButton url={url}><Button fontSize={["sm", , "md", "xl"]} p="2" aria-label="Compartir por Facebook Messenger " rounded="0" bg="blue.300" _hover={{ filter: "brightness(120%)" }} leftIcon={<FontAwesomeIcon icon={faFacebookMessenger} />}>Mostrar</Button></FacebookMessengerShareButton>
        <WhatsappShareButton url={url}><Button fontSize={["sm", , "md", "xl"]} p="2" aria-label="Compartir por Whatsapp " rounded="0" bg="green.500" _hover={{ filter: "brightness(120%)" }} leftIcon={<FontAwesomeIcon icon={faWhatsapp} />}>Enviar</Button></WhatsappShareButton>
      </ButtonGroup>
    </Box>
  )
}

export default Share
