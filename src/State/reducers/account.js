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
    default:
      return state;
      }
      
    };


  export default account