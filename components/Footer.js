import { Box } from '@chakra-ui/react'
import React from 'react'
import ContactForm from './ContactForm'
import SocialMedia from './SocialMedia'

function Footer() {
  return (
    <Box as="footer">
      <SocialMedia />
      <ContactForm />
    </Box>
  )
}

export default Footer
