import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getForecast } from '../store/weather'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { API_KEY } from '../constants/constants'

const RightSide = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    (async () => {
      const data = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=Yerevan&appid=${API_KEY}`)
      if (data.data.list) {
        dispatch(getForecast(data.data.list))
      }
    })()
  }, [dispatch])

  const data = useSelector((state: RootState) => state.forecast);

  return (
    <div className='py-4'>
      {data.slice(0, 8).map((item) => (
        <div key={item.dt} className='py-2 px-[30px] border-b flex items-center'>
          <p>{item.dt_txt}</p>
          <img src={`http://openweathermap.org/img/wn/${item?.weather[0]?.icon}@4x.png`} alt="W-icon" className='w-8 h-8' />
        </div>
      ))}
    </div>
  )
}

export default RightSide;
