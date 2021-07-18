import { Text, Box, Heading, Image } from '@chakra-ui/react'
import React from 'react'

function Article({ id, main, right, content, title, url, alter }) {
  const element = main ? "main" : "section"
  const theme = alter ? "deep" : "basic";
  const themes = {
    basic: {
      bgColor: "white",
      pgColor: "gray.500",
      ttlColor: "black"
    },
    deep: {
      bgColor: "red.800",
      pgColor: "red.400",
      ttlColor: "orange.200"
    }
  }
  return (
    <Box id={id} width="full" justifyContent="center" bgColor={themes[theme].bgColor}>
      <Box px={{ "md": "8" }} pb="8" mx="auto" d="flex" maxW={["3xl", , , "5xl"]} flexDir="column" alignItems="center" as={element}>
        <Heading px="3" py={["5", null, "10"]} color={themes[theme].ttlColor} fontSize={["xl", "2xl", "3xl"]}>{title}</Heading>
        <Box px="3" pb="5" fontSize={["lg", "2xl"]} color={themes[theme].pgColor}>
          <Image src={url} fallbackSrc="/loading.jpg" rounded="lg" w={["full", , , "lg"]} float={{ "lg": right ? "right" : "left" }} mb="5" mt={{ "lg": "3" }} marginLeft={{ "lg": right ? "8" : "0" }} marginRight={{ "lg": !right ? "8" : "0" }} />
          {content.map(paragraph => (
            <Text key={paragraph} as="p" pb="3">{paragraph}</Text>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Article
