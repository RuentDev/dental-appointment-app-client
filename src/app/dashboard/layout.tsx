import { Container, Grid, GridItem } from '@chakra-ui/react'
import Components from '@/components'
import React from 'react'

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <Container 
      maxW="100%" 
      maxH="100vh" 
      h="100vh"
      border={0}
      padding={0}
    >
      <Grid
        w="100%"
        h="100%"
        templateRows="repeat(12, 1fr)"
        templateColumns="repeat(12, 1fr)"
      >
        <GridItem colSpan={2} rowSpan={12}>
          <Components.Sidebar />
        </GridItem>
        <GridItem w="100%" h="100%" colSpan={10} rowSpan={12}>
          {children}
        </GridItem>
      </Grid>
    </Container>
  )
}

export default DashboardLayout