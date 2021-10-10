export const addFavorite = (value) => ({
    type: 'ADD_FAVORITE',
    payload: {
      favoriteData: value,
    },
  });

export const apiResponse = (value) => ({
    type: 'ADD_API_RESPONSE',
    payload: {
      ApiData: value,
    },
  });

