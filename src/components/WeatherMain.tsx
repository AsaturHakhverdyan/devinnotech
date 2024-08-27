import React from 'react'
import RightSide from './RightSide'
import { ISmallWeather } from '../interfaces/interfaces';

const WeatherMain = ({ data }: { data: any }) => {
  const celsius = Math.floor(data?.main?.temp - 273.15);
  const fahrenheit = Math.floor((celsius * 9 / 5) + 32);

  return (
    <section className='flex items-center justify-evenly'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-[40px] font-bold '>{data?.name}</h1>
        <p className='text-[32px] font-bold'>{celsius}C</p>
        {data?.weather?.map((item: ISmallWeather) => (
          <div key={item.description} className='flex flex-col items-center'>
            <img src={`http://openweathermap.org/img/wn/${item.icon}@4x.png`} alt="" />
            <p className='text-[28px] font-bold'>{item.main}</p>
          </div>
        ))}
      </div>
      <RightSide />
    </section>
  )
}

export default WeatherMain;
