import { AspectRatio, Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

function GoogleMaps({ maxW }) {
  return (
    <Box flexDirection="column" alignItems="center" w="full" bg="black">
      <Heading color="white" fontSize={["xl", "3xl", "4xl"]} textAlign="center" py={["8", , "14"]}>Puedes encontrarnos en: </Heading>
      <AspectRatio maxW={maxW} mx="auto" ratio={[7 / 6, 16 / 9]}>
        <Box rounded={["0", , , , "0.5rem"]}>
          <iframe style={{ width: "100%", height: "100%" }}
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_KEY}&q=8°10'33.4"S+79°01'05.9"W&zoom=17`}
          />
        </Box>
      </AspectRatio>
      <Text textAlign={["center", , "start"]} fontSize={["sm", , "md", "xl"]} maxW={maxW} mx="auto" pt="4" pb="8" px={["2", , , , "0"]} color="gray.400">Dirección: Calle Juanca 420</Text>
    </Box>
  )
}

export default GoogleMaps
