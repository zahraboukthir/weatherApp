import { Button, Spinner } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchValue } from './JS/actions/actions';
export const Search = () => {
  // const searchLocations = async query => {
  //   const response = await axios.get(
  //     API_ENDPOINT.replace('SEARCH_QUERY', query)
  //   );
  //   return response.data;
  // };
  const [query, setQuery] = useState('');
  const [show, setshow] = useState(false);
  const dispatch = useDispatch();
  const locations = useSelector(state => state.search.data);
  const loading = useSelector(state => state.search.onLoading);
  useEffect(() => {
    if (!query) {
      dispatch(getSearchValue('t'));
    } else {
      dispatch(getSearchValue(query));
    }
  }, [query]);
  console.log(show);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      {!show ? (
        <Spinner size="xl" />
      ) : (
        locations.length &&
        locations.map((location, key) => (
          <div key={key}>
            <Link to={`/locations/${location.name}`}>
              <Button key={key} onClick={() => setshow(!show)}>
                {location.name},{location.country}
              </Button>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};
