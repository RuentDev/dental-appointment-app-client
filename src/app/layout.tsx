import { ColorModeScript, Flex } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Components from '@/components'
import theme from '@/chakra'
import { CookiesProvider } from "next-client-cookies/server";

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
        <CookiesProvider>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Components.ChakraUIProvider>
            <Flex boxSize="100%" position="relative">
              <Components.Navbar />
              {children}
              <Components.Footer/>
            </Flex>
          </Components.ChakraUIProvider>
        </CookiesProvider>
      </body>
    </html>
  );
}
