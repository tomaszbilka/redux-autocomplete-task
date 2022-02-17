import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../store/index';
import { autocomplete } from '../utils/autocomplete';

import classes from './Input-field.module.css';

const InputField = () => {
  const state = useSelector((state) => state.names);
  const dispatch = useDispatch();

  const { fetchNamesBegin, fetchNamesSuccess, fetchNamesError } =
    bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    const fetchNamesFromApi = async () => {
      fetchNamesBegin();
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );

        if (!response.ok) {
          throw new Error('Sth went wrong witch fetching names!');
        }

        const data = await response.json();

        const namesArray = data.map((el) => el.username);

        fetchNamesSuccess(namesArray);
      } catch (err) {
        fetchNamesError(err.message || 'Sth went wrong witch fetching names!');
      }
    };

    fetchNamesFromApi();
  }, []);

  const autocompleteHandler = () => {
    const currentFocus = -1;
    autocomplete(document.getElementById('name'), state.names, currentFocus);
  };

  if (state.loading) return <p>Loading...</p>;

  if (state.error) return <p>{state.error}</p>;

  return (
    <form autoComplete='off'>
      <div className={classes.autocomplete}>
        <input
          id='name'
          type='text'
          name='name'
          placeholder='Name'
          onFocus={autocompleteHandler}
        />
        <button disabled={true}>Submit</button>
      </div>
    </form>
  );
};

export default InputField;
