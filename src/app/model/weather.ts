export interface Weather {
    name: string,
    country: string,
    image: string,
    description: string,
    temperature: number,
    feelsLike: number,
    wind: number,
    lat?: number,
    lon?: number
}
