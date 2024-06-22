import { ColorModeScript, Flex } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Components from '@/components'
import theme from '@/chakra'


const inter = Open_Sans({ 
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "Dental Appointment",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Components.ChakraUIProvider>
          <Flex w="100%" h="100%" position="relative">
            <Components.Navbar />
            {children}
          </Flex>
        </Components.ChakraUIProvider>
      </body>
    </html>
  );
}
