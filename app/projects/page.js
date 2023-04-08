'use client'

import {Box, Container, useColorModeValue} from "@chakra-ui/react";
import PageSection from "@/components/pageSection";
import GithubProjects from "@/components/githubProjects";

const Projects = () => {
    return (
        <Container
            h={'100%'}
            w={'100%'}
            maxW={'100%'}
            maxH={'100%'}
            p={15}
            px={{base: '10%', md: '20%', lg: '27%'}}
            pt={"3%"}
            display={'flex'}
            flexDirection={'column'}
            bg={useColorModeValue('gray.50', 'gray.800')}
            textColor={useColorModeValue('gray.800', 'gray.50')}
        >
            <Box
                borderRadius={'lg'}
                bg={useColorModeValue('#dedada', 'whiteAlpha.200')}
                mb={6}
                p={3}
                textAlign={'center'}
                css={{
                    backdropFilter: 'blur(10px)',
                }}>
                {/*Blurb Container*/}
                📌 &nbsp; Below are some of my past & current projects.
            </Box>
            <PageSection delay={0.1}>
                <GithubProjects />
            </PageSection>
        </Container>
    )
}

export default Projects;