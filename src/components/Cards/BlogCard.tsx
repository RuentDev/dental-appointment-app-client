import { Box, Container, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

interface BlogCardProps {
  id: any,
  title: string;
  thumbnail: string;
  date: string;
  link: string
}

const BlogCard = ({title, thumbnail, date, link}: BlogCardProps) => {
  return (
    <Container maxW="100%" h="100%" bg="white" padding={0}> 
      <Stack position="relative" justifyContent="center" gap={5}>
        <Box position="relative">
          <Image 
            w="100%"
            src={thumbnail}
          />
        </Box>
        <Stack bg="white" gap={5} p={5}>
          <Text as="strong" fontSize="2xl" height={50}>{title}</Text>
          <Text as="p">{date}</Text>
        </Stack>
      </Stack>
    </Container>
  )
}

export default BlogCard