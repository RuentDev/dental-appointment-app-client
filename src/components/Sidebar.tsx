import NextLink from 'next/link'
import { Container, Link, ListItem, UnorderedList } from '@chakra-ui/react'
import sidebarsLinks from '@/data/dashboard-links.json'
import React from 'react'


const Sidebar = () => {



  return (
    <Container maxW="100%" h="100%" p={0}>
      <UnorderedList listStyleType="none" m={0}>
        {sidebarsLinks.map((option) => (
          <ListItem key={option.id} p={3} px={5}>
            <Link 
              as={NextLink}
              href={option.link}
            >
              {option.label}
            </Link>
          </ListItem>
        ))}
      </UnorderedList>
    </Container>
  )
}

export default Sidebar