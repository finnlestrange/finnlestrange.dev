'use client'

import {Link as NextLink} from "@chakra-ui/next-js";
import {
    Button,
    HStack, Icon, LightMode,
    MenuDivider,
    Modal, ModalBody, ModalCloseButton,
    ModalContent, ModalFooter, ModalHeader,
    ModalOverlay,
    useColorMode,
    useDisclosure, VStack
} from "@chakra-ui/react";

import {
    Box,
    Stack,
    Image,
    Link,
    Text,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
} from "@chakra-ui/react";

import {HamburgerIcon, MoonIcon, SunIcon, SmallCloseIcon} from "@chakra-ui/icons";
import {AnimatePresence, motion} from "framer-motion";
import {FcBusinessContact, FcDiploma2, FcLink} from "react-icons/fc";
import {FaFacebook, FaFileDownload} from "react-icons/all";
import {FaGithub, FaInstagram} from "react-icons/fa";
import {FiGitlab} from "react-icons/fi";

const LinkElement = ({href, path, target, children, ...props}) => {
    const active = path === href;
    const inactiveColor = useColorModeValue("gray.600", "gray.200");
    return (
        <Link
            as={NextLink}
            scroll={false}
            href={href}
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
            }}
            color={active ? '#00bf7f' : inactiveColor}
            target={target}
            {...props}
        >
            {children}
        </Link>
    )
}

const copyTextToClipBoard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Async: Copying to clipboard was successful!');
    });
}


