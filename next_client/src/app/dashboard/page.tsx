"use client"

import { signOut } from "next-auth/react"
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'
import { useContext, useEffect } from 'react';
import SliderNav from '../components/slider/SliderNav';

import { ADD_USER, ADD_CALENDAR, GET_WEATHER } from "../services/state/actionTypes";
import { AppDispatchContext, AppStateContext } from "../containers/AppConainer";
import { getWeatherByLocation } from "../services/state/actions/user";

const Page = () => {
    const { data: session, status } = useSession();
    const state = useContext(AppStateContext)
    const dispatch = useContext(AppDispatchContext)
    useEffect(() => {
      async function fetchWeather() {
        const weatherData = await getWeatherByLocation()
        if(dispatch !== null) {
          dispatch({type: GET_WEATHER, payload: weatherData})
        }
      }
      fetchWeather()
    }, [])
    
    useEffect(() => {
      if(dispatch) {
        dispatch({type: ADD_USER, payload: session?.user})
        dispatch({type: ADD_CALENDAR, payload: session?.calendar})
      }
    },[session])

    const router = useRouter()

    useEffect(() => {
        if (status === 'unauthenticated') {
          router.push('/');
        }
      }, [status]);
    
      if (status === 'loading') return <p>Loading...</p>;
    
    return (
        <div>
            <SliderNav session={state?.user} handleSignOut={signOut}/>
        </div>
    )
}

export default Page