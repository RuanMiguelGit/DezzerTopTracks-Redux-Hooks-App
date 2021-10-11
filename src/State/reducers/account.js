const INITIAL_STATE = {
    apiResponse : {},
    favorites : [],
    loading : true,
  };


  const account = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'ADD_FAVORITE':
        return {
          ...state,
          favorites: [...state.favorites,
          { id: state.favorites.length, ...action.payload.favoriteData }],
        };

      case 'ADD_API_RESPONSE':
        return {
            ...state,
            apiResponse: action.payload.ApiData
        };

      case 'REMOVE_FAVORITE':
        return {
          ...state,
          favorites: state.favorites.filter((item) => item.id !== action.payload.delete),
    };

    default:
      return state;
      }
      
    };


  export default account