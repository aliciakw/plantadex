export const requestPlantData = () => ({
  type: 'REQUEST_PLANTS'
});

export const receivePlantData = (plants) => ({
  type: 'REQUEST_PLANTS_SUCCESS',
  plants
});

export const requestPlantDataError = () => ({
  type: 'REQUEST_PLANTS_FAILURE'
});
