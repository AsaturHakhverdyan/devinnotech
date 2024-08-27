import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getWeather } from "../store/weather"
import { useSelector } from "react-redux"
import { RootState } from "../store"
import Header from "../components/Header"
import WeatherMain from "../components/WeatherMain"
import WeaderFooter from "../components/WeaderFooter"
import { API_KEY } from "../constants/constants"
import { useSearchParams } from "react-router-dom"
import ErrorModal from "../components/errorModal"


function Home() {
  const dispatch = useDispatch()
  const [params, _] = useSearchParams()
  let sityName = params.size ? params.toString() : "Yerevan"
  let newSityName = sityName.split("").filter(el => el !== "=").join("")
  const [isError, setIsError] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${newSityName}&appid=${API_KEY}`)
        if (data.data) {
          dispatch(getWeather(data.data))
        }
      } catch (err: any | undefined) {
        setIsError(true)
        setTimeout(() => {
          setIsError(false)
        }, 1000)
      }
    })()
  }, [dispatch, newSityName])

  const data = useSelector((state: RootState) => state.weather)

  return (
    <div>
      <ErrorModal isError={isError} />
      <Header />
      <WeatherMain data={data} />
      <WeaderFooter />
    </div>
  );
}

export default Home;
