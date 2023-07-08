
import { Box, Stack, Text, Card, Heading, Spinner } from "@chakra-ui/react";
import { Wrap, WrapItem, Avatar, CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'
import { Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup } from "@chakra-ui/react"

export default function Footer() {

    return (
        <Card
            w="900px"
            p={10}
            textAlign="center"
            boxShadow="lg"
            borderRadius="xl"
            bgGradient="linear(to-r, teal.500, teal.700)"
            color="white"
        >
            <Box mt={8} pt={4} display="flex" flexDirection="column" alignItems="center">
                <Text fontSize="3xl" fontWeight="bold" mb={4}>
                    Our customers love us
                </Text>
                <Text fontSize="xl" fontStyle="italic">
                    This is some sample text below the Card component.
                </Text>

                <Wrap align={"center"}>
                    <WrapItem>
                        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                    </WrapItem>
                    <WrapItem>
                        <Avatar name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' />
                    </WrapItem>
                    <WrapItem>
                        <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                    </WrapItem>
                    <WrapItem>
                        <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                    </WrapItem>
                    <WrapItem>
                        <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                    </WrapItem>
                    <WrapItem>
                        <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                    </WrapItem>
                    <WrapItem>
                        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                    </WrapItem>
                </Wrap>

            </Box>



            {/* / Change the size to 120px */}
            <Box mt={8} pt={4} justifyContent="space-between" alignItems="center">

                <CircularProgress value={30} size='40px' color='orange.400' thickness='8px' >
                    <CircularProgressLabel>40%</CircularProgressLabel>
                </CircularProgress>
                <CircularProgress value={30} size='40px' color='blue.400' thickness='10px' >
                    <CircularProgressLabel>50%</CircularProgressLabel>
                </CircularProgress>
                <CircularProgress value={30} size='40px' color='red.400' thickness='12px' >
                    <CircularProgressLabel>60%</CircularProgressLabel>
                </CircularProgress>
            </Box>

            <Box mt={8} pt={4} justifyContent="space-between" alignItems="center">
                <Accordion>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    Section 1 title
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    Section 2 title
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>



            <Box mt={8} pt={4} justifyContent="space-between" alignItems="center">
                <StatGroup>
                    <Stat>
                        <StatLabel>Sent</StatLabel>
                        <StatNumber>345,670</StatNumber>
                        <StatHelpText>
                            <StatArrow type='increase' />
                            23.36%
                        </StatHelpText>
                    </Stat>

                    <Stat>
                        <StatLabel>Clicked</StatLabel>
                        <StatNumber>45</StatNumber>
                        <StatHelpText>
                            <StatArrow type='decrease' />
                            9.05%
                        </StatHelpText>
                    </Stat>
                </StatGroup>
            </Box>

            <Box mt={8} pt={4} justifyContent="space-between" alignItems="center">

            </Box>


        </Card>


    )

}