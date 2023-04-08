import {
    Box,
    VStack,
    Button,
    Flex,
    Text,
    Divider,
    chakra,
    Grid,
    GridItem,
    Container, Stack, SimpleGrid, Icon, useColorModeValue, useColorMode,
} from '@chakra-ui/react';
import Link from "next/link";
import {FaGithub, FaApple} from "react-icons/fa";
import {FiGitlab} from "react-icons/fi";
import {
    FcDocument,
    FcAlarmClock,
    FcApproval,
    FcDataEncryption,
    FcGlobe,
    FcTodoList,
    FcKindle,
    FcKey, FcGoogle
} from "react-icons/fc";

const Feature = ({ title, text, icon, link, linkText, buttonIcon }) => {
    return (
        <Stack>
            <Flex
                w={16}
                h={16}
                align={'center'}
                justify={'center'}
                color={'white'}
                rounded={'full'}
                bg={useColorModeValue('gray.100', 'whiteAlpha.200')}
                mb={1}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{title}</Text>
            <Text color={'gray.600'}>{text}</Text>
            <Box
                position={"relative"}
                bottom={0}
                left={0}
            >
                {linkText != null ? (
                    <Link href={link} target={"_blank"}>
                        <Button leftIcon={<Icon as={buttonIcon} />}>
                            {linkText}
                        </Button>
                    </Link>
                ) : null}
            </Box>
        </Stack>
    );
};


export default function GithubProjects() {
    return (
        <Box as={Container} maxW="7xl" mt={14} p={4}>
            <Grid
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(2, 1fr)',
                }}
                gap={4}>
                <GridItem colSpan={1}>
                    <VStack alignItems="flex-start" spacing="20px">
                        <chakra.h2 fontSize="3xl" fontWeight="700" fontFamily={"mono"}>
                            Personal Projects
                        </chakra.h2>
                        <Link href={"https://github.com/71xn"} target={"_blank"}>
                            <Button colorScheme="green" size="md" leftIcon={<FaGithub/>}>
                                GitHub
                            </Button>
                        </Link>
                    </VStack>
                </GridItem>
                <GridItem>
                    <Flex>
                        <chakra.p>
                            Here are some of my favorite projects. I have a lot more on my GitHub
                            profile. Information on closed source projects can be provided upon request.
                        </chakra.p>
                    </Flex>
                </GridItem>
            </Grid>
            <Divider mt={12} mb={12}/>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                <Feature
                    icon={<Icon as={FaApple} color={useColorMode().colorMode === 'light' ? "black" : "white"} w={10} h={10} />}
                    title={'Custom Hackintosh'}
                    text={
                        'This is a project that I have been working on over the spring break. I converted an old workstation' +
                        ' into a custom hackintosh. I am still collating all the notes and files into a single repo.'
                    }
                    link={"#"}
                    linkText={"Repo Coming Soon ..."}
                    buttonIcon={FaGithub}
                />
                <Feature
                    icon={<Icon as={FcGlobe} w={10} h={10} />}
                    title={'This Portfolio'}
                    text={
                        'This portfolio has been my first deep dive into working with a full stack next.js application. I have ' +
                        'also used this oportunity to learn about the Chakra UI library, and all the new features in Next.js 13.'
                    }
                    link={"https://github.com/71xn/"}
                    linkText={"Source Code"}
                    buttonIcon={FaGithub}
                />
                <Feature
                    icon={<Icon as={FcAlarmClock} w={10} h={10} />}
                    title={'React.js Pomodoro Timer'}
                    text={
                        'I built a custom react.js pomodoro timer to learn javascript features such as localstorage, react hooks and webworkers.' +
                        ' I also used this as an oportunity to learn about DNS and cloudflare pages, for automated ci/cd.'
                    }
                    link={"https://pomodoro.finnlestrange.tech"}
                    linkText={"Live Demo"}
                    buttonIcon={FcApproval}
                />
                {/*Row 2*/}
                <Feature
                icon={<Icon as={FcTodoList} color={"black"} w={10} h={10} />}
                title={'Django ToDo App'}
                text={
                    'This was my first project using the Django framework, where I worked with a team on creating ' +
                    'a fullstack todo list application with support for users, todos and lists.'
                }
                link={"https://finnlestrange.pythonanywhere.com/"}
                linkText={"Live Demo"}
                buttonIcon={FcApproval}
            />
                <Feature
                    icon={<Icon as={FcDataEncryption} w={10} h={10} />}
                    title={'Custom PowerSchool Plugins'}
                    text={
                        'I have been working on writing custom powerschool plugins for my school district. ' +
                        'These vary from data export plugins for google drive scripts, to modifications and feature additions to the default user experience.'
                    }
                    link={"https://github.com/InternationalSchoolAberdeen/ISAPowerSchoolPlugins"}
                    linkText={"ISAPowerSchoolPlugins"}
                    buttonIcon={FaGithub}
                />
                <Feature
                    icon={<Icon as={FiGitlab} color={"orange"} w={10} h={10} />}
                    title={'Misc. University Projects'}
                    text={
                        'Linked below is my University of Glasgow gitlab profile, where I have a lot of projects from my time at university. ' +
                        'Anything that is private is due to the university policy on sharing code from assignments.'
                    }
                    link={"https://stgit.dcs.gla.ac.uk/2737719l"}
                    linkText={"DCS GitLab"}
                    buttonIcon={FiGitlab}
                />
                <Feature
                    icon={<Icon as={FcDocument} w={10} h={10} />}
                    title={'IB CS Internal Assessment'}
                    text={
                        'This was my internal assessment for the IB Computer Science course. I created a custom ' +
                        'web application that made use of React.js, Google Firebase and Material UI, to create a ' +
                        'digital greenhouse for users to store and view their plants.'
                    }
                    link={"https://github.com/71xn/ibcs-ia"}
                    linkText={"Source Code"}
                    buttonIcon={FaGithub}
                />
                <Feature
                    icon={<Icon as={FcKey} w={10} h={10} />}
                    title={'Cryptography Research Essay'}
                    text={
                        'As part of my IB diploma, I wrote a 4000 word research essay on the comparison of ' +
                        'the security and implementation of the AES and RSA algorithms. The paper can be viewed below.'
                    }
                    link={"/files/EE.pdf"}
                    linkText={"Essay PDF"}
                    buttonIcon={FcKindle}
                />
                <Feature
                    icon={<Icon as={FcGoogle} w={10} h={10} />}
                    title={'Java Google Drive CSV Upload'}
                    text={
                        'I wrote this useful script for work to upload a CSV file to a shared google drive folder. ' +
                        'As it was written in Java, it can be scheduled to run on a windows server using the windows task scheduler.'
                    }
                    link={"https://github.com/InternationalSchoolAberdeen/DriveAPIFileUploadJava"}
                    linkText={"Source Code"}
                    buttonIcon={FaGithub}
                />

            </SimpleGrid>
        </Box>
    );
}