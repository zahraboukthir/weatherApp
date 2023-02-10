import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  ChakraProvider,
  Flex,
  Heading,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCurrentData } from './JS/actions/actions';
export const Locations = () => {
  const { name } = useParams();
  console.log(name);
  const HandleClick = () => {
    // dispatch(select_location(Location));
  };
  console.log(name);

  // const URL = `http://api.weatherapi.com/v1/forecast.json?key=632ce770018b45c0a9e180343230302&&q=${name}&days=4&aqi=no&alerts=no
  // `;
  const data = useSelector(state => state.location.data);
  const onLoading = useSelector(state => state.location.onLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentData(name));

    // const fetchData = async () => {
    //   try {
    //     const result = await axios(URL);
    //     setAPIDATA(result.data.location);
    //     setdata.current(result.data.current);
    //     // setdata.forecast(result.data.forecast.forecastday);
    //     setToggle(false);
    //     setdata.forecast(result.data.forecast);
    //     console.log(data.forecast.forecastday);
    //   } catch (error) {
    //     setError(error);
    //   }
    // };
    // console.log(data.forecast);

    // var requestOptions = {
    //   method: 'GET',
    // };

    // fetch(
    //   'https://api.geoapify.com/v2/places?categories=commercial.supermarket&filter=rect%3A10.716463143326969%2C48.755151258420966%2C10.835314015356737%2C48.680903341613316&limit=20&apiKey=967386f36631440ea67e641eccb96b65',
    //   requestOptions
    // )
    //   .then(response => response.json())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));
    // fetchData();
  }, [name]);

  return (
    <>
      {onLoading ? (
        <Spinner size="xl" />
      ) : (
        <ChakraProvider>
          <Card maxW="md">
            <CardHeader>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar
                    name="Segun Adebayo"
                    src={data.current.condition.icon}
                  />
                  <Box>
                    <Heading size="sm">Location: {data.location.name}</Heading>
                    <Text>
                      Region:{' '}
                      {data.location.region
                        ? data.location.region
                        : data.location.name}
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>
                <p>It's {data.current.condition.text} today !</p>
                <p>with Temprature dwelling around {data.current.temp_c} °C</p>
              </Text>
            </CardBody>
            {/* <Map/> */}

            <CardFooter
              justify="space-between"
              flexWrap="wrap"
              sx={{
                '& > button': {
                  minW: '136px',
                },
              }}
            >
              {/* <h1>Location: {APIDATA.name}</h1>
            <h1>Region: {APIDATA.region ? APIDATA.region : APIDATA.name}</h1>
            <h1>Temprature: {data.current.temp_c} °C</h1>
            <h1>
              {data.current.condition.text}: <img src={data.current.condition.icon} alt="" />
            </h1> */}
              {data.forecast.forecastday.map((el, key) => (
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
