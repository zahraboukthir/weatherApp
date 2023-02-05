import {
  Divider,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Locations = () => {
  const { name } = useParams();
  const HandleClick = () => {
    // dispatch(select_location(Location));
  };
  console.log(name);

  const [APIDATA, setAPIDATA] = useState({});
  const HTML = `https://api.weatherapi.com/v1/current.json?key=632ce770018b45c0a9e180343230302&q=${name}&aqi=no`;

  const getit = () => {
    axios
      .get(HTML)
      .then(response => {
        // Handle response
        console.log(response.data.current);
        setAPIDATA(response.data.current);
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  };
  useEffect(() => {
    getit();
  }, [APIDATA]);
  return (
    <>
      <h1>{name}</h1>
      <h1>{APIDATA.condition.text}</h1>
      <h1>{APIDATA.temp_c}°C</h1>
      <img src={APIDATA.condition.icon} alt="" />

      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};
