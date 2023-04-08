'use client'

import './globals.css'
import theme from "@/app/theme";
import {CacheProvider} from "@chakra-ui/next-js";
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import {usePathname} from "next/navigation";


export const metadata = {
    title: 'Finn Lestrange',
    description: "Finn Lestrange's Personal Website",
}

export default function RootLayout({children}) {
    const pathname = usePathname();
    return (
        <html lang="en">
        <head>
            <title>{metadata.title}</title>
        </head>
        <body>
        <CacheProvider>
            <ChakraProvider theme={theme}>
                <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
                <NavBar pathname={pathname} />
                {children}
                <Footer />
            </ChakraProvider>
        </CacheProvider>
        </body>
        </html>
    )
}
