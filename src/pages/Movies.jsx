import { useState } from 'react';
import axios from 'axios';

//Components
import SearchBar from '../components/SearchBar';
import Results from '../components/Results';
import Popup from '../components/Popup';

function Movies() {
  /* INITIAL STATE
    # search - will be what is typed - intial state is an empty string
    # result - will be fetched data - intial state is an empty array
    # selected - will be which result is selected - intial state is an empty object */
  const [state, setState] = useState({
    search: '',
    results: [],
    selected: {}
  });

  // this needs to be stored in an .env file
  const apiurl = 'http://www.omdbapi.com/?apikey=79c5c98b';

  /* 
    # make enter/return key search
    # use axios to fetch API data
    # create variable (let - because scope will dictate we require our variable to change values i.e the next querry)
    # update state with retrived results */
  const search = (e) => {
    if (e.key === 'Enter') {
      axios(apiurl + '&s=' + state.search).then(({ data }) => {
        let results = data.Search;

        setState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };

  const handleInput = (e) => {
    let search = e.target.value;

    setState((prevState) => {
      return { ...prevState, search: search };
    });
  };

  /* 
    # use axios to fetch API data
    # create a variable (let - because scope will dictate we require our variable to change values i.e the next querry)
    # update state with retrived results */
  const openPopup = (id) => {
    axios(apiurl + '&i=' + id).then(({ data }) => {
      let result = data;
      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };

  // return to initial state
  const closePopup = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <div className='movies-page'>
      <section className='movies'>
        <SearchBar handleInput={handleInput} search={search} />
        <Results results={state.results} openPopup={openPopup} />

        {typeof state.selected.Title != 'undefined' ? (
          <Popup selected={state.selected} closePopup={closePopup} />
        ) : (
          false
        )}
      </section>
    </div>
  );
}

export default Movies;
