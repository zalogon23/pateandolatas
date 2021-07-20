import { Text, Box, Heading, Image, Button } from '@chakra-ui/react'
import Link from 'next/link';
import React from 'react'

function Article({ id, main, right, content, title, url, alter, alt }) {
  const element = main ? "main" : "section"
  const theme = alter ? "deep" : "basic";
  const themes = {
    basic: {
      bgColor: "white",
      pgColor: "gray.500",
      ttlColor: "black"
    },
    deep: {
      bgColor: "black",
      pgColor: "gray.400",
      ttlColor: "white"
    }
  }
  return (
    <Box as={element} id={id} width="full" justifyContent="center" bgColor={themes[theme].bgColor}>
      <Box px={{ "md": "8" }} pb="8" mx="auto" d="flex" maxW={["3xl", , , "5xl"]} flexDir="column" alignItems="center">
        <Heading px="3" py={["8", , "14"]} color={themes[theme].ttlColor} fontSize={["xl", "3xl", "4xl"]}>{title}</Heading>
        <Box px="3" fontSize={["sm", , "md", "xl"]} color={themes[theme].pgColor}>
          <Image alt={alt} src={url} fallbackSrc="/loading.jpg" rounded="lg" w={["full", , , "lg"]} float={{ "lg": right ? "right" : "left" }} mb="5" mt={{ "lg": "3" }} marginLeft={{ "lg": right ? "8" : "0" }} marginRight={{ "lg": !right ? "8" : "0" }} />
          {content.map(paragraph => {
            if (paragraph.title) {
              return (<Heading py="2" fontSize={["lg", "xl", "2xl"]}>{paragraph.title}</Heading>)
            }
            if (paragraph.link && paragraph.to) {
              return (
                <Box d="flex" justifyContent={["center", , "flex-start"]} pt="4">
                  <Button fontSize={["sm", , "md", "xl"]} _hover={{ bgColor: themes[theme].ttlColor }} bg={themes[theme].pgColor} color={themes[theme].bgColor} aria-label={paragraph.to} py="2" fontSize={["lg", "xl", "2xl"]}>
                    <Link href={paragraph.link}>{paragraph.to}</Link>
                  </Button>
                </Box>
              )
            }
            return (
              <Text key={paragraph} as="p" pb="4">{paragraph}</Text>
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}

export default Article
