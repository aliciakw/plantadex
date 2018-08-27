export const plantInitialState = {
  isMakingRequest: false,
  hasError: false,
  data: []
};

export default (state = plantInitialState, action) => {
  switch (action.type) {
    case 'REQUEST_PLANTS':
      return {
        isMakingRequest: true,
        ...state
      };
    case 'REQUEST_PLANTS_SUCCESS':
      return {
        isMakingRequest: false,
        hasError: false,
        data: action.plants
      };
    case 'REQUEST_PLANTS_FAILURE':
      return {
        isMakingRequest: false,
        hasError: true,
        data: []
      };
    default: 
      return state;
  }
};