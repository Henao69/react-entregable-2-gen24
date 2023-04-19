import React, { useState } from "react";

const WeatherCard = ({ weather, temperature }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const handleChangeTemperature = () => setIsCelsius(!isCelsius)

  return (
    <article className="card">
      <h1 className="card__title">Weather App</h1>
      <h2 className="card__subtitle">
        {weather?.name}, {weather?.sys.country}
      </h2>
      <section className="card__body">
        <header className="card__img-container">
            <img className="card__img" src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
        </header>
        <article className="card__info">
          <h3 className="card__info-title">"{weather?.weather[0].description}"</h3>
          <ul className="card__info-body">
            <li className="card__info-item">
              <span className="card__info-label">Winds Speed</span>
              {weather?.wind.speed}m/s
            </li>
            <li className="card__info-item">
              <span className="card__info-label">Clouds</span>
              {weather?.clouds.all}%
            </li>
            <li className="card__info-item">
              <span className="card__info-label">Pressure</span>
              {weather?.main.pressure}hPa
            </li>
          </ul>
        </article>
      </section>
      <footer className="card__footer">
        <h2 className="card__temperature">
          {isCelsius
            ? `${temperature?.celsius} °C`
            : `${temperature?.farenheit} °F`}
        </h2>
        <button className="card__btn" onClick={handleChangeTemperature}>Change to {isCelsius ? '°F' : '°C'}</button>
      </footer>
    </article>
  );
};

export default WeatherCard;
