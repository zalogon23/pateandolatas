import { AspectRatio, Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

function GoogleMaps({ maxW }) {
  return (
    <Box flexDirection="column" alignItems="center" w="full" bg="red.800">
      <Heading color="orange.200" fontSize={["xl", "3xl", "4xl"]} textAlign="center" py={["8",,"14"]}>Puedes encontrarnos en: </Heading>
      <AspectRatio maxW={maxW} mx="auto" ratio={16 / 9}>
        <Box rounded={["0", , , ,"0.5rem"]}>
          <iframe style={{ width: "100%", height: "100%" }}
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_KEY}&q=8°10'33.4"S+79°01'05.9"W&zoom=17`}
          />
        </Box>
      </AspectRatio>
      <Text fontSize={["lg", "2xl"]} maxW={maxW} mx="auto" py="4" px={["2",,,,"0"]} color="red.400">Dirección: Calle Juanca 420</Text>
    </Box>
  )
}

export default GoogleMaps
