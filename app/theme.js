import {mode} from '@chakra-ui/theme-tools'
import {extendTheme} from "@chakra-ui/react";

const styles = {
    global: props => ({
        body: {
            bg: mode('gray.50', 'gray.800')(props)
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Link: {
        baseStyle: props => ({
            _hover: {
                color: mode('#FFB805', '#2A9D8F')(props),
            },
            textUnderlineOffset: 3
        })
    },
    Modal: {
        baseStyle: {
            overflow: 'hidden',
            overflowY: 'auto',
        }
    },
}

const fonts = {
    heading: "",
    body: ""
}

const colors = {
    grassTeal: '#88ccca'
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false
}

const theme = extendTheme({config, styles, components, fonts, colors})
export default theme