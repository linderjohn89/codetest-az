import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Outlet } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { SearchShows } from '../../services/TVMazeService';
import { setResult } from '../../store/searchResultReducer';
import './Layout.css';

export function Layout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get('query') ?? '');

  async function Search() {
    setSearchParams({ query: searchValue });
    const result = await SearchShows(searchValue);
    dispatch(setResult(result.data));
    navigate(`/?query=${searchValue}`);
  }

  useEffect(() => {
    const queryParam = searchParams.get('query');
    if (queryParam) {
      setSearchValue(queryParam);
      Search().then(() => console.log('Query available'));
    }
  }, []);

  return (
    <>
      <header>
        <h1>TV-Show finder</h1>
        <div className='search-bar'>
          <input
            onKeyDown={async (event) => event.key === 'Enter' && (await Search())}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            type='text'
            placeholder='Search for TV shows...'
          />
          <button id='searchButton' onClick={async () => await Search()}>
            Search
          </button>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
