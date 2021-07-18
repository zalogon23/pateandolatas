import Carousel from "./Carousel";

import React from 'react'
import { Box } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react";

function TitleWith({ title, children }) {
  return (
    <Box width="full" justifyContent="center">
      <Box px={{ "md": "8" }} mx="auto" pb="8" d="flex" maxW={["3xl", , , "5xl"]} flexDir="column" alignItems="center">
        <Heading fontSize={["xl", "2xl", "3xl"]} px="2" py="8" textAlign="center">{title}</Heading>
        {
          children
        }
      </Box>
    </Box>
  )
}

export default TitleWith
