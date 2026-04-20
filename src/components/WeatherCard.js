import Card from './Card';

export default function WeatherCard({ weather }) {
    return <Card colSpan="md:col-span-1" rowSpan="md:row-span-6" title="Weather">
        <div className="flex flex-col gap-2">
            <div className="text-sm font-light">
                <h2>{weather.name}</h2>
            </div>
            <p className="text-sm font-light">
                {weather.weather[0].main}
            </p>
            <p className="text-sm font-light">
                {weather.main.temp}°C
            </p>
            <p className="text-sm font-light">
                {weather.main.humidity}%
            </p>
        </div>
    </Card>
}
