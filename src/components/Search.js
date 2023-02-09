import { Button, Spinner } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export const Search = () => {
  const API_KEY = '632ce770018b45c0a9e180343230302';
  const API_ENDPOINT = `http://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=SEARCH_QUERY`;
  const [show, setshow] = useState(false);
  const searchLocations = async query => {
    const response = await axios.get(
      API_ENDPOINT.replace('SEARCH_QUERY', query)
    );
    return response.data;
  };
  const [query, setQuery] = useState('');
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    if (!query) {
      return;
    }
    searchLocations(query).then(data => {
      setLocations(data);

      console.log(data.lon,'location');
    });
  }, [query]);
  console.log(show);
  useEffect(() => {
    setshow(true);
  }, [setshow, locations, setLocations]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      
      {show
        ? locations.map((location, key) => (
            <div key={key}>
              <Link to={`/locations/${location.name}`}>
                <Button key={key} onClick={() => setshow(!show)}>
                  {location.name},{location.country}
                </Button>
              </Link>
            </div>
          ))
        : ( <Spinner size="xl" />)}
    </div>
  );
};
