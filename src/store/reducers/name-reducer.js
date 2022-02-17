const initialState = {
  names: [],
  loading: false,
  error: null,
};

const fetchNamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_NAMES_BEGIN":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_NAMES_SUCCESS":
      return {
        ...state,
        loading: false,
        names: action.payload.names,
      };
    case "FETCH_NAMES_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        names: [],
      };

    default:
      return state;
  }
};

export default fetchNamesReducer;
