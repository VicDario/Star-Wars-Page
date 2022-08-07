import { useState } from 'react';

const initialState = {};

const useAppState = () => {
  const [state, setState] = useState(initialState);

  const addPeoplePage = (infoPage, numberPage) => {
    const newState = {
      ...state,
    };
    newState.characters[numberPage] = infoPage;
    setState({
      ...newState,
    });
  };

  return {
    state,
    addPeoplePage,
  };
};

export default useAppState;