const NavBar = (props) => {

    const {pathname} = props;
    const {colorMode, toggleColorMode} = useColorMode();
    const {isOpen, onOpen, onClose} = useDisclosure();
    const {isOpen: cvOpen, onOpen: setCVOpen, onClose: setCVClose} = useDisclosure();
    const {isOpen: isContactInfoOpen, onOpen: setContactInfoOpen, onClose: setContactInfoClosed} = useDisclosure();

    return (
        <>
            <Box
                bg={useColorModeValue('gray.50', 'gray.800')}
                px={{base: '7%', md: '27%'}}
                textColor={useColorModeValue('gray.700', 'gray.200')}
            >
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <HStack>
                        <NextLink
                            href={'/'}
                            scroll={false}
                            pt={1}
                        >
                            <Box
                                display={"inline-flex"}
                                alignItems={"center"}
                                justifyContent={"center"}
                            >
                                <Image src={'/images/icon.png'} alt={'logo'} width={30} height={30}/>
                                <Text
                                    display={"inline-flex"}
                                    fontFamily={"mono"}
                                    fontWeight={'bold'}
                                    fontSize={'lg'}
                                >
                                    finnlestrange.tech
                                </Text>
                            </Box>
                        </NextLink>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{base: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'flex'}}
                            pl={4}
                        >
                            <LinkElement path={pathname} href={'/projects'}>Projects</LinkElement>
                        </HStack>
                    </HStack>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={5}>
                            <Button display={{base: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'inline-flex'}}
                                    leftIcon={<Icon as={FcBusinessContact}/>}
                                    onClick={setContactInfoOpen}>
                                Contact
                            </Button>
                            <Button display={{base: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'inline-flex'}}
                                    leftIcon={<Icon as={FcDiploma2}/>}
                                    onClick={setCVOpen}>
                                CV
                            </Button>
                            <AnimatePresence mode='wait' initial={false}>
                                <motion.div
                                    style={{display: 'inline-block'}}
                                    key={useColorModeValue('light', 'dark')}
                                    initial={{opacity: 0, y: -20}}
                                    animate={{opacity: 1, y: 0}}
                                    exit={{opacity: 0, y: 20}}
                                    transition={{duration: 0.2}}
                                >
                                    <Button onClick={toggleColorMode}
                                            _hover={{
                                                backgroundColor: colorMode === 'light' ? '#5f5fcb' : '#eebb52',
                                            }}
                                            display={{base: 'none', md: 'none', lg: 'none', xl: 'inline-flex'}}
                                    >
                                        {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
                                    </Button>
                                </motion.div>
                            </AnimatePresence>

                            <Menu onClose={onClose}>
                                <MenuButton
                                    display={{base: 'inline-flex', md: 'inline-flex', sm: 'inline-flex', lg: 'inline-flex', xl: 'none'}}
                                    as={IconButton}
                                    icon={isOpen ? <SmallCloseIcon/> : <HamburgerIcon/>}
                                    onClick={isOpen ? onClose : onOpen}
                                    variant={'outline'}
                                    minW={10}/>
                                <MenuList alignItems={'center'}>
                                    <MenuItem as={NextLink} href={"/"}>Home</MenuItem>
                                    <MenuDivider/>
                                    <MenuItem as={NextLink} href={"/projects"}>Projects</MenuItem>
                                    <MenuItem onClick={setContactInfoOpen}>
                                        <Icon as={FcBusinessContact}/> &nbsp; Contact</MenuItem>
                                    <MenuItem onClick={setCVOpen}>
                                        <Icon as={FcDiploma2}/> &nbsp; CV</MenuItem>
                                    <MenuDivider/>
                                    <MenuItem onClick={toggleColorMode}
                                              __hover={{backgroundColor: colorMode === 'light' ? '#5f5fcb' : '#eebb52'}}>
                                        {colorMode === 'light' ? <MoonIcon color={'#5f5fcb'}/> : <SunIcon
                                            color={'#eebb52'}/>} &nbsp; Toggle {colorMode === 'light' ? 'dark' : 'light'} mode
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>

            {/* CV Modal */}
            <Modal isOpen={cvOpen} onClose={setCVClose} blockScrollOnMount={true} preserveScrollBarGap={true}>
                <ModalOverlay/>
                <ModalContent
                    maxW={{sm: '100%', md: '80%', lg: '60%'}}
                    minH={{sm: '60%', md: '80%', lg: '60%'}}
                    h={'80%'}
                >
                    <ModalBody>
                        <embed src={'/files/CV.pdf'} width={'100%'} height={'100%'}/>
                    </ModalBody>
                    <ModalFooter>
                        <LightMode>
                            <Button leftIcon={<FaFileDownload/>} colorScheme='blue' mr={3} onClick={function () {
                                if (typeof window !== 'undefined') {
                                    window.open("/files/CV.pdf", "_blank");
                                }
                            }}>
                                Download
                            </Button>
                            <Button leftIcon={<SmallCloseIcon/>} colorScheme='red' mr={3} onClick={setCVClose}>
                                Close
                            </Button>
                        </LightMode>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            {/* Contact Info Modal */}
            <Modal isOpen={isContactInfoOpen} onClose={setContactInfoClosed} blockScrollOnMount={true}
                   preserveScrollBarGap={true}>
                <ModalOverlay/>
                <ModalContent
                    textColor={useColorModeValue('gray.700', 'gray.200')}
                    maxW={{sm: '100%', md: '80%', lg: '25%'}}
                >
                    <ModalHeader>Contact Me</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <VStack spacing={2} align={"center"}>
                            <LightMode>
                                <Button
                                    leftIcon={<Icon as={FaGithub}/>}
                                    textColor={useColorModeValue('gray.200', 'gray.200')}
                                    bg={'#1D232E'}
                                    _hover={{
                                        bg: '#3B3B3B'
                                    }}
                                    maxW={'50%'}
                                    w={'50%'}
                                    onClick={function () {
                                        if (typeof window !== 'undefined') {
                                            window.open('https://github.com/71xn/', '_blank');
                                        }
                                    }}>
                                    GitHub
                                </Button>
                                <Button
                                    leftIcon={<Icon as={FiGitlab} color={'orange'}/>}
                                    textColor={'orange'}
                                    bg={'#1D232E'}
                                    _hover={{
                                        bg: '#3B3B3B'
                                    }}
                                    maxW={'50%'}
                                    w={'50%'}
                                    onClick={function () {
                                        if (typeof window !== 'undefined') {
                                            window.open('https://stgit.dcs.gla.ac.uk/2737719l', '_blank');
                                        }
                                    }}>
                                    Gitlab&nbsp;&nbsp;&nbsp;
                                </Button>
                                <Button
                                    leftIcon={<Icon as={FaFacebook}/>}
                                    colorScheme={'facebook'}
                                    textColor={useColorModeValue('gray.200', 'gray.200')}
                                    maxW={'50%'}
                                    w={'50%'}
                                    onClick={function () {
                                        if (typeof window !== 'undefined') {
                                            window.open('https://facebook.com/finn.lestrange', '_blank');
                                        }
                                    }}>
                                    Facebook
                                </Button>
                                <Button
                                    leftIcon={<Icon as={FaInstagram}/>}
                                    colorScheme={'pink'}
                                    maxW={"50%"} w={'50%'}
                                    textColor={useColorModeValue('gray.200', 'gray.200')}
                                    onClick={function () {
                                        if (typeof window !== 'undefined') {
                                            window.open('https://instaram.com/finn.lestrange', '_blank');
                                        }
                                    }}>
                                    Instagram
                                </Button>
                                <Button mr={3} id={"work-email-button"} maxW={"50%"} w={'50%'}
                                        leftIcon={<Icon as={FcLink}/>}
                                        variant='outline'
                                        colorScheme={'blackAlpha'}
                                        textColor={useColorModeValue("gray.700", "gray.200")}
                                        onClick={function () {
                                            copyTextToClipBoard('finn.lestrange@glasgow.ac.uk');
                                            document.getElementById('work-email-button').innerHTML = `✅&nbsp; Copied!`;
                                        }
                                        }>Work Email</Button>
                                <Button mr={3} id={"email-button"} maxW={"50%"} w={'50%'} leftIcon={<Icon as={FcLink}/>}
                                        variant='outline'
                                        colorScheme={'blackAlpha'}
                                        textColor={useColorModeValue("gray.700", "gray.200")}
                                        onClick={function () {
                                            copyTextToClipBoard('info@finnlestrange.tech');
                                            document.getElementById('email-button').innerHTML = `✅&nbsp; Copied!`;
                                        }
                                        }>Personal Email</Button>
                            </LightMode>
                        </VStack>
                    </ModalBody>
                    <ModalFooter>
                        <LightMode>
                            <Button colorScheme='red' leftIcon={<SmallCloseIcon/>} onClick={setContactInfoClosed}>
                                Close
                            </Button>
                        </LightMode>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default NavBar;
