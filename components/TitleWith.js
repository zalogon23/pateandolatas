import React from 'react'
import { Box } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react";

function TitleWith({ title, children }) {
  return (
    <Box as="section" width="full" justifyContent="center">
      <Box mx="auto" pb="12" d="flex" maxW={["3xl", , , "5xl"]} flexDir="column" alignItems="center">
        <Heading fontSize={["xl", "3xl", "4xl"]} px="2" py={["8",,"14"]} textAlign="center">{title}</Heading>
        {
          children
        }
      </Box>
    </Box>
  )
}

export default TitleWith
