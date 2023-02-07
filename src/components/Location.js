import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  ChakraProvider,
  Divider,
  Flex,
  Heading,
  IconButton,
  Image,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Map } from './Map';
export const Locations = () => {
  const { name } = useParams();
  console.log(name);
  const HandleClick = () => {
    // dispatch(select_location(Location));
  };
  console.log(name);

  const [APIDATA, setAPIDATA] = useState({});
  const [DayOne, setDayOne] = useState({});
  const [DayTwo, setDayTwo] = useState(null);
  const [DayThree, setDayThree] = useState({});
  const [DayFour, setDayFour] = useState({});
  const [Toggle, setToggle] = useState(true);
  const [error, setError] = useState(null);
  const URL = `http://api.weatherapi.com/v1/forecast.json?key=632ce770018b45c0a9e180343230302&&q=${name}&days=4&aqi=no&alerts=no
  `;
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(URL);
        setAPIDATA(result.data.location);
        setDayOne(result.data.current);
        // setDayTwo(result.data.forecast.forecastday);
        setToggle(false);
        setDayTwo(result.data.forecast);
        console.log(DayTwo.forecastday);
      } catch (error) {
        setError(error);
      }
    };
    console.log(DayTwo);

   
    var requestOptions = {
      method: 'GET',
    };
    
    fetch("https://api.geoapify.com/v2/places?categories=commercial.supermarket&filter=rect%3A10.716463143326969%2C48.755151258420966%2C10.835314015356737%2C48.680903341613316&limit=20&apiKey=967386f36631440ea67e641eccb96b65", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
      fetchData();
  }, [name]);

  return (
    <>
      {Toggle ? (
        <Spinner size="xl" />
      ) : (
       <ChakraProvider>
         
            <Card maxW='md'>
           <CardHeader>
             <Flex spacing='4'>
               <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
          <Avatar name='Segun Adebayo' src={DayOne.condition.icon} />
          <Box>
            <Heading size='sm'>Location: {APIDATA.name}</Heading>
            <Text>Region: {APIDATA.region ? APIDATA.region : APIDATA.name}</Text>
          </Box>
               </Flex>
               
             </Flex>
           </CardHeader>
           <CardBody>
             <Text>
               <p>It's {DayOne.condition.text} today !</p>
               <p>with Temprature dwelling around {DayOne.temp_c} °C</p>
             </Text>
           </CardBody>
          {/* <Map/> */}
         
           <CardFooter
             justify='space-between'
             flexWrap='wrap'
             sx={{
               '& > button': {
          minW: '136px',
               },
             }}
           >
            {/* <h1>Location: {APIDATA.name}</h1>
            <h1>Region: {APIDATA.region ? APIDATA.region : APIDATA.name}</h1>
            <h1>Temprature: {DayOne.temp_c} °C</h1>
            <h1>
              {DayOne.condition.text}: <img src={DayOne.condition.icon} alt="" />
            </h1> */}
            {DayTwo.forecastday.map((el, key) => (
              <div>
                <p>{el.date}</p>
              </div>
            ))}
           </CardFooter>
         </Card>
       </ChakraProvider>

   
       
      )}
    </>
  );
};
