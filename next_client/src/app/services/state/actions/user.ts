import { fetchWeatherApi } from 'openmeteo';

export async function getWeatherByLocation(latitude: number = 46.7667, longitude: number = 23.6) {
    const url: URL = process.env.NEXT_PUBLIC_WEATHER_URL;
    console.log(url)
    const params = {
        latitude,
	    longitude,
	    "hourly": "temperature_2m",
	    "forecast_days": 1
    }
    try {
        const responses  = await fetchWeatherApi(url, params)
        const range = (start: number, stop: number, step: number) =>
        Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);
        
        // Process first location. Add a for-loop for multiple locations or weather models
        const response = responses[0];
        
        // Attributes for timezone and location
        const utcOffsetSeconds = response.utcOffsetSeconds();
        const timezone = response.timezone();
        const timezoneAbbreviation = response.timezoneAbbreviation();
        const latitude = response.latitude();
        const longitude = response.longitude();
        
        const hourly = response.hourly()!;
        
        // Note: The order of weather variables in the URL query and the indices below need to match!
        const weatherData = {
        
            hourly: {
                time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
                    (t) => new Date((t + utcOffsetSeconds) * 1000)
                ),
                temperature2m: hourly.variables(0)!.valuesArray()!,
            },
        
        };
        
        // `weatherData` now contains a simple structure with arrays for datetime and weather data
        for (let i = 0; i < weatherData.hourly.time.length; i++) {
            console.log(
                weatherData.hourly.time[i].toISOString(),
                weatherData.hourly.temperature2m[i]
            );
        }
        return weatherData
    } catch (error) {
        console.log('Error ', error)
    }


}