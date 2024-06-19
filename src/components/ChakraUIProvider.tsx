'use client'
import theme from '@/chakra'
import { ChakraProvider } from '@chakra-ui/react'

export default function ChakraUIProvider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}