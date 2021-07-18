import { Box, Heading, IconButton, Image, Square } from '@chakra-ui/react'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

function Carousel({ base, images }) {
  const w = [base, base + 10, base + 20, base + 30];

  const [current, setCurrent] = useState(0);
  return (
    <Square bgColor="black" maxW="full">
      <Box id="algo" maxW="full" position="relative" overflow="hidden" w={[...w.map(val => val + "rem")]} h={[...w.map(val => val * 9 / 16 + "rem")]}>
        {current !== 0 &&
          <IconButton bgColor="whiteAlpha.600" onClick={() => move("left")} fontSize="2rem" rounded="full" position="absolute" top={["7rem", "10rem", "13rem", "15rem"]} left="0.5rem" zIndex="popover">
            <FontAwesomeIcon icon={faCaretLeft} />
          </IconButton>}
        {current !== images.length - 1 &&
          <IconButton bgColor="whiteAlpha.600" onClick={() => move("right")} fontSize="2rem" rounded="full" position="absolute" top={["7rem", "10rem", "13rem", "15rem"]} right="0.5rem" zIndex="popover">
            <FontAwesomeIcon icon={faCaretRight} />
          </IconButton>}
        <Box transitionDuration="500ms" transform="auto" translateX={`-${100 / images.length * current}%`} d="flex" w={[...w.map(val => val * images.length + "rem")]} h="full">
          {
            images.map((image, id) => (
              <Box key={id} position="relative" h="full" w={[...w.map(val => val + "rem")]}>
                {image.description &&
                  <Square position="absolute" top="0" left="0" bgColor="red.700" px="3" py="1">
                    <Heading color="white">{image.description}</Heading>
                  </Square>
                }
                <Image objectPosition="bottom" fit="cover" h="full" w="full" key={id} src={image.src} alt={image.alt} />
              </Box>
            ))
          }
        </Box>
      </Box>
    </Square>
  )

  function move(dir) {
    switch (dir) {
      case "left":
        if (current === 0) break
        setCurrent(current - 1);
        break;
      case "right":
        if (current === images.length - 1) break;
        setCurrent(current + 1)
      default:
        break;
    }
  }
}

export default Carousel
