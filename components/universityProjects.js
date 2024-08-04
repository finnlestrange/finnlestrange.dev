import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import {
  FcCollaboration,
  FcDataConfiguration,
  FcGraduationCap,
  FcNext,
  FcTodoList,
} from 'react-icons/fc';

const Card = ({ heading, description, icon }) => {
  return (
    <Box
      maxW={{ base: 'full', md: '197px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={3}
    >
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default function UniversityProjects() {
  return (
    <Box p={4}>
      <Container maxW={'100%'} minW={'100%'} mt={5}>
        <Flex flexWrap="wrap" gridGap={5} justify="center">
          <Card
            heading={'MyPath'}
            icon={<Icon as={FcGraduationCap} w={10} h={10} />}
            description={
              'I worked throughout all last year on the MyPath project, which takes student data from many sources' +
              'and aggregates it then processes into performance indicators.'
            }
          />
          <Card
            heading={'To-Do App'}
            icon={<Icon as={FcTodoList} w={10} h={10} />}
            description={
              'As part of my final second year project a team of 2 and I created a full stack to-do app using ' +
              'Django, Bootstrap, HTML, CSS, JavaScript, and SQLite.'
            }
          />
          <Card
            heading={'Test Driven Development'}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={
              'From the software engineering module I have experience with test driven development using ' +
              'JUnit and Mockito.'
            }
          />
          <Card
            heading={'Database Design'}
            icon={<Icon as={FcDataConfiguration} w={10} h={10} />}
            description={
              'I have experience working with and designing relational databases using MySQL, SQLite & OracleSQL.'
            }
          />
          <br />
          <Link href={'/projects'}>
            <Button aria-label={'view-more'} rightIcon={<FcNext />}>
              View More Projects
            </Button>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
