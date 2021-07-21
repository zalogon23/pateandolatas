import { Grid } from '@chakra-ui/react'
import React from 'react'

function ItemsLayout({ children }) {
  return (
    <Grid gap="2" p="2" pt="0" templateColumns={["repeat(1,1fr)", "repeat(2,1fr)", , "repeat(3,1fr)", "repeat(4,1fr)"]}>
      {children}
    </Grid>
  )
}

export default ItemsLayout
