import * as constant from '../constants';

export const setWeatherDetails = (data) => ({
    type: constant.SET_WEATHER,
    payload: {
        data
    }
});

export const fetchWeatherDetails = city => async (dispatch) => {
    const url = `${constant.WEATHER_URL}?q=${city}&appid=${constant.API_KEY}`;
    fetch(url)
        .then(response => response.json())
        .then(response => {
            dispatch(setWeatherDetails(response))
        })
        .catch(console.error)
};