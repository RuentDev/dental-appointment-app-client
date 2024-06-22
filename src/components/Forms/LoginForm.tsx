"use client"
import {FormControl, Input, Text, Button, Flex, IconButton } from '@chakra-ui/react'
import { FaGoogle, FaTwitter, FaFacebook } from "react-icons/fa6";
import { useRouter } from 'next/navigation'
import React from 'react'

const LoginForm = () => {

  const router = useRouter()

  return (
    <form action="">
      <Flex w={400} flexDirection="column" alignItems="center" justifyContent="center" gap={5}>
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
        <Button borderRadius={10} maxW="100%" w="100%">Login</Button>
        <Button variant="unstyled" onClick={() => router.push("/auth/signup")}>Signup</Button>
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

export default LoginForm