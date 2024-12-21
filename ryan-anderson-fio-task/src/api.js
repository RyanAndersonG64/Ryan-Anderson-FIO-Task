import axios from 'axios'

export const locationCheck = ({ city, state }) => {
  return axios({
    method: 'get',
    url: `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},US&limit=1&appid=4ec8e174794a1b4bf79276d10fe060be`,
    
  }).then(response => {
    return response
  }).catch(error => console.log('ERROR: ', error))
}

export const getWeather = ({ city, state }) => {
    return axios({
      method: 'get',
      url: `https://api.openweathermap.org/data/2.5/forecast?q=${city},${state},US&appid=4ec8e174794a1b4bf79276d10fe060be`,
      
    }).then(response => {
      return response
    }).catch(error => console.log('ERROR: ', error))
  }