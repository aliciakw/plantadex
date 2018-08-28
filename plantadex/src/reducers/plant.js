export const plantInitialState = {
  isMakingRequest: false,
  hasError: false,
  data: []
};

export default (state = plantInitialState, action) => {
  switch (action.type) {
    case 'REQUEST_PLANTS':
      return {
        ...state,
        isMakingRequest: true
      };
    case 'REQUEST_PLANTS_SUCCESS':
      console.log(state, action);
      return {
        isMakingRequest: false,
        hasError: false,
        data: action.data
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