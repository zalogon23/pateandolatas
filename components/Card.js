import { Box, Button, Heading, Image, Square, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

function Card({ title, src, icon, iconColor, content, to, link, btnBg, btnColor, big, ...args }) {
  const pgMaxH = big ? "auto" : "14rem"
  const cardH = big ? "36rem" : "29rem"
  return (
    <Box h={[, cardH]} d="flex" flexDirection="column" alignItems={["center", , "flex-start"]} border="1px" rounded="md" borderColor="gray.300" px="3" py="6" {...args}>
      <Heading pb="8">{title}</Heading>
      <Square alignSelf="center" fontSize={["6xl", , "8xl"]} color={iconColor || "black"}>
        {icon && <FontAwesomeIcon icon={icon} />}
        {src && <Image src={src} fallbackSrc="/loading.jpg" />}
      </Square>
      <Text h={[, pgMaxH]} overflow="auto" fontSize={["md", "lg", , "xl"]} pt="8" pb="4">{content}</Text>
      {to && link && <Button display="flex" justifyContent="center" alignItems="center" p="4" _hover={{ bgColor: iconColor }} fontSize={["md", "lg", , "xl"]} bg={btnBg || "black"} color={btnColor || "white"} aria-label={to}><Link href={link}>{to}</Link></Button>}
    </Box>
  )
}

export default Card
