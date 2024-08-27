import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getWeather } from '../store/weather'
import { API_KEY } from '../constants/constants'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const WeaderFooter = () => {
  const data = useSelector((state: RootState) => state.weather);

  const dispatch = useDispatch()
  // useEffect(() => {
  //   (async () => {
  //     const data = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
  //     console.log(data)

  //   })()
  // }, [dispatch])
  return (
    <div>WeaderFooter</div>
  )
}

export default WeaderFooter;

//api չաշխատեց
