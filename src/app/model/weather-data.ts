export interface WeatherData {
    weather: Weather[],
    main: Main,
    wind: Wind,
    sys: System,
    coord: Coordination,
    name: string
}

interface Main {
    temp: number,
    feels_like: number
}

interface Wind {
    speed: number
}

interface Coordination {
    lon: number,
    lat: number
}

interface System {
    country: string
}

interface Weather {
    description: string,
    icon: string
}
