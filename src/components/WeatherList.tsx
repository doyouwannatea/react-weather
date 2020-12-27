import React from 'react'
import { IError, IWeatherData } from '../types'
import Error from './Error'
import Loader from './Loader'

import WeatherItem from './WeatherItem'

type Props = {
    weatherList: IWeatherData[]
    isLoading: boolean
    error: IError
}

const WeatherList: React.FC<Props> = ({ weatherList, error, isLoading }) => {

    if (error.isError) {
        return <Error message={error.message} />
    }

    if (isLoading) {
        return <Loader />
    }

    return (
        <>
            {
                weatherList.map(day => <WeatherItem key={day.dt} {...day} />)
            }
        </>
    )
}
export default WeatherList