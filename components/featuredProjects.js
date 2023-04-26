import {Box, SimpleGrid, Icon, Text, Stack, Flex, useColorModeValue} from '@chakra-ui/react';
import {FcAssistant, FcCommandLine, FcDeployment} from 'react-icons/fc';


const Feature = ({title, text, icon}) => {
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
                mb={1}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{title}</Text>
            <Text color={useColorModeValue('gray.600', "whiteAlpha.600")}>{text}</Text>
        </Stack>
    );
};

export default function FeaturedProjects() {
    return (
        <Box p={4}>
            <SimpleGrid textColor={useColorModeValue("gray.900", "whiteAlpha.800")} columns={{base: 1, md: 3}} spacing={10}>
                <Feature
                    icon={<Icon as={FcAssistant} w={10} h={10}/>}
                    title={'General IT Support'}
                    text={
                        'I worked with the IT department to provide helpdesk services at events and during term holidays.' +
                        ' This included troubleshooting and fixing issues with laptops, printers, and other devices.'
                    }
                />
                <Feature
                    icon={<Icon as={FcCommandLine} w={10} h={10}/>}
                    title={'Developing Internal Tools'}
                    text={
                        'Some of my work includes developing extensions and plugins for the school\'s management system, and a tools to ' +
                        'automate the creation of new student document folders & sync them up-to-date.'
                    }
                />
                <Feature
                    icon={<Icon as={FcDeployment} w={10} h={10}/>}
                    title={'Device & Service Deployments'}
                    text={
                        'I work at the start of each year to deploy new devices to the school. This includes ' +
                        'chromebooks & windows desktops, as well as setting up new services such as Google Workspace & AD for new staff / students.' +
                        ' I also work on maintaining a custom asset management server.'
                    }
                />
            </SimpleGrid>
        </Box>
    );
}