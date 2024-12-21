import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { getWeather, locationCheck } from './api'

function App() {
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [weather, setWeather] = useState()


  // Weather data is broken into 3 hour increments; the states below are used to aggregate the incremental data into one overall daily forecast

  const [day1, setDay1] = useState()
  const [day1Main, setDay1Main] = useState('')
  const [day1Icon, setDay1Icon] = useState('')
  const [day1High, setDay1High] = useState(-1)
  const [day1Low, setDay1Low] = useState(400)

  const [day2, setDay2] = useState()
  const [day2Main, setDay2Main] = useState('')
  const [day2Icon, setDay2Icon] = useState('')
  const [day2High, setDay2High] = useState(-1)
  const [day2Low, setDay2Low] = useState(400)

  const [day3, setDay3] = useState()
  const [day3Main, setDay3Main] = useState('')
  const [day3Icon, setDay3Icon] = useState('')
  const [day3High, setDay3High] = useState(-1)
  const [day3Low, setDay3Low] = useState(400)

  const [day4, setDay4] = useState()
  const [day4Main, setDay4Main] = useState('')
  const [day4Icon, setDay4Icon] = useState('')
  const [day4High, setDay4High] = useState(-1)
  const [day4Low, setDay4Low] = useState(400)

  const [day5, setDay5] = useState()
  const [day5Main, setDay5Main] = useState('')
  const [day5Icon, setDay5Icon] = useState('')
  const [day5High, setDay5High] = useState(-1)
  const [day5Low, setDay5Low] = useState(400)

  const stateCodes = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']


  // Aggregates the 3-hour data for each day into a 'main' condition, and high and low temperatures


  // Day 1

  useEffect(() => {
    if (day1) {

      const conditions = { 'Thunderstorm': 0, 'Snow': 0, 'Rain': 0, 'Clouds': 0, 'Clear': 0 }

      let highTemp = -1
      let lowTemp = 400

      for (let i = 0; i < 8; i++) {
        conditions[day1[i].weather[0].main]++

        if (day1[i].main.temp_max > highTemp) {
          highTemp = day1[i].main.temp_max
        }

        if (day1[i].main.temp_min < lowTemp) {
          lowTemp = day1[i].main.temp_min
        }

      }


      // The most severe condition appearing during the day will be the one displayed on the forecast

      if (conditions['Thunderstorm'] > 0) {
        setDay1Main('Thunderstorm')
        setDay1Icon('11d')
      } else if (conditions['Snow'] > 0) {
        setDay1Main('Snow')
        setDay1Icon('13d')
      } else if (conditions['Rain'] > 0) {
        setDay1Main('Rain')
        setDay1Icon('10d')
      } else if (conditions['Clouds'] > 0) {
        setDay1Main('Clouds')
        setDay1Icon('02d')
      } else {
        setDay1Main('Clear')
        setDay1Icon('01d')
      }

      // Converts the high and low temperatures from Kelvin to Fahrenheit

      setDay1High(Math.round(((highTemp - 273.15) * 1.8 + 32) * 10) / 10)
      setDay1Low(Math.round(((lowTemp - 273.15) * 1.8 + 32) * 10) / 10)

    }
  }
    , [day1])


  // Day 2

  useEffect(() => {
    if (day2) {

      const conditions = { 'Thunderstorm': 0, 'Snow': 0, 'Rain': 0, 'Clouds': 0, 'Clear': 0 }

      let highTemp = -1
      let lowTemp = 400

      for (let i = 0; i < 8; i++) {
        conditions[day2[i].weather[0].main]++

        if (day2[i].main.temp_max > highTemp) {
          highTemp = day2[i].main.temp_max
        }

        if (day2[i].main.temp_min < lowTemp) {
          lowTemp = day2[i].main.temp_min
        }

      }

      // The most severe condition appearing during the day will be the one displayed on the forecast

      if (conditions['Thunderstorm'] > 0) {
        setDay2Main('Thunderstorm')
        setDay2Icon('11d')
      } else if (conditions['Snow'] > 0) {
        setDay2Main('Snow')
        setDay2Icon('13d')
      } else if (conditions['Rain'] > 0) {
        setDay2Main('Rain')
        setDay2Icon('10d')
      } else if (conditions['Clouds'] > 0) {
        setDay2Main('Clouds')
        setDay2Icon('02d')
      } else {
        setDay2Main('Clear')
        setDay2Icon('01d')
      }

      // Converts the high and low temperatures from Kelvin to Fahrenheit

      setDay2High(Math.round(((highTemp - 273.15) * 1.8 + 32) * 10) / 10)
      setDay2Low(Math.round(((lowTemp - 273.15) * 1.8 + 32) * 10) / 10)

    }
  }
    , [day2])


  // Day 3

  useEffect(() => {
    if (day3) {

      const conditions = { 'Thunderstorm': 0, 'Snow': 0, 'Rain': 0, 'Clouds': 0, 'Clear': 0 }

      let highTemp = -1
      let lowTemp = 400

      for (let i = 0; i < 8; i++) {
        conditions[day3[i].weather[0].main]++

        if (day3[i].main.temp_max > highTemp) {
          highTemp = day3[i].main.temp_max
        }

        if (day3[i].main.temp_min < lowTemp) {
          lowTemp = day3[i].main.temp_min
        }

      }

      // The most severe condition appearing during the day will be the one displayed on the forecast

      if (conditions['Thunderstorm'] > 0) {
        setDay3Main('Thunderstorm')
        setDay3Icon('11d')
      } else if (conditions['Snow'] > 0) {
        setDay3Main('Snow')
        setDay3Icon('13d')
      } else if (conditions['Rain'] > 0) {
        setDay3Main('Rain')
        setDay3Icon('10d')
      } else if (conditions['Clouds'] > 0) {
        setDay3Main('Clouds')
        setDay3Icon('02d')
      } else {
        setDay3Main('Clear')
        setDay3Icon('01d')
      }

      // Converts the high and low temperatures from Kelvin to Fahrenheit

      setDay3High(Math.round(((highTemp - 273.15) * 1.8 + 32) * 10) / 10)
      setDay3Low(Math.round(((lowTemp - 273.15) * 1.8 + 32) * 10) / 10)

    }
  }
    , [day3])


  // Day 4

  useEffect(() => {
    if (day4) {

      const conditions = { 'Thunderstorm': 0, 'Snow': 0, 'Rain': 0, 'Clouds': 0, 'Clear': 0 }

      let highTemp = -1
      let lowTemp = 400

      for (let i = 0; i < 8; i++) {
        conditions[day4[i].weather[0].main]++

        if (day4[i].main.temp_max > highTemp) {
          highTemp = day4[i].main.temp_max
        }

        if (day4[i].main.temp_min < lowTemp) {
          lowTemp = day4[i].main.temp_min
        }

      }

      // The most severe condition appearing during the day will be the one displayed on the forecast

      if (conditions['Thunderstorm'] > 0) {
        setDay4Main('Thunderstorm')
        setDay4Icon('11d')
      } else if (conditions['Snow'] > 0) {
        setDay4Main('Snow')
        setDay4Icon('13d')
      } else if (conditions['Rain'] > 0) {
        setDay4Main('Rain')
        setDay4Icon('10d')
      } else if (conditions['Clouds'] > 0) {
        setDay4Main('Clouds')
        setDay4Icon('02d')
      } else {
        setDay4Main('Clear')
        setDay4Icon('01d')
      }

      // Converts the high and low temperatures from Kelvin to Fahrenheit

      setDay4High(Math.round(((highTemp - 273.15) * 1.8 + 32) * 10) / 10)
      setDay4Low(Math.round(((lowTemp - 273.15) * 1.8 + 32) * 10) / 10)

    }
  }
    , [day4])


  // Day 5

  useEffect(() => {
    if (day5) {

      const conditions = { 'Thunderstorm': 0, 'Snow': 0, 'Rain': 0, 'Clouds': 0, 'Clear': 0 }

      let highTemp = -1
      let lowTemp = 400

      for (let i = 0; i < 8; i++) {
        conditions[day5[i].weather[0].main]++

        if (day5[i].main.temp_max > highTemp) {
          highTemp = day5[i].main.temp_max
        }

        if (day5[i].main.temp_min < lowTemp) {
          lowTemp = day5[i].main.temp_min
        }

      }

      // The most severe condition appearing during the day will be the one displayed on the forecast

      if (conditions['Thunderstorm'] > 0) {
        setDay5Main('Thunderstorm')
        setDay5Icon('11d')
      } else if (conditions['Snow'] > 0) {
        setDay5Main('Snow')
        setDay5Icon('13d')
      } else if (conditions['Rain'] > 0) {
        setDay5Main('Rain')
        setDay5Icon('10d')
      } else if (conditions['Clouds'] > 0) {
        setDay5Main('Clouds')
        setDay5Icon('02d')
      } else {
        setDay5Main('Clear')
        setDay5Icon('01d')
      }

      // Converts the high and low temperatures from Kelvin to Fahrenheit

      setDay5High(Math.round(((highTemp - 273.15) * 1.8 + 32) * 10) / 10)
      setDay5Low(Math.round(((lowTemp - 273.15) * 1.8 + 32) * 10) / 10)

    }
  }
    , [day5])

  // forecasts

  return (
    <>

      <h1>5-Day Forecast</h1>
      <h3>{city}, {state}</h3>

      {weather &&

        <div className='forecast-container'>

          <div className='forecast'>

            {/* Displays the date without time, since only one condition per day is being displayed */}
            <h3>{day1[0].dt_txt.slice(0, 11)}</h3>

            <div className='weather-data'>
              <h5>{day1Main}
                <img className='weather-icon' src={`https://openweathermap.org/img/wn/${day1Icon}@2x.png`} />
              </h5>
              <h5>High: {day1High} °F</h5>
              <h5>Low: {day1Low} °F</h5>
            </div>


            {/* This could be used in the future to allow the user to see a more detailed forecast for the day */}

            {/* {day1 && day1.map(day => (
              <div className='weather-data'>
                <h5>{day.weather[0].main}</h5>
                <img className='weather-icon' src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} />
                <br></br>
              </div>
            ))} */}

          </div>

          <div className='forecast'>
            <h3>{day2[0].dt_txt.slice(0, 11)}</h3>

            {/* {day2 && day2.map(day => (
              <div className='weather-data'>
                <h5>{day.weather[0].main}</h5>
                <img className='weather-icon' src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} />
                <br></br>
              </div>
            ))} */}

            <div className='weather-data'>
              <h5>{day2Main}
                <img className='weather-icon' src={`https://openweathermap.org/img/wn/${day2Icon}@2x.png`} />
              </h5>
              <h5>High: {day2High} °F</h5>
              <h5>Low: {day2Low} °F</h5>
            </div>

          </div>

          <div className='forecast'>
            <h3>{day3[0].dt_txt.slice(0, 11)}</h3>

            {/* {day3 && day3.map(day => (
              <div className='weather-data'>
                <h5>{day.weather[0].main}</h5>
                <img className='weather-icon' src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} />
                <br></br>
              </div>
            ))} */}

            <div className='weather-data'>
              <h5>{day3Main}
                <img className='weather-icon' src={`https://openweathermap.org/img/wn/${day3Icon}@2x.png`} />
              </h5>
              <h5>High: {day3High} °F</h5>
              <h5>Low: {day3Low} °F</h5>
            </div>

          </div>

          <div className='forecast'>
            <h3>{day4[0].dt_txt.slice(0, 11)}</h3>

            {/* {day4 && day4.map(day => (
              <div className='weather-data'>
                <h5>{day.weather[0].main}</h5>
                <img className='weather-icon' src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} />
                <br></br>
              </div>
            ))} */}

            <div className='weather-data'>
              <h5>{day4Main}
                <img className='weather-icon' src={`https://openweathermap.org/img/wn/${day4Icon}@2x.png`} />
              </h5>
              <h5>High: {day4High} °F</h5>
              <h5>Low: {day4Low} °F</h5>
            </div>

          </div>

          <div className='forecast'>
            <h3>{day5[0].dt_txt.slice(0, 11)}</h3>

            {/* {day5 && day5.map(day => (
              <div className='weather-data'>
                <h5>{day.weather[0].main}</h5>
                <img className='weather-icon' src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} />
                <br></br>
              </div>
            ))} */}

            <div className='weather-data'>
              <h5>{day5Main}
                <img className='weather-icon' src={`https://openweathermap.org/img/wn/${day5Icon}@2x.png`} />
              </h5>
              <h5>High: {day5High} °F</h5>
              <h5>Low: {day5Low} °F</h5>
            </div>

          </div>

        </div>
      }

      <div className="card">
        City: <input type='text' onChange={(e) => {
          setCity(e.target.value)
        }} /><br></br>

        {/* Since the API requires 2-letter state codes, a dropdown menu is used for state selection */}
        State:
        <select id='state' name='state' onChange={(e) => {
          setState(e.target.value)
        }} >
          <option value="">--</option>
          {stateCodes.map(code => {
            return (
              <option value={code}>{code}</option>
            )
          })
          }
        </select>
        <br></br>
        <button onClick={() => {
          if (city === '') {
            alert('Enter a city')
          } else if (state === '') {
            alert('Select a state')
          } else {
            locationCheck({ city, state })
              .then(response => {

                // If location is invalid, the geolocation API returns an empty array; fetching weather data only proceeds if the array is not empty
                if (response.data.length > 0) {
                  getWeather({ city, state })
                    .then(response => {
                      setWeather(response.data)

                      // Separates the data into sets for each of the 5 upcoming days
                      setDay1(response.data.list.slice(0, 8))
                      setDay2(response.data.list.slice(8, 16))
                      setDay3(response.data.list.slice(16, 24))
                      setDay4(response.data.list.slice(24, 32))
                      setDay5(response.data.list.slice(32, 40))
                    })
                } else {
                  alert('Invalid Location')
                }

              })
          }
        }}>
          See forecast for this location
        </button>
      </div>
    </>
  )
}

export default App
