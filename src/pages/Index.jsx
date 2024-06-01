import { useState } from "react";
import { Container, Box, VStack, HStack, Text, Progress, CircularProgress, CircularProgressLabel, IconButton, Tabs, TabList, TabPanels, Tab, TabPanel, Stat, StatLabel, StatNumber, StatHelpText, StatGroup, Input, Button, FormControl, FormLabel, Switch } from "@chakra-ui/react";
import { FaApple, FaGoogle, FaUtensils, FaDumbbell, FaBed, FaCog } from "react-icons/fa";

const Index = () => {
  const [goal, setGoal] = useState("lose fat");
  const [efficiency, setEfficiency] = useState(75);
  const [restRecovery, setRestRecovery] = useState(80);
  const [diet, setDiet] = useState(70);
  const [workout, setWorkout] = useState(85);

  return (
    <Container maxW="container.xl" p={4}>
      <Tabs variant="soft-rounded" colorScheme="teal">
        <TabList>
          <Tab>Dashboard</Tab>
          <Tab>Statistics</Tab>
          <Tab>Goals</Tab>
          <Tab>Settings</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <VStack spacing={8}>
              <Box textAlign="center">
                <CircularProgress value={efficiency} size="120px" color="teal.400">
                  <CircularProgressLabel>{efficiency}%</CircularProgressLabel>
                </CircularProgress>
                <Text fontSize="xl" mt={4}>
                  Overall Efficiency
                </Text>
              </Box>
              <Box w="100%">
                <Text fontSize="lg" mb={2}>
                  Rest & Recovery
                </Text>
                <Progress value={restRecovery} size="lg" colorScheme="teal" />
              </Box>
              <Box w="100%">
                <Text fontSize="lg" mb={2}>
                  Diet
                </Text>
                <Progress value={diet} size="lg" colorScheme="teal" />
              </Box>
              <Box w="100%">
                <Text fontSize="lg" mb={2}>
                  Workout
                </Text>
                <Progress value={workout} size="lg" colorScheme="teal" />
              </Box>
            </VStack>
          </TabPanel>

          <TabPanel>
            <StatGroup>
              <Stat>
                <StatLabel>Total Steps</StatLabel>
                <StatNumber>10,000</StatNumber>
                <StatHelpText>Today</StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>Stand Hours</StatLabel>
                <StatNumber>12</StatNumber>
                <StatHelpText>Today</StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>Active Calories</StatLabel>
                <StatNumber>500</StatNumber>
                <StatHelpText>Today</StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>Sleep Duration</StatLabel>
                <StatNumber>7h 30m</StatNumber>
                <StatHelpText>Last Night</StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>Workout Intensity</StatLabel>
                <StatNumber>High</StatNumber>
                <StatHelpText>Today</StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>Dietary Intake</StatLabel>
                <StatNumber>1800 kcal</StatNumber>
                <StatHelpText>Today</StatHelpText>
              </Stat>
            </StatGroup>
          </TabPanel>

          <TabPanel>
            <VStack spacing={4}>
              <HStack spacing={4}>
                <Box textAlign="center">
                  <FaDumbbell size="40px" />
                  <Text mt={2}>Workout</Text>
                  <Text fontSize="lg">5 times/week</Text>
                </Box>
                <Box textAlign="center">
                  <FaBed size="40px" />
                  <Text mt={2}>Rest & Recovery</Text>
                  <Text fontSize="lg">8 hours/night</Text>
                </Box>
                <Box textAlign="center">
                  <FaUtensils size="40px" />
                  <Text mt={2}>Diet</Text>
                  <Text fontSize="lg">2000 kcal/day</Text>
                </Box>
              </HStack>
              <Box w="100%">
                <Text fontSize="lg" mb={2}>
                  Set Your Goals
                </Text>
                <FormControl>
                  <FormLabel>Goal</FormLabel>
                  <Input value={goal} onChange={(e) => setGoal(e.target.value)} />
                </FormControl>
                <Button mt={4} colorScheme="teal">
                  Save Goals
                </Button>
              </Box>
            </VStack>
          </TabPanel>

          <TabPanel>
            <VStack spacing={4}>
              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="apple-health" mb="0">
                  Connect to Apple Health
                </FormLabel>
                <Switch id="apple-health" />
                <IconButton aria-label="Apple Health" icon={<FaApple />} size="lg" ml={2} />
              </FormControl>
              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="google-fit" mb="0">
                  Connect to Google Fit
                </FormLabel>
                <Switch id="google-fit" />
                <IconButton aria-label="Google Fit" icon={<FaGoogle />} size="lg" ml={2} />
              </FormControl>
              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="myfitnesspal" mb="0">
                  Connect to MyFitnessPal
                </FormLabel>
                <Switch id="myfitnesspal" />
                <IconButton aria-label="MyFitnessPal" icon={<FaUtensils />} size="lg" ml={2} />
              </FormControl>
              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="fitbit" mb="0">
                  Connect to Fitbit
                </FormLabel>
                <Switch id="fitbit" />
                <IconButton aria-label="Fitbit" icon={<FaDumbbell />} size="lg" ml={2} />
              </FormControl>
              <Button colorScheme="teal" leftIcon={<FaCog />}>
                Manage Account
              </Button>
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default Index;
