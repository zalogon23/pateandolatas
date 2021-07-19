import React, { useState } from "react"
import { Box, Square, Image, IconButton, Heading } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

export default function Carousel({ images, measures }) {

  const [current, setCurrent] = useState(0);
  const imageWidth = 100 / images.length;

  return (
    <>
      <Box position="relative" {...measures} overflow="hidden" >
        {current !== 0 &&
          <IconButton bgColor="whiteAlpha.600" onClick={moveLeft} fontSize="2rem" rounded="full" position="absolute" top="49%" left="0.5rem" zIndex="modal" icon={<FontAwesomeIcon icon={faCaretLeft} />} />
        }
        {current !== images.length - 1 &&
          <IconButton bgColor="whiteAlpha.600" onClick={moveRight} fontSize="2rem" rounded="full" position="absolute" top="49%" right="0.5rem" zIndex="modal" icon={<FontAwesomeIcon icon={faCaretRight} />} />
        }
        <Box transitionDuration="300ms" transform="auto" translateX={`-${imageWidth * current}%`} h="full" d="flex" w={`${images.length * 100}%`}>
          {
            images.map(image => (
              <Box as="article" position="relative" h="full" bg w={`${imageWidth}%`}>
                {image.description && <Heading as="h3" size="md" bgColor="red.800" p="2" color="white" zIndex="modal" position="absolute" top="0" left="0">{image.description}</Heading>}
                <Box position="absolute" top="0" left="0" w="full" h="full" bgImage={image.src} bgSize="250%" bgRepeat="no-repeat" bgPosition="center" style={{ filter: "brightness(40%)" }} />
                <Image position="absolute" top="0" left="0" h="full" fit="contain" w="full" src={image.src} />
              </Box>
            ))
          }
        </Box>
      </ Box>
    </>
  )

  function moveLeft() {
    setCurrent(current - 1)
  }
  function moveRight() {
    setCurrent(current + 1)
  }
}