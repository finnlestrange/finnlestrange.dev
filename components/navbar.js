'use client'

import {Link as NextLink} from "@chakra-ui/next-js";
import {
    Button,
    HStack, Icon,
    MenuDivider,
    Modal, ModalBody, ModalCloseButton,
    ModalContent, ModalFooter, ModalHeader,
    ModalOverlay,
    useColorMode,
    useDisclosure
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
import {FcDiploma2} from "react-icons/fc";

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

const NavBar = (props) => {
    const {pathname} = props;
    const {colorMode, toggleColorMode} = useColorMode();
    const {isOpen, onOpen, onClose} = useDisclosure();
    const {isOpen: cvOpen, onOpen: setCVOpen, onClose: setCVClose} = useDisclosure();

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
                            display={{base: 'none', md: 'flex'}}
                            pl={4}
                        >
                            <LinkElement path={pathname} href={'/projects'}>Projects</LinkElement>

                        </HStack>
                    </HStack>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button display={{sm: 'none', md: 'inline-flex'}} leftIcon={<Icon as={FcDiploma2}/>} onClick={setCVOpen}>
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
                                            display={{base: 'none', md: 'inline-flex'}}
                                    >
                                        {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
                                    </Button>
                                </motion.div>
                            </AnimatePresence>

                            <Menu onClose={onClose}>
                                <MenuButton
                                    display={{base: 'inline-flex', md: 'none'}}
                                    as={IconButton}
                                    icon={isOpen ? <SmallCloseIcon /> : <HamburgerIcon/>}
                                    onClick={isOpen ? onClose : onOpen}
                                    variant={'outline'}
                                    minW={10}/>
                                <MenuList alignItems={'center'}>
                                    <MenuItem as={NextLink} href={"/"}>Home</MenuItem>
                                    <MenuDivider/>
                                    <MenuItem as={NextLink} href={"projects/"}>Projects</MenuItem>
                                    <MenuItem onClick={setCVOpen}>
                                        <Icon as={FcDiploma2} /> &nbsp; CV</MenuItem>
                                    <MenuDivider/>
                                    <MenuItem onClick={toggleColorMode}
                                              __hover={{backgroundColor: colorMode === 'light' ? '#5f5fcb' : '#eebb52'}}>
                                        {colorMode === 'light' ? <MoonIcon color={'#5f5fcb'}/> : <SunIcon color={'#eebb52'}/>} &nbsp; Toggle {colorMode === 'light' ? 'dark' : 'light'} mode
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>

            <Modal isOpen={cvOpen} onClose={setCVClose}>
                <ModalOverlay />
                <ModalContent
                    maxW={{sm: '100%', md: '80%', lg: '60%'}}
                    minH={{sm: '60%', md: '80%', lg: '60%'}}
                    h={'80%'}
                >
                    <ModalBody>
                        <embed src={'/files/CV.pdf'} width={'100%'} height={'100%'}/>
                    </ModalBody>
                    <ModalFooter>
                        <Button leftIcon={<SmallCloseIcon />} colorScheme='red' mr={3} onClick={setCVClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default NavBar;