'use client';

import './globals.css';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';

import theme from '@/app/theme';
import Footer from '@/components/footer';
import NavBar from '@/components/navbar';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <head>
        <title>Finn Lestrange - Personal Portfolio</title>
      </head>
      <body>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <NavBar pathname={pathname} />
            {children}
            <Footer />
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
