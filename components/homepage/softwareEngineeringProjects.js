import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { AiFillBell } from 'react-icons/ai';
import { BiRfid } from 'react-icons/bi';
import { FaRedhat } from 'react-icons/fa';
import { FiGitlab, FiPackage } from 'react-icons/fi';
import { VscAzure } from 'react-icons/vsc';

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        alignItems={'center'}
        justifyContent={'center'}
        color={'white'}
        rounded={'full'}
        bg={useColorModeValue('gray.100', 'whiteAlpha.200')}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={useColorModeValue('gray.600', 'whiteAlpha.600')}>
        {text}
      </Text>
    </Stack>
  );
};

export default function SoftwareEngineeringProjects() {
  return (
    <Box p={4}>
      <SimpleGrid
        textColor={useColorModeValue('gray.900', 'whiteAlpha.800')}
        columns={{ base: 1, md: 3 }}
        spacing={10}
      >
        <Feature
          icon={<Icon as={BiRfid} color={'#3182CE'} w={10} h={10} />}
          title={'RFIoT'}
          text={
            'I have been working on a project for a new client RFIoT, that makes use of RFID tags to do room occupancy detection. ' +
            'This project involved setting up a new REST api & a React + Vite frontend that interfaces with a replicaSet mongoDB.'
          }
        />
        <Feature
          icon={<Icon as={FaRedhat} color={'#E53E3E'} w={10} h={10} />}
          title={'Infrastructure & RHEL Administration'}
          text={
            'I am responsible for helping to maintain some of GUSSs key infrastructure, including the Shibboleth SSO Service Provider. ' +
            'Some of my work includes maintaining and updating systems, as well as automating various systems and services.'
          }
        />
        <Feature
          icon={<Icon as={FiPackage} color={'#af65ff'} w={10} h={10} />}
          title={'Shibboleth SSO'}
          text={
            'My role now includes maintaining, setting up & updating Shibboleth Service Providers. I am the point of contact for ' +
            'setting up new projects & configuring authentication on existing projects.'
          }
        />
        <Feature
          icon={<Icon as={AiFillBell} color={'#FFAD33'} w={10} h={10} />}
          title={'MyPath'}
          text={
            'I have been working on a project called MyPath, which is a web app that allows students to ' +
            'track their progress through their degree. It is built using React, and uses a custom API built using ' +
            'Django & Django Rest Framework, with an Azure SQL database, and hosted on UofG Servers.'
          }
        />
        <Feature
          icon={<Icon as={VscAzure} color={'#0086CF'} w={10} h={10} />}
          title={'Azure Deployments & Migrations'}
          text={
            'I have been working on migrating the MyPath project from a SoCS server to Azure. This has ' +
            'involved setting up and  migrating the database from ' +
            'a local instance of PostgreSQL to Azure PostgreSQL. With future plans of a kubernetes cluster to host the application.'
          }
        />
        <Feature
          icon={<Icon as={FiGitlab} color={'#FA6B25'} w={10} h={10} />}
          title={'DevOps Engineering'}
          text={
            'A large part of my work is building and maintaining the infrastructure for various projects. ' +
            'This includes updating and maintaining the CI/CD pipelines for the MyPath project, as well as ' +
            'performing bare metal server maintenance.'
          }
        />
      </SimpleGrid>
    </Box>
  );
}
