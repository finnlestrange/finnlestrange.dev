'use client';

import {
  Box,
  Container,
  Heading,
  Image,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import FeaturedProjects from '@/components/homepage/featuredProjects';
import SoftwareEngineeringProjects from '@/components/homepage/softwareEngineeringProjects';
import UniversityProjects from '@/components/homepage/universityProjects';
import PageSection from '@/components/pageSection';

export default function Home() {
  return (
    <Container
      h={'100%'}
      w={'100%'}
      maxW={'100%'}
      maxH={'100%'}
      p={15}
      px={{ base: '10%', md: '20%', lg: '27%' }}
      pt={'3%'}
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
        }}
      >
        {/*Blurb Container*/}
        👋 &nbsp; Hey, I&apos;m a Software Engineer & Computer Science student
        at the University of Glasgow.
      </Box>
      <Box>{/*Where the 3D model will sit*/}</Box>
      <Box display={{ base: 'flex', md: 'flex' }}>
        <Box flexGrow={1} pt={3}>
          {/*Name, bio and image*/}
          <Heading as={'h2'} variant={'page-title'}>
            Finn Lestrange.
          </Heading>
          <Text fontFamily={'monospace'}>
            Software Engineer & Computer Science Student based in the UK.
          </Text>
        </Box>
        <Box flexShrink={0} ml={{ md: 6 }} textAlign={'center'}>
          {' '}
          <Box
            borderColor={useColorModeValue('#858585', 'whiteAlpha.500')}
            borderWidth={2}
            borderStyle={'solid'}
            w={'100px'}
            h={'100px'}
            display={'inline-block'}
            borderRadius={'full'}
            overflow={'hidden'}
          >
            <Image
              src={'/images/profile.jpeg'}
              alt={'Profile Picture'}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        </Box>
      </Box>
      <PageSection delay={0.1}>
        <Heading as={'h3'} fontFamily={'mono'} variant={'section-title'}>
          Work & Experience
        </Heading>
        <Heading as={'h3'} fontFamily={'mono'} variant={'section-subtitle'}>
          University of Glasgow: <i>(June 2023 - Present)</i>
        </Heading>
        <Text fontSize={'lg'}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I&apos;m currently working as a
          software engineer at the{' '}
          <Link href={'https://guss.org.uk'}>
            Glasgow University Software Service
          </Link>
          . I work on various projects for both external and internal clients.
          My main focus is the MyPath Reporting System, which is used by the
          University of Glasgow to track student progress and provide feedback.
          I have a heavy focus on the backend / server engineering, but I also
          work on the frontend, ensuring the security and updates of the various
          aspects of the application are kept in check.
        </Text>
        <br />
        <SoftwareEngineeringProjects />
        <br />
        <Heading as={'h4'} fontFamily={'mono'} variant={'section-subtitle'}>
          International School of Aberdeen: <i>(May 2019 - Present)</i>
        </Heading>
        <Text fontSize={'lg'}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I worked as a Developer at the (
          <Link href={'https://isa.aberdeen.sch.uk'}>
            International School Aberdeen
          </Link>
          ) where I worked on a variety of projects, including maintaining the
          student information system (PowerSchool), various internal tools and
          GSuite Automations.
        </Text>
        <br />
        <FeaturedProjects />
      </PageSection>
      <br />
      <PageSection delay={0.1}>
        <Heading as={'h3'} fontFamily={'mono'} variant={'section-title'}>
          Education & Skills
        </Heading>
        <Text fontSize={'lg'}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I attend the University of Glasgow,
          where I am on track for a first class degree in Computer Science. I am
          also on track to complete a Masters in Computer Science by the end of
          2026. I have just finished my 2nd year and I am actively seeking a
          placement for my 3rd year. Some of my projects and skills can be found
          below.
        </Text>
        <UniversityProjects />
      </PageSection>
    </Container>
  );
}
