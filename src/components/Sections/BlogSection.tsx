import { Button, Container, Flex, Grid, GridItem, Stack, Text } from '@chakra-ui/react'
import blogs from '@/data/blogs.json'
import Cards from '../Cards'
import React from 'react'

interface BlogSectionProps{}

const BlogSection:React.FC<BlogSectionProps> = ({}) => {
  return (
    <Container maxW="100%" h="auto" padding={20} bg="#eef8ff">
      <Flex alignItems="center" flexDirection="column" gap={10}>
        <Stack gap={1} my={10}>
          <Text as="p" color='#E9490A' fontWeight={700} textAlign="center">READ OUR BLOG</Text>
          <Text as="h2" fontWeight={700} fontSize={32} align="center">Latest Articles</Text>
        </Stack>

        <Grid
          w="100%"
          h="auto"
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap={20}
        >
          {blogs.map((blog) => (
            <GridItem key={blog.id}>
              <Cards.BlogCard 
                {...blog}
              />
            </GridItem>
          ))}
        </Grid>

        <Button>
          Read More
        </Button>
      </Flex>
    </Container>
  )
}

export default BlogSection