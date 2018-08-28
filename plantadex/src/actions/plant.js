// import fetch from 'node-fetch';
// const API_ROOT_URL = 'http://local.dev:4567/api' // TODO: set this dynamically with an env var
const mockData = [
  {
    id: 1,
    symbol: "ABAB",
    common_name: "shrubby Indian mallow",
    scientific_name: "Abutilon abutiloides (Jacq.) Garcke ex Hochr.",
    family: "Malvaceae"
  },
  {
    id: 2,
    symbol: "ABAB70",
    common_name: "abietinella moss",
    scientific_name: "Abietinella abietina (Hedw.) Fleisch.",
    family: "Thuidiaceae"
  },
  {
    id: 3,
    symbol: "ABAL",
    common_name: "Ramshaw Meadows sand verbena",
    scientific_name: "Abronia alpina Brandegee",
    family: "Nyctaginaceae"
  }
];

export const requestPlantData = () => ({
  type: 'REQUEST_PLANTS'
});

export const receivePlantData = (data) => ({
  type: 'REQUEST_PLANTS_SUCCESS',
  data
});

export const requestPlantDataError = () => ({
  type: 'REQUEST_PLANTS_FAILURE'
});

export const fetchPlantData = async(dispatch) => {
  dispatch(requestPlantData());
  try {
    // Not working rn. Need to configure SSL on api.
    // const data = await fetch(`${API_ROOT_URL}/plants`);
    window.setTimeout(() => {
      dispatch(receivePlantData(mockData));
    }, 1500);
  } catch (e) {
    console.log('fetchPlantData ERROR!', e);
    dispatch(requestPlantDataError());
  }
};