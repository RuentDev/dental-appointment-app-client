"use client"
import { Flex, FormControl, Input, Button, Text } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa'

const SignupForm = () => {

  const router = useRouter()

  return (
   <form action="">
      <Flex w={400} flexDirection="column" alignItems="center" justifyContent="center" gap={5}>
        <FormControl>
          <Input 
            name='name'
            type='text'
            onChange={() => {}}
            placeholder='Your Name'
          />
        </FormControl>
        <FormControl>
          <Input 
            name='phone'
            type='tel'
            onChange={() => {}}
            placeholder='Your Phone'
          />
        </FormControl>
        <FormControl>
          <Input 
            name='email'
            type='email'
            onChange={() => {}}
            placeholder='Your Email'
          />
        </FormControl>
        <FormControl>
          <Input 
            name='password'
            type='password'
            onChange={() => {}}
            placeholder='Your Password'
          />
        </FormControl>
        <FormControl>
          <Input 
            name='password'
            type='password'
            onChange={() => {}}
            placeholder='Confirm Password'
          />
        </FormControl>
        <Button borderRadius={10} maxW="100%" w="100%">Signup</Button>
        <Button variant="unstyled" onClick={() => router.push("/auth/signin")}>Login</Button>
        <Text>Or</Text>
        <Flex gap={5}>
          <FaGoogle />
          <FaFacebook />
          <FaTwitter />
        </Flex>
      </Flex>
    </form>
  )
}

export default SignupForm