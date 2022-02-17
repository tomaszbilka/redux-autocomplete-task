export const fetchNamesBegin = () => {
  return (dispatch) => {
    dispatch({
      type: 'FETCH_NAMES_BEGIN',
    });
  };
};

export const fetchNamesSuccess = (names) => {
  return (dispatch) => {
    dispatch({
      type: 'FETCH_NAMES_SUCCESS',
      payload: { names },
    });
  };
};

export const fetchNamesError = (error) => {
  return (dispatch) => {
    dispatch({
      type: 'FETCH_NAMES_ERROR',
      payload: { error },
    });
  };
};
